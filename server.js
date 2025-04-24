import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";
import Data from "./src/app/api/pedido/data.js";
import { PrismaClient } from "./src/generated/prisma/index.js";

const prisma = new PrismaClient()

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost" || "amburana-production.up.railway.app";
const port = 8080;
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer, {
    cookie: true
  });

  io.on("connection", (socket) => {
    socket.on("new-order", async (pedido) => {
      
      let id = socket.id

      let quantidadeOrders = 0
      let limite = 5

      // criar comanda
      pedido.newOrders.map(newOrder => {
        if(newOrder.produto){
          quantidadeOrders++
        }
      })


      if(quantidadeOrders > 0){

        const create = await prisma.commands.create({
          data: {
            userId: id,
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
        console.log(pedido)

        const comandas = await prisma.commands.findMany({
          include: {
            orders: true
          },
          where: {
            pronto: false
          }
        })
        const data = Data(comandas)
        io.emit("cozinha-data", data)

      }

      // diminuir estoque
      pedido.newOrders.map(async newOrder => {
        if(newOrder.produto){
          
          const produto = await prisma.stocks.findUnique({
            where: {
              produto: newOrder.produto
            }
          })
          if(produto.quantidade > 0 ){
            let novaQuantidade = produto.quantidade-1
            if(novaQuantidade <= limite){
              io.emit("alert", produto.produto)
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
    })
    socket.on("ready", async (id) => {
      socket.to(id).emit("ready")

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

      io.emit("cozinha-data", cozinhaData)
      io.emit("retirada-data", retiradaData)
    })
    socket.on("incorrect", async (id) => {
      socket.to(id).emit("incorrect")

      const update = await prisma.commands.update({
        where: {
          userId: id
        },
        data: {
          pronto: true,
          entregue: true,
          incorreto: true
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

      io.emit("cozinha-data", cozinhaData)
      io.emit("retirada-data", retiradaData)

    })
    socket.on("taked", async (id) => {
      socket.to(id).emit("taked")

      const update = await prisma.commands.update({
        where: {
          userId: id
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

      const retiradaData = Data(retiradaComandas)
      io.emit("retirada-data", retiradaData)
    })
  });

  httpServer
  .once("error", (err) => {
    console.error(err);
    process.exit(1);
  })
  .listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});