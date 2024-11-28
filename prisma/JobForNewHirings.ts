import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createJobForNewHiring = async (
  jobTitle     :    string,
  jobLocation  :    string,
  jobType       :   string,
  jobDescription :  string,
  image       :  string,
  requiredSkills :  string[],
  stipend      :    string,
  moreDetailsLink : string,
) => {
    const job = await prisma.jobForNewHirings.create({
        data: {
            jobTitle: jobTitle,
            jobLocation: jobLocation,
            jobType: jobType,
            jobDescription: jobDescription,
            image: image,
            requiredSkills: requiredSkills,
            stipend: stipend,
            moreDetailsLink: moreDetailsLink
        }
    })
    return job
}


export const getAllJobs = async () => {
    const jobs = await prisma.jobForNewHirings.findMany()
    return jobs
}


export const deleteJobForNewHiring = async (id: any) => {
    const job = await prisma.jobForNewHirings.delete({
        where: {
            id: id
        }
    })
    return job
}