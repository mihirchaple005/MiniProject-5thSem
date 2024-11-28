import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createResumeData = async (
  resumeLink  :   string,
  skills        : string[],
  projects       :string[],
  education     : string[],
  certifications : string[],
  awards        : string[],
  isInterned : boolean
) => {
    const resumeDataCreated = await prisma.resumeData.create({
        data: {
            resumeLink : resumeLink,
            skills : skills,
            projects : projects,
            education : education,
            certifications : certifications,
            awards : awards,
            isInterned : isInterned
        }
    })
    return resumeDataCreated
}


export const deleteResumeData = async (id: any) => {
    const resumeData = await prisma.resumeData.delete({
        where: {
            id : id
        }
    })
    return resumeData
}

export const updateResumeData = async (id: any, resumeLink: string, skills: string[], projects: string[], education: string[], certifications: string[], awards: string[], isInterned: boolean) => {
    const resumeData = await prisma.resumeData.update({
        where: {
            id : id
        },
        data: {
            resumeLink : resumeLink,
            skills : skills,
            projects : projects,
            education : education,
            certifications : certifications,
            awards : awards,
            isInterned : isInterned
        }
    })
    return resumeData
}