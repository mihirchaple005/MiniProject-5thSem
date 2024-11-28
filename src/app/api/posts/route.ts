import { NextResponse, NextRequest } from "next/server";
import { createPost } from "../../../../prisma/post";
import { getAllPosts } from "../../../../prisma/post";  
import { deletePost } from "../../../../prisma/post";
import { getPostById } from "../../../../prisma/post";


export async function POST(req: NextRequest) : Promise<NextResponse> {
    try {
        const { title, description, image, link } = await req.json();
        const newPost = await createPost(title, description, image, link);
        return NextResponse.json(newPost, {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal server error' }, {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}


export async function GET(req: NextRequest) {
    try {
        const posts = await getAllPosts();
        return NextResponse.json(posts, {    
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal server error' }, {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}


export async function DELETE(req : NextRequest) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get('id');
        const deletedPost = await deletePost(id);
        return NextResponse.json(deletedPost, {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }});

    } catch (error) {
        console.log("error accur while deleting post",error);
        return NextResponse.json({ error: 'Internal server error' }, {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}


export async function getById(req: NextRequest) : Promise<NextResponse> {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get('id');
        const posts = await getPostById(id);
        return NextResponse.json(posts, {    
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal server error' }, {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}