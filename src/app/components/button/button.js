import styles from "./button.module.css"

export default function Button({disabled, text, type}){
  return(
    <button disabled={disabled} className={styles.button}>{text}</button>
  )
}