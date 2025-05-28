import { PrismaClient } from "@/generated/prisma"

const prisma = new PrismaClient()

export default async function Data(comandas){

  const data = await Promise.all(comandas.map(async(comanda) => {
    let id
  
    const find = await prisma.codes.findUnique({
      where: {
        code: comanda.userId
      }
    })

    if(comanda.userId !== "oP8q4dzAE5Wakthh2n4694") {
      id = find.id
    } else {
      id = 26
    }
    let salgado
    let doce
    let bebida
    comanda.orders.forEach(pedido => {
      if(pedido.tipo === "salgado"){
        salgado = pedido.produto
      }
      if(pedido.tipo === "doce"){
        doce = pedido.produto
      }
      if(pedido.tipo === "bebida"){
        bebida = pedido.produto
      }
    })
    return {
      nome: comanda.nome,
      id: id,
      salgado: salgado,
      doce: doce,
      bebida: bebida,
      userId: comanda.userId
    }
  }))
  return data
}