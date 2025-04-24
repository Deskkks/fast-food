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

  const cookieStore = await cookies()
  const userCode = cookieStore.get("userCode").value

  const update = await prisma.codes.update({
    where: {
      code: userCode
    },
    data: {
      connected: false
    }
  })
  return Response("success")
}