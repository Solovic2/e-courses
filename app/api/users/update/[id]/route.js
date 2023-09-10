import prisma from "@/app/lib/prismaClient";
import { NextResponse } from "next/server";
export async function PUT(request, {params}){
    try{
        const body = await request.json();
        const updatedUser = await prisma.user.update({
            where:{
                id: +params.id
            },
            data: body
        });
        return NextResponse.json(updatedUser);
    }catch(error){
        if (error.code === "P2002") {
            return NextResponse.json("This Email Is Already Exists!");
        }
        return NextResponse.json("An Error Occur : " + error);
    }
   
}