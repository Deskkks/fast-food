export default function Card({children}){
  return(
    <div style={{
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "5px",
    }}>
      {children}
    </div>
  )
}