
import { PrismaClient } from '@prisma/client';
import { getSelf } from '../lib/auth-service';

const getUsers = async () => {
    const prisma = new PrismaClient();
    const currentUser = await getSelf();

    try {
        const users = await prisma.student.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            where: { 
                NOT: {
                    email: currentUser.email
                }
            }
        })

        return users;

    }catch(error) {
        return [];
    }
}

export default getUsers;