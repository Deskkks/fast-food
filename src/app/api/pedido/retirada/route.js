import { PrismaClient } from "@/generated/prisma"
import Data from "../data.js"

export async function GET() {

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

  const data = Data(comandas)

  return Response.json(data)
}