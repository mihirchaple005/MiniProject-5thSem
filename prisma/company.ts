import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createCompany = async (companyName: any,
    companyLink: any,
    description: any,
    email: any,
    password: any,
    phoneNo: any,
    isHiring: any,
    ) => {
    const company = await prisma.company.create({
        data: {
            companyName : companyName,
            companyLink : companyLink,
            description : description,
            email : email,
            password : password,
            phoneNo :  phoneNo,
            isHiring : isHiring
        }
        })
    return company
}

export const deleteCompany = async (id: any) => {
    const company = await prisma.company.delete({
        where: {
            id : id
        }
    })
    return company
}


export const getAllCompanies = async () => {
    const companies = await prisma.company.findMany(
        {
            orderBy: {
                createdAt : 'desc'
            }
        }
    )
    return companies
}

export const getCompanyById = async (id: any) => {
    const company = await prisma.company.findUnique({
        where: {
            id : id
        }
    })
    return company
}

