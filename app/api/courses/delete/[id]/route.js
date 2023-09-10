import prisma from "@/app/lib/prismaClient";
import { NextResponse } from "next/server";
export async function DELETE(request, {params}){
    try {
        const deletedCourse = await prisma.course.delete({
            where:{
                id: +params.id
            }
        });
        return NextResponse.json(deletedCourse);
    } catch (error) {
        return NextResponse.json("An Error Occur : This Id isn't exists");
    }
   
}