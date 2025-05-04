"use client"

import { useEffect, useState } from "react"
import styles from "../../(app)/dashboard/dashboard.module.css"
import { MdArrowForwardIos } from "react-icons/md"
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios"

export default function Retirada({data}) {

  const [entregar, setEntregar] = useState(false)
  const [incorrects, setIncorrects] = useState([])
    
  useEffect(() => {
    const dataIncorrects = []
    data.map((comanda, key) => {
      dataIncorrects.push(false)
    })
    setIncorrects(dataIncorrects)
  }, [])

  // useEffect(() => {
  //   updateIncorrects()
  // }, [data])

  function updateIncorrects(incorrectKey) {
    const newIncorrects = incorrects.map((incorrect, key) => {
      if(incorrectKey === key){
        return !incorrect
      }
      return incorrect
    })
    console.log(incorrects)
    setIncorrects(newIncorrects)
  }
  
  return(
    <div>
      <div className={styles.title}>
        <p>Pedidos para entregar: </p>
        <div>
          <MdArrowForwardIos
          className={entregar ? "arrowUp" : "arrowDown"}
          onClick={() => {
            setEntregar(!entregar)
          }}
        />
        </div>
      </div>
      {
        entregar && (
          data.map((comanda, key) => (
            <div key={key} className={styles.ContComanda}>
              <p>{comanda.nome}</p>
              <div className={styles.comanda}>
                <div className={styles.pedido}>
                  <p>{comanda.salgado}</p>
                </div>
                <div>
                  <p>{comanda.doce}</p>
                </div>
                <div className={styles.pedido}>
                  <p>{comanda.bebida}</p>
                </div>
                <div
                  className={styles.button}
                  onClick={async () => {
                    await axios.post("/api/taked", {comanda})
                  }}
                >Entregue</div>
                <div onClick={() => updateIncorrects(key)} className={styles.conteinerIncorrect}>
                  <BsThreeDotsVertical />
                  {
                    incorrects[key] && (
                      <div className={styles.incorrect}>
                        <div
                          onClick={async() => {
                            await axios.post("/api/incorrect", {comanda})
                          }}
                        >Incorreto</div>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          ))
        )
      }
    </div>
  )
}