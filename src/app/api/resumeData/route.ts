import { NextRequest, NextResponse } from "next/server";
import { createResumeData } from "../../../../prisma/resumeData";
import { deleteResumeData } from "../../../../prisma/resumeData";
import { updateResumeData } from "../../../../prisma/resumeData";

export async function POST(req: NextRequest) {
    try {
        const { resumeLink,
            skills,
            projects,
            education,
            certifications,
            awards,
            isInterned } = await req.json();
        const new_resumeData = await createResumeData(resumeLink, skills, projects, education, certifications, awards, isInterned);
        return NextResponse.json(new_resumeData,{
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.log(error); 
        return NextResponse.json( { error: 'Internal server error' }, {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}



export async function PUT(req: NextRequest) {
    try {
        const { id,
            resumeLink,
            skills,
            projects,
            education,
            certifications,
            awards,
            isInterned } = await req.json();
        const updated_resumeData = await updateResumeData(id, resumeLink, skills, projects, education, certifications, awards, isInterned);
        return NextResponse.json(updated_resumeData);
    } catch (error) {
        console.log(error); 
        return NextResponse.json({ error: 'Internal server error' }, {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}



export async function DELETE(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get('id');
        const deleted_resumeData = await deleteResumeData(id);
        return NextResponse.json(deleted_resumeData, {
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
        })
    }
}
            