"use client"

import { useEffect, useState } from "react"
import styles from "./dashboard.module.css"
import Loading from "@/app/components/loading/Loading"
import Cozinha from "@/app/components/cozinha/Cozinha"
import Retirada from "@/app/components/retirada/Retirada"
import { pusherClient } from "@/pusher"

export default function Dashboard() {

  const [retirada, setRetirada] = useState()
  const [cozinha, setCozinha] = useState()
  const [loading, setLoading] = useState(true)

  function getDatas() {
    fetch("/api/pedido/retirada")
    .then(res => {
      res.json()
      .then(data => {
        setRetirada(data)
      })
    })
    .catch(() => {
      console.log("erro")
    })
    
    fetch("/api/pedido/cozinha")
    .then(res => {
      res.json()
      .then(data => {
        setCozinha(data)
      })
    })
    .catch(() => {
      console.log("erro")
    })
  }

  useEffect(() =>{
    getDatas()
  }, [])
  
  useEffect(() => {
    if(cozinha && retirada){
      setLoading(false)
    }

  },[cozinha, retirada])

  pusherClient.subscribe("amburana")

  pusherClient.bind("cozinha-data", (data) => {
    setCozinha(data)
  })

  pusherClient.bind("retirada-data", (data) => {
    setRetirada(data)
  })

  return(
    <Loading loading={loading}>
      <div className={styles.conteiner}>
        {
          cozinha && (
            <Cozinha data={cozinha}/>
          )
        }
        {
          retirada && (
            <Retirada data={retirada}/>
          )
        }
      </div>
    </Loading>
  )
}