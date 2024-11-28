import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createAdmin = async (adminName: string, email: string, password: string) => {
    const admin = await prisma.admin.create({
        data: {
            adminName: adminName,
            email: email,
            password: password
        }
    })
    return admin
}


export const deleteAdmin = async (id : any) => {
    const admin = await prisma.admin.delete({
        where : {
            id : id
        }
    })

    return admin;
}