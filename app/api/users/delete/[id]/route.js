import prisma from "@/app/lib/prismaClient";
import { NextResponse } from "next/server";
export async function DELETE(request, {params}){
    try {
        const deletedUser = await prisma.user.delete({
            where:{
                id: +params.id
            }
        });
        return NextResponse.json(deletedUser);
    } catch (error) {
        return NextResponse.json("An Error Occur : This Id isn't exists");
    }
   
}