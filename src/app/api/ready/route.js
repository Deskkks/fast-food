import { pusherServer } from "@/pusher";
import { PrismaClient } from "@/generated/prisma";
import Data from "../pedido/data";

const prisma = new PrismaClient()

export async function POST(req) {
  const {comanda} = await req.json()
  const id = comanda.userId
  pusherServer.trigger("amburana", `${id}-ready`, "teste")

  const update = await prisma.commands.updateMany({
  where: {
    userId: id,
    pronto: false
  },
  data: {
    pronto: true
  }
  })

  const cozinhaComandas = await prisma.commands.findMany({
    include: {
      orders: true
    },
    where: {
      pronto: false
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

  const cozinhaData = Data(cozinhaComandas)
  const retiradaData = Data(retiradaComandas)

  pusherServer.trigger("amburana", "cozinha-data", cozinhaData)
  pusherServer.trigger("amburana", "retirada-data", retiradaData)

  return new Response(JSON.stringify({ success: true }))
}