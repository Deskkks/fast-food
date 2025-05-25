import { PrismaClient } from "@/generated/prisma"

export default function Data(comandas, code){

  const prisma = new PrismaClient()
  
  let data = []

  comandas.map((comanda) => {

    const id = prisma.codes.findUnique({
      where: {
        code: code
      }
    })

    let newData
    let salgado
    let doce
    let bebida
    comanda.orders.map(pedido => {
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
    newData = {
      nome: comanda.nome,
      id: id.id,
      salgado: salgado,
      doce: doce,
      bebida: bebida,
      userId: comanda.userId
    }
    data.push(newData)
  })

  return data
}