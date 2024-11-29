import { NextResponse , NextRequest } from "next/server";
import { createJobForNewHiring } from "../../../../prisma/JobForNewHirings";
import { deleteJobForNewHiring } from "../../../../prisma/JobForNewHirings";
import { getAllJobs } from "../../../../prisma/JobForNewHirings";


export async function POST(req: NextRequest) : Promise<NextResponse> {
    try {
        const { jobTitle,
            jobLocation,
            jobType,
            jobDescription,
            requiredSkills,
            stipend,
            moreDetailsLink,} = await req.json();
        const newJobForNewHiring = await createJobForNewHiring(jobTitle, jobLocation, jobType, jobDescription,  requiredSkills, stipend, moreDetailsLink);
        return NextResponse.json(newJobForNewHiring, {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
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

export async function GET(req: NextRequest) : Promise<NextResponse> {
    try {
        const jobs = await getAllJobs();
        return NextResponse.json(jobs, {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
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


export async function DELETE(req : NextRequest) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get('id');
        const deletedJobForNewHiring = await deleteJobForNewHiring(id);
        return NextResponse.json(deletedJobForNewHiring, {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
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