"use client"

import { useEffect, useState } from "react"
import styles from "../../(app)/dashboard/dashboard.module.css"
import { MdArrowForwardIos } from "react-icons/md"
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios"

export default function Cozinha({data}) {

  const [fazer, setFazer] = useState(false)
  const [incorrects, setIncorrects] = useState([])
  
  useEffect(() => {
    data.map((comanda, key) => {
      incorrects.push(false)
      console.log(incorrects)
    })
  }, [])

  function updateIncorrects(incorrectKey) {
    const newIncorrects = incorrects.map((incorrect, key) => {
      if(incorrectKey === key){
        return !incorrect
      }
      return incorrect
    })

    setIncorrects(newIncorrects)
  }
  
  return(
    <div>
      <div className={styles.title}>
        <p>Pedidos para Fazer: </p>
        <div>
          <MdArrowForwardIos
          className={fazer ? "arrowUp" : "arrowDown"}
          onClick={() => {
            setFazer(!fazer)
          }}
        />
        </div>
      </div>
      {
        fazer && (
          data.map((comanda, key) => (
            <div key={key} className={styles.ContComanda}>
              <p>{comanda.nome}</p>
              <div className={styles.comanda}>
                <div>
                  <p>{comanda.salgado}</p>
                </div>
                <div>
                  <p>{comanda.doce}</p>
                </div>
                <div>
                  <p>{comanda.bebida}</p>
                </div>
                <div
                  className={styles.button}
                  onClick={async() => {
                    await axios.post("api/ready", {comanda})
                  }}
                >Pronto</div>
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