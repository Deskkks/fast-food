import { PrismaClient } from "@/generated/prisma"
import Data from "../pedido/data"
import { pusherServer } from "@/pusher"

const prisma = new PrismaClient()

export async function POST(req) {

  const {comanda} = await req.json()
  const id = comanda.userId

  pusherServer.trigger("amburana", `${id}-taked`, "teste")
  
  const update = await prisma.commands.updateMany({
    where: {
      userId: id,
      entregue: false
    },
    data: {
      entregue: true
    }
  })

  const retiradaComandas = await prisma.commands.findMany({
    include: {
      orders: true
    },
    where: {
      pronto: true,
      entregue: false
    }
  })

  
  const retiradaData = await Data(retiradaComandas)
  pusherServer.trigger("amburana", "retirada-data", retiradaData)
  
  const updateCode = await prisma.codes.update({
    where: {
      code: id
    },
    data: {
      connected: false
    }
  })
  
  return new Response(JSON.stringify({ success: true }))
}