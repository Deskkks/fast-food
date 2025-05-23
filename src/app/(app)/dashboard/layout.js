﻿"use client"

import Link from "next/link";
import styles from "./layout.module.css"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  
  const pathName = usePathname()

  const [pedidos, setPedidos] = useState(false)
  const [avalicao, setAvalicao] = useState(false)
  const [estoque, setEstoque] = useState(false)

  useEffect(() => {
    console.log(pathName)
    if(pathName === "/dashboard"){
      setPedidos(true)
      setAvalicao(false)
      setEstoque(false)
    }
    if(pathName === "/dashboard/avaliacoes"){
      setPedidos(false)
      setAvalicao(true)
      setEstoque(false)
    }
    if(pathName === "/dashboard/estoque"){
      setPedidos(false)
      setAvalicao(false)
      setEstoque(true)
    }
  }, [pathName])


  return (

    <div className={styles.conteiner}>
      <div className={styles.conteinerDashboard}>
        <nav>
          <ul className={styles.navigation}>
            <div style={pedidos ? {backgroundColor: "#aaa"} : {backgroundColor:"#fff"}}>
              <Link href={"/dashboard"}><li>Pedidos</li></Link>
            </div>
            <div style={estoque ? {backgroundColor: "#aaa"} : {backgroundColor:"#fff"}}>
              <Link href={"/dashboard/estoque"}><li>Estoque</li></Link>
            </div>
            <div style={avalicao ? {backgroundColor: "#aaa", borderWidth: 0} : {backgroundColor:"#fff", borderWidth: 0}}>
              <Link href={"/dashboard/avaliacoes"}><li>Avaliações</li></Link>
            </div>
          </ul>
        </nav>
        {children}
      </div>
    </div>
  );
}
