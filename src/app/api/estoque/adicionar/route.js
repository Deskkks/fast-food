import { PrismaClient } from "@/generated/prisma";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()

export async function POST(req) {

  const formData = await req.json()
  const produto = formData.produto
  const quantidade = formData.quantidade
  const tipo = formData.tipo

  const newProduto = {
    produto: produto,
    quantidade: quantidade,
    tipo: tipo,
  }

  prisma.stocks.create({
    data: newProduto
  })
  
  revalidatePath("/dashboard/estoque", "page")
}