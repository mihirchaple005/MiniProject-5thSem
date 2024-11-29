import {currentUser} from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export const getSelf = async () => {
    const self = await currentUser();

    if(!self || !self.username) {
        throw new Error("Unauthorized")
    }

    const user = await db.student.findUnique({
        where: {
            clerkId: self.id
        }
    })

    if(!user) {
        console.log(user)
        throw new Error("Not found")
    }

    return user;
}

export const getSelfByUsername = async (username: string) => {
    const self = await currentUser();

    if(!self || !self.username) {
        throw new Error("Unauthorized")
    }

    const user = await db.student.findUnique({
        where: {
            id: self.id,
            studentName: username,
        }
    })

    if(!user) {
        throw new Error("Not found")
    }

    if(self.username !== user.studentName) {
        console.log(self.username, user)
        throw new Error("Unauthorized")
    }

    return user;
}