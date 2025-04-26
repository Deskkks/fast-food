"use client"

import { useState } from "react"
import { socket } from "@/socket"
import { redirect } from "next/navigation"
import Card from "@/app/components/card/card"

export default function Waiting() {

  const [ready, setReady] = useState(false)

  socket.on("ready", () => {
    setReady(true)
  })
  socket.on("taked", () => {
    const xhr = new XMLHttpRequest()
    xhr.open("POST", "/api/pedido"),
    xhr.send()
    
    redirect("/rating")
  })

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