function Button({ label, onClick, type = "default", disabled = false }) {
  const color = type === "danger" ? "red" : type === "success" ? "green" : "blue"
  return (
    <button style={{
    border:`1px solid ${color}`,
    backgroundColor:color,
        borderRadius:5,
        padding:5,
        color:"white",
        marginLeft:10
  }} onClick={onClick} disabled={disabled}>{label}</button>
  );
}
export default Button;