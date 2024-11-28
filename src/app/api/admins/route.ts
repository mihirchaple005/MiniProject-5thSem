import { NextResponse, NextRequest } from "next/server";
import { createAdmin } from "../../../../prisma/admin"

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
      
        const { adminName,
            email,
            password } = await req.json()

      const new_admin = await createAdmin(adminName, email, password)
  
      return NextResponse.json(new_admin, {
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
