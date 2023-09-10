import prisma from "@/app/lib/prismaClient";
import { PrismaClientValidationError } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(request){
    try {
        const body = await request.json();
        const create = await prisma.user.create({
            data : body
        });
        return NextResponse.json(create);
    } catch (error) {
        if (error.code === "P2002") {
            return NextResponse.json("This Email Is Already Exists!");
        }
        if (error instanceof PrismaClientValidationError) {
            return NextResponse.json("Please Add All Fields! (name, email, password)");
        } 
        return NextResponse.json("An Error Occur : " + error);
    }
   
}