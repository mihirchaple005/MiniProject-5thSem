import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createStudent = async (
  studentName : string,
  email : string,
  password : string,
  phone : string,
  linkedin : string,
  github : string,
  collegeClub : string[],
  collegeEmail : string,
  isAlumni : boolean
) => {
        const student = await prisma.student.create({
         data : {
            studentName : studentName,
            email : email, 
            password : password,
            phone : phone, 
            linkedin : linkedin, 
            github : github,  
            collegeClub : collegeClub,
            collegeEmail : collegeEmail,
            isAlumni : isAlumni
        } })
    return student
}


export const getAllStudents = async () => {
    const students = await prisma.student.findMany(
        {
            orderBy: {
                createdAt: 'desc'
            }
        }
    )
    return students
}




export const deleteStudent = async (id: any) => {
    const student = await prisma.student.delete({
        where: {
            id : id
        }
    })
    return student
}



export const getStudentById = async (id: any) => {
    const student = await prisma.student.findUnique({
        where: {
            id : id
        }
    })
    return student
}




