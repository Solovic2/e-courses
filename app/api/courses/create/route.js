import prisma from "@/app/lib/prismaClient";
import { PrismaClientValidationError } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(request){
    try {
        const body = await request.json();
        const create = await prisma.course.create({
            data : body
        });
        return NextResponse.json(create);
    } catch (error) {
        if (error instanceof PrismaClientValidationError) {
            return NextResponse.json("Please Add All Fields! (title, description, start_date, end_date, duration)");
        } 
        return NextResponse.json("An Error Occur : " + error);
    }
   
}