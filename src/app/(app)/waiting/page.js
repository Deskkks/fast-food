"use client"

import { useEffect, useState } from "react"
import { redirect } from "next/navigation"
import Card from "@/app/components/card/card"
import { pusherClient } from "@/pusher"
import Cookies from "js-cookie"

export default function Waiting() {

  const [ready, setReady] = useState(false)

  useEffect(() => {
    const id = Cookies.get("userCode")
    pusherClient.subscribe("amburana")

    pusherClient.bind(`${id}-ready`, () => {
      console.log("ready")
      setReady(true)
    })

    pusherClient.bind(`${id}-taked`, () => {
      console.log("taked")
      redirect("/rating")
    })
    return () => {
      pusherClient.unsubscribe("amburana")
    }
  }, [])

  return(
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "400px",
      height: "100%",
      textAlign: "center",
    }}>
      <Card>
        <div style={{
          width:"330px",
          margin:"0 auto",
          color: "#032A0D"
        }}>
          {
            !ready ? (
              <h2>SEU PEDIDO ESTÁ SENDO PREPARADO</h2>
            ) : (
              <h2>SEU PEDIDO ESTÁ PRONTO</h2>
            )
          }
        </div>
      </Card>
      <div style={{
        color: "white",
        marginTop: "10px",
        fontWeight: "bolder",
        marginBottom: "70px"
      }}>
        Assim que seu pedido estiver pronto, a mensagem acima será atualizada!
      </div>
    </div>
  )
}