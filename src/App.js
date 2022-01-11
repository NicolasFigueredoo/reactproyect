import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1,setLinea1] = useState("")
  const [linea2, setLinea2] = useState("")
  const [imagen , setImagen] = useState("")

  const onChangelinea1 = function(event){
    setLinea1(event.target.value)
  }
  const onChangelinea2 = function(event){
    setLinea2(event.target.value)
  }

  const onChangeImagen =  function(event){
    setImagen(event.target.value)
  }

  const botonexportar =  function(event){
    html2canvas(document.querySelector("#meme")).then(canvas => {
    let img = canvas.toDataURL("image/png")
    let link = document.createElement("a")
    link.download = "meme.png"
    link.href = img;
    link.click()
    });
  
  }


  return (
    <div className="App">
   <select onChange={onChangeImagen}>
     <option value="fire">Casa en llamas</option> 
     <option value="history">History</option> 
     <option value="futurama">Futurama</option> 
     </select> <br/>

     <input onChange={onChangelinea1} type="text" placeholder="1er linea"/><br/>
     <input onChange={onChangelinea2} type="text" placeholder="2da linea"/><br/>
     <button onClick={botonexportar}>Exportar</button>

     <div className="meme" id="meme">
       <span>{linea1}</span> <br/>
       <span>{linea2}</span>
       <img src={"/img/" + imagen + ".jpg"}/>

     </div>

    </div>
  );
}

export default App;
