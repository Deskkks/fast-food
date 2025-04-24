import { PrismaClient } from "@/generated/prisma"

export async function GET() {
  const prisma = new PrismaClient()

  const data = await prisma.stocks.findMany()

  return Response.json(data)
}