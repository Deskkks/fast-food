import Image from "next/image";
import styles from "../home.module.css"

export default function Thanks() {
  return(
    <div className={styles.conteiner}>
      <div>
        <Image alt="Logo Amburana" src="/logo.png" width={500} height={500}/>
        <div className={styles.text}>AMBURANA</div>
      </div>
      <p>AGRADECEMOS SUA PARTICIPAÇÃO!</p>
    </div>
  )
} 