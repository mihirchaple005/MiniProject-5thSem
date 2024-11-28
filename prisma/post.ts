import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export const createPost = async (
    title       : string,
    description : string,
    image       : string,
    link        : string
) => {
    const post = await prisma.post.create({
        data: {
            title: title,
            description: description,
            image: image,
            link: link
        }
    })
    return post
}


export const getAllPosts = async () => {
    const posts = await prisma.post.findMany({
        orderBy : {
            date : 'desc'
        }
    })
    return posts
}


export const getPostById = async (id: any) => {
    const post = await prisma.post.findUnique({
        where: {
            id: id
        }
    })
    return post
}

export const deletePost = async (id: any) => {
    const post = await prisma.post.delete({
        where: {
            id: id
        }
    })
    return post
}

