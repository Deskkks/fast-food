import { PrismaClient } from "@/generated/prisma";
import { pusherServer } from "@/pusher";
import Data from "../pedido/data";

const prisma = new PrismaClient()


export async function POST({req}) {
  pusherServer.sendToUser(req.id, "ready")

  const update = await prisma.commands.update({
    where: {
      userId: id
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
    pusherServer.trigger("amburana", "cozinha-data", retiradaData)
}