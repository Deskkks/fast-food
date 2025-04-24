import { PrismaClient } from "@/generated/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req) {

  const prisma = new PrismaClient()

  const searchParams = req.nextUrl.searchParams
  const id = searchParams.get("id")

  const cookieStore = await cookies()

  const codes = await prisma.codes.findMany()

  codes.map((code) => {
    if(id === code.code && code.connected === false){
      cookieStore.set("autorizado", true)
      cookieStore.set("userCode", id)
      code.update({
        code: code.code,
        connected: true
      })
      redirect("/")
    }
  })

  if(id === "4"){
    cookieStore.set("autorizado", true)
    cookieStore.set("dashboard", true)
    redirect("/dashboard")
  }
  
  if(id === "5"){
    cookieStore.set("autorizado", true)
    cookieStore.delete("pedido")
    redirect("/menu")
  }

  redirect("/negado")
}