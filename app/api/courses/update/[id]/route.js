import prisma from "@/app/lib/prismaClient";
import { NextResponse } from "next/server";
export async function PUT(request, {params}){
    try{
        const body = await request.json();
        const updatedCourse = await prisma.course.update({
            where:{
                id: +params.id
            },
            data: body
        });
        return NextResponse.json(updatedCourse);
    }catch(error){
        return NextResponse.json("An Error Occur : " + error);
    }
   
}