import { prisma } from '@@/prisma/index';
import Student from '@@/prisma/index';
import { NextRequest, NextResponse } from "next/server";


export default async function handler(req : NextRequest, res : NextResponse) {
    if (req.method === 'GET') { 
        try {
            const getProfileInfo = async function getProfileInfo() : Promise<any> {
                const res = await fetch('http://localhost:3000/api/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${req.headers.get('Authorization')}`
                    }
                })
                
            }
        
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
}