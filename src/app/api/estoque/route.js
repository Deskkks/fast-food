import { PrismaClient } from "@/generated/prisma"

const prisma = new PrismaClient()

export async function GET() {
  const data = await prisma.stocks.findMany()

  return Response.json(data)
}