import { NextRequest, NextResponse } from 'next/server'
import { createStudent } from '../../../../prisma/student';
import { getAllStudents } from '../../../../prisma/student';
import { deleteStudent } from '../../../../prisma/student';


export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { studentName, email, password, phone, linkedin, github, collegeClub, collegeEmail, isAlumni } = await req.json()

    const new_student = await createStudent(studentName, email, password, phone, linkedin, github, collegeClub, collegeEmail, isAlumni)

    return NextResponse.json(new_student, {
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


export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const students = await getAllStudents()

    return NextResponse.json(students, {
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


export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    const deleted_student = await deleteStudent(id)

    return NextResponse.json(deleted_student, {
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