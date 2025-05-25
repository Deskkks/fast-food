import { PrismaClient } from "@/generated/prisma"
import Data from "../data.js"
import { cookies } from "next/headers.js"

export async function GET() {

  const cookieStore = await cookies()
  const code = cookieStore.get("userCode")

  const prisma = new PrismaClient()

  const comandas = await prisma.commands.findMany({
    include: {
      orders: true
    },
    where: {
      pronto: true,
      entregue: false
    }
  })

  const data = Data(comandas, code)

  return Response.json(data)
}