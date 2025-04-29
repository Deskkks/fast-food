import { PrismaClient } from "@/generated/prisma";
import { cookies } from "next/headers";

const prisma = new PrismaClient()

export async function GET() {

  const data = await prisma.commands.findMany({
    include: {
      orders: true
    }
  })

  return Response.json(data)
}

export async function POST() {

  
  return Response("success")
}