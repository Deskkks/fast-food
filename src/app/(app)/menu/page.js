﻿"use client"

import { useEffect, useState } from "react"
import styles from "./menu.module.css"
import Card from "@/app/components/card/card"
import Button from "@/app/components/button/button"
import SVG from "@/app/components/svgLogo/svg"
import Image from "next/image"
import axios from "axios"
import Cookies from "js-cookie"
import { redirect } from "next/navigation"
import { pusherClient } from "@/pusher"

export default function Menu() {

  const [salgado, setSalgado] = useState()
  const [doce, setdoce] = useState()
  const [bebida, setbebida] = useState()

  const [nome, setNome] = useState("")
  const [disabled, setDisabled] = useState(true)

  const produtos = [
    {
      tipo: "Salgado",
      produtos: [
        {
          nome: "Ambuloco",
          descricao: "Bolinho de milho assado com carne maluca de banana.",
          imagem: "/ambuloco.jpeg",
          value: salgado,
          setvalue: setSalgado
        },
        {
          nome: "Mandioquitos",
          descricao: " chips de mandioca servidos com maionese de tucupi e ketchup de goiabada.",
          imagem: "/aipimzitos.jpeg",
          value: salgado,
          setvalue: setSalgado
        },
      ]
    },
    {
      tipo: "Doce",
      produtos: [
        {
          nome: "Ambucoco",
          descricao: "bolo molhado com raspas de coco",
          imagem: "/ambucoco.jpeg",
          value: doce,
          setvalue: setdoce
        },
        {
          nome: "Ambucuca",
          descricao: "bolo de banana caramelizada crocante amanteigado",
          imagem: "/ambucuca.jpeg",
          value: doce,
          setvalue: setdoce
        },
      ]
    },
    {
      tipo: "Bebida",
      produtos: [
        {
          nome: "Suco de abacaxi",
          imagem: "/abacaxi.jpg",
          value: bebida,
          setvalue: setbebida
        },
        {
          nome: "Suco de maracujá",
          imagem: "/maracuja.jpg",
          value: bebida,
          setvalue: setbebida
        },
      ]
    }
    
  ]

  useEffect(() => {
    if(nome.length >=3){
      if(salgado || doce || bebida){
        setDisabled(false)
      }
    }
  }, [salgado, doce, bebida, nome])

  useEffect(() => {
    const id = Cookies.get("userCode")
    pusherClient.subscribe("amburana")

    pusherClient.bind(`${id}-orderS`, () => {
      console.log("ready")
      redirect("/waiting")
    })

    pusherClient.bind(`${id}-orderF`, () => {
      console.log("taked")
      redirect("/negado")
    })
    return () => {
      pusherClient.unsubscribe("amburana")
    }
  }, [])
  
  async function handleSubmit(e) {
    e.preventDefault()
    
    const newOrders = [
      {
        produto: salgado,
        tipo: "salgado"
      },
      {
        produto: doce,
        tipo: "doce"
      },
      {
        produto: bebida,
        tipo: "bebida"
      }
    ]
    
    const id = Cookies.get("userCode")
    const pedido = {newOrders: newOrders, nome: nome, id: id}
    const pedidoFeito = Cookies.get("pedido")
    if(!pedidoFeito){
      Cookies.set("pedido", true)
      axios.post("/api/newOrder", pedido)
    }else{
      redirect("/negado")
    }
  }

  return(
    <div className={styles.card}>
      <form onSubmit={handleSubmit}>
        <Card>
          <label className={styles.dignome}>
            DIGITE SEU NOME:
            <div className={styles.nome}>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
          </label>
          <div className={styles.conteiner}>
            {
              produtos.map((tipo, key) => (
                <div key={key}>
                  <div className={styles.tipo}>
                    {tipo.tipo}s: 
                  </div>
                  {
                    tipo.produtos.map((produto, key) =>(
                      <div className={styles.produto} key={key}>
                        <label htmlFor={produto.nome}>
                            <Image
                            src={produto.imagem}
                            alt={`Imagem do ${produto.nome}`}
                            width={150}
                            height={150}
                            className={`${styles.image} ${produto.value === produto.nome ? styles.imageOn : styles.imageOff}`}    
                          />
                          <input
                            type="radio"
                            name={tipo.tipo}
                            id={produto.nome}
                            onChange={() => produto.setvalue(produto.nome)}
                          />
                          <div>
                            <div className={styles.pNome}>
                              <div className={`${styles.svg} ${produto.value !== produto.nome ? styles.svgOn : styles.svgOff}`}>
                                <SVG/>
                              </div>
                              <p>{produto.nome}</p>
                            </div>
                            <div className={styles.descricao}>{produto.descricao}</div>
                          </div>
                        </label>
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
        </Card>
        <div className={styles.button}>
          <Button disabled={disabled} text={"FAÇA SEU PEDIDO"} />
        </div>
      </form>
    </div>
  )
}