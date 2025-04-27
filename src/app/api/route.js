import { PrismaClient } from "@/generated/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const prisma = new PrismaClient({
  
})

export async function GET(req) {

  const searchParams = req.nextUrl.searchParams
  const id = searchParams.get("id")

  const cookieStore = await cookies()

  
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
  
  const update = await prisma.codes.update({
    where: {
      code: id,
      connected: false
    },
    data: {
      connected:true
    }
  })
  .then(() => {
    cookieStore.set("autorizado", true)
    cookieStore.set("userCode", id)
    redirect("/")
  })
  .catch(() => redirect("/negado"))

  redirect("/negado")
}