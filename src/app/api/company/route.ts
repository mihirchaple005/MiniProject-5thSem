// import { NextRequest, NextResponse } from 'next/server'
// import { createCompany } from '../../../../prisma/company';
// import { getAllCompanies } from '../../../../prisma/company';
// import { deleteCompany } from '../../../../prisma/company';

// export default async function handler(req : any, res : any) {

//     if (req.method === 'POST') { 
//         try {
//             const { companyName,
//                 companyLink,
//                 description,
//                 email,
//                 password,
//                 phoneNo,
//                 isHiring,
//                 jobPosts } = req.body

//             const new_company = await createCompany(companyName,
//                 companyLink,
//                 description,
//                 email,
//                 password,
//                 phoneNo,
//                 isHiring,
//                 jobPosts)

//             res.status(200)
//             .json(new_company,
//                 { message: 'Company created successfully' },
//                 { status: 200 });
        
//     }
//     catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

//     else if (req.method === 'GET') { 
//         try {
//             const companies = await getAllCompanies()

//             res.status(200)
//             .json(companies,
//                 { message: 'All companies fetched successfully' },
//                 { status: 200 });
            
//     }    
//     catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

//     else if (req.method === 'DELETE') {
//         try {

//             const { id } = req.query
//             const deleted_company = await deleteCompany(id)
//             res.status(200)
//             .json(deleted_company,
//                 { message: 'Company deleted successfully' },
//                 { status: 200 });
            
//         } catch (error) {
//             console.log(error);
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     }   

   

// }


import { NextRequest, NextResponse } from 'next/server'
import { createCompany } from '../../../../prisma/company';
import { getAllCompanies } from '../../../../prisma/company';
import { deleteCompany } from '../../../../prisma/company';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { companyName,
      companyLink,
      description,
      email,
      password,
      phoneNo,
      isHiring
       } = await req.json()

    const new_company = await createCompany(companyName,
      companyLink,
      description,
      email,
      password,
      phoneNo,
      isHiring)

    return NextResponse.json(new_company, {
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
    const companies = await getAllCompanies()

    return NextResponse.json(companies, {
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
    const deleted_company = await deleteCompany(id)

    return NextResponse.json(deleted_company, {
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