import { useState } from "react";

export default function mouse() {
    //React Hooks
  const[x,alterarX] = useState(0); 
  

  const arrayY = useState(0);
  let y = arrayY[0];
  const alterarY = arrayY[1];
  

  const estilo = {
    backgroundColor: "#222",
    color: "#fff",
    flexDirection: "Column",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  function quandoMover(ev) {
      alterarX(ev.clientX)
      alterarY(ev.clientY)
    
    
  }
  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <div>Estilo X: {x}</div>
      <div>Estilo Y: {y}</div>
    </div>
  );
}
