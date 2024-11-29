
import { NextResponse } from 'next/server';
import { pusherServer } from "../../../../lib/pusher";
import { PrismaClient } from "@prisma/client";
import { getSelf } from '../../../../lib/auth-service';

export async function POST(request: Request) {
    const prisma = new PrismaClient();
    try {
        const currentUser = await getSelf();
        const body = await request.json();

        const { userId, isGroup, members, name } = body;

        if(!currentUser?.id || !currentUser?.email) {
            return new NextResponse('Unauthorized', {status:401})
        }

        if(isGroup && (!members || members.length < 2 || !name)) {
            return new NextResponse('Invalid data', { status: 400 })
        }

        if(isGroup) {
            const newConversation = await prisma.conversation.create({
                data: {
                    name, 
                    isGroup,
                    students: {
                        connect: [
                            ...members.map((member: {value: string})=> ({
                                id:member.value
                            })),
                            {
                                id: currentUser.id 
                            }
                        ]
                    }
                },
                include: {
                    students: true 
                }
            })

            newConversation.students.forEach((user)=> {
                if(user.email) {
                    pusherServer.trigger(user.email, 'conversation:new', newConversation)
                }
            })

            return NextResponse.json(newConversation);
        }

        const existingConversations = await prisma.conversation.findMany({
            where: {
                OR: [
                    {
                        userIds: {
                            equals: [currentUser.id, userId]
                        }
                    },
                    {
                        userIds: {
                            equals: [userId, currentUser.id]
                        }
                    }
                ]
            }
        })

        const existingConversation = existingConversations[0];

        if(existingConversation) {
            return NextResponse.json(existingConversation)
        }

        const newConversation = await prisma.conversation.create({
            data: {
                students: {
                    connect: [
                        {
                            id: currentUser.id 
                        },
                        {
                            id: userId 
                        }
                    ]
                }
            },
            include: {
                students: true
            }
        })

        newConversation.students.map((user) => {
            if(user.email) {
                pusherServer.trigger(user.email, 'conversation:new', newConversation)
            }
        })

        return NextResponse.json(newConversation);

    } catch (error) {
        return new NextResponse('Internal Error', { status: 500 })
    }
} 
