import prisma from "@/app/lib/prismaClient";
import { NextResponse } from "next/server";
export async function GET(request){
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        if (error.code === "P2002") {
            return NextResponse.json("This Email Is Already Exists!");
        }
        return NextResponse.json("An Error Occur : " + e);
    }
   
}