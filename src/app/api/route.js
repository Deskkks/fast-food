import { PrismaClient } from "@/generated/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const prisma = new PrismaClient()

export async function GET(req) {

  const searchParams = req.nextUrl.searchParams
  const id = searchParams.get("id")

  const cookieStore = await cookies()

  
  if(id === "4"){
    cookieStore.set("autorizado", true)
    cookieStore.set("dashboard", true)
    redirect("/dashboard")
  }
  
  if(id === "oP8q4dzAE5Wakthh2n4694"){
    cookieStore.set("autorizado", true)
    cookieStore.set("userCode", id)
    cookieStore.delete("pedido")
    redirect("/")
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
  .catch((err) => {
    console.log("negado", err)
    redirect("/negado")
  })
  .then((res) => {
    console.log("aceito", res)
    cookieStore.set("autorizado", true)
    cookieStore.set("userCode", id)
    redirect("/")
  })
  redirect('/negado')
}