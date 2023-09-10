import prisma from "@/app/lib/prismaClient";
import { PrismaClientValidationError } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET(request){
    try {
        const courses = await prisma.course.findMany();
        return NextResponse.json(courses);
    } catch (error) {
        return NextResponse.json("An Error Occur : " + error);
    }
   
}