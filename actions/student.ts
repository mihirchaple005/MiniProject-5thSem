"use server";

import { getSelf } from "../lib/auth-service";
import {revalidatePath} from "next/cache";
import {PrismaClient, Student} from "@prisma/client";

const db = new PrismaClient();

export const updateBio = async (values: Partial<Student>) => {
    try {
        const self = await getSelf();

        let clubs = values.collegeClub;
        if(typeof clubs === "string") {
            // @ts-ignore
        clubs = clubs.split(",");
        }

        const validData = {
           studentName: values.studentName,
           email: values.email,
           phone: values.phone,
           linkedin: values.linkedin,
           github: values.github,
           collegeClub: clubs,
           collegeEmail: values.collegeEmail,
        }

        const user = await db.student.update({
            where: {
                id: self.id
            },
            data:{
                ...validData
            }
        })

        revalidatePath(`/profile`);
        
        return user;

    }catch(e) {
        console.log(e);
        throw new Error("Something went wrong");
    }
}