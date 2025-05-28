import { PrismaClient } from "@/generated/prisma"
import Data from "../data.js"

const prisma = new PrismaClient()

export async function GET() {

  const comandas = await prisma.commands.findMany({
    include:{
      orders: true
    },
    where: {
      pronto: false
    }
  })

  const data = await Data(comandas)
  
  return Response.json(data)
}