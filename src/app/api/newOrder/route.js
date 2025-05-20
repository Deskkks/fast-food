import { pusherServer } from "@/pusher.js";
import Data from "../pedido/data.js";
import { PrismaClient } from "@/generated/prisma";
import { cookies } from "next/headers.js";

const prisma = new PrismaClient()

export async function POST(request) {

  const pedido = await request.json()
  console.log(pedido) 

  const cookieStore = await cookies()
  cookieStore.delete("autorizado")

  const pedidoFeito = cookieStore.has("pedido")

  if(!pedidoFeito){

    cookieStore.set("pedido", true)

    let quantidadeOrders = 0
    let limite = 10
  
    // criar comanda
    pedido.newOrders.map(newOrder => {
      if(newOrder.produto){
        quantidadeOrders++
      }
    })
  
    if(quantidadeOrders > 0){
  
      const create = await prisma.commands.create({
        data: {
          userId: pedido.id,
          nome: pedido.nome,
          pronto: false,
          entregue: false,
          orders: {
            createMany: {
              data: pedido.newOrders
            }
          }
        }
      })
  
      const comandas = await prisma.commands.findMany({
        include: {
          orders: true
        },
        where: {
          pronto: false
        }
      })
      const data = Data(comandas)
      pusherServer.trigger("amburana", "cozinha-data", data)
    }
  
    // diminuir estoque
    pedido.newOrders.map(async newOrder => {
      if(newOrder.produto){
        
        const produto = await prisma.stocks.findUnique({
          where: {
            produto: newOrder.produto
          }
        })
        if(produto && produto.quantidade > 0 ){
          let novaQuantidade = produto.quantidade-1
          if(novaQuantidade <= limite){
            console.log(`${produto.produto} está acabando`)
            pusherServer.trigger("amburana", "alert", produto.produto)
          }
          const update = await prisma.stocks.update({
            where: {
              produto: produto.produto
            },
            data: {
              quantidade: novaQuantidade
            }
          })
        }
      }
      // prototipo do estoque de embalagens
      // newOrder.embalagens.map((embalagem) => {
      //   stock.findOne({where:{produto: embalagem}})
      //   .then(produto => {
      //     let novaQuantidade = produto.quantidade-1
      //     produto.update({quantidade: novaQuantidade})
      //   })
      // })
    })
    pusherServer.trigger("amburana", `${pedido.id}-orderS`, "data")
    return new Response(JSON.stringify(200))
  } else {
    const userCode = cookieStore.get("userCode").value
    
    const update = await prisma.codes.update({
      where: {
        code: userCode
      },
      data: {
        connected: false
      }
    })
    pusherServer.trigger("amburana", `${pedido.id}-orderF`, "data")
    return new Response(JSON.stringify(400))

  }
}