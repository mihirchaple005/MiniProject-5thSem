
import { NextResponse } from "next/server";
import { pusherServer } from "../../../../lib/pusher";
import { getSelf } from "../../../../lib/auth-service";
import { PrismaClient, Student } from "@prisma/client";

export async function POST(request:Request){
    try {
        const currentUser = await getSelf();
        const prisma = new PrismaClient();
        
        const body = await request.json();

        const { message, image, conversationId } = body;

        if(!currentUser?.id || !currentUser?.email) {
            return new NextResponse('Insufficient Data', { status: 400 })
        }

        const newMessage = await prisma.message.create({
            data: {
                body: message,
                image: image,
                conversation: {
                    connect: {
                        id: conversationId
                    }
                },
                sender: {
                    connect: {
                        id: currentUser.id 
                    }
                },
                seen: {
                    connect: {
                        id: currentUser.id 
                    }
                }
            },
            include: {
                seen: true,
                sender: true 
            }
        })

        const updatedConversation = await prisma.conversation.update({
            where: {
                id: conversationId
            },
            data: {
                lastMessageAt: new Date(),
                messages: {
                    connect: {
                        id: newMessage.id 
                    }
                }
            },
            include: {
                students: true,
                messages: {
                    include: {
                        seen: true
                    }
                }
            }
        })

        await pusherServer.trigger(conversationId, 'messages:new', newMessage)
        const lastMessage = updatedConversation.messages[updatedConversation.messages.length - 1]

        updatedConversation.students.map((user: Student) => {
            pusherServer.trigger(user.email!, 'conversation:update', {
                id: conversationId,
                messages: [lastMessage]
            })
        })

        return NextResponse.json(newMessage);


    } catch (error: any) {
        console.error(error, 'ERROR MESSAGES')
        return new NextResponse('Internal Server Error', { status: 500 })    
    }
}