import styles from "./button.module.css"

export default function Button({disabled, text, type}){
  return(
    <div className={type == 1 ? styles.button1 : styles.button2}>
      <button disabled={disabled}>{text}</button>
    </div>
  )
}