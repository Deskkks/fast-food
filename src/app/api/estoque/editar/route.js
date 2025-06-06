﻿import { PrismaClient } from "@/generated/prisma"

const prisma = new PrismaClient()

export async function POST(req){
  const request = await req.json()
  const Id = request.id
  const newValue = request.value

  const update = await prisma.stocks.update({
    where: {
      id:Id
    },
    data: {
      quantidade: newValue
    }
  })
  
  return new Response("success", {
    status: 200
  })
}