import './app.css';
import { useState } from 'react';
import Button from './componentes/button';
import Input from './componentes/input';
import ButtonReset from './componentes/buttonReset';
import { evaluate } from 'mathjs'; //*importamos la libreria mathjs para evaluar el input

function App() {

  const [input, setInput] = useState('');


  const agregarInput = val => {    
    setInput(input + val);                  
  };


  function resultado() {
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Agregue antes valores a calcular.")
    }
  };


  
  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Input input={input}/>
        <div className="fila">
          <Button manejarClic={agregarInput}>1</Button>
          <Button manejarClic={agregarInput}>2</Button>
          <Button manejarClic={agregarInput}>3</Button>
          <Button manejarClic={agregarInput}>+</Button>
        </div>
        <div className="fila">
          <Button manejarClic={agregarInput}>4</Button>
          <Button manejarClic={agregarInput}>5</Button>
          <Button manejarClic={agregarInput}>6</Button>   
          <Button manejarClic={agregarInput}>-</Button>
        </div>
        <div className="fila">
          <Button manejarClic={agregarInput}>7</Button>
          <Button manejarClic={agregarInput}>8</Button>
          <Button manejarClic={agregarInput}>9</Button>
          <Button manejarClic={agregarInput}>*</Button>  
        </div>
        <div className="fila">
          <Button manejarClic={resultado}>=</Button>
          <Button manejarClic={agregarInput}>0</Button>
          <Button manejarClic={agregarInput}>.</Button>
          <Button manejarClic={agregarInput}>/</Button>    
        </div>
        <div className="fila">
          <ButtonReset manejarReset={() => setInput('') }> 
            C
          </ButtonReset> 
        </div>
      </div>
    </div>
  );
}

export default App

/** linea 57 , método función flecha utilizado para limpiar el input. 
    linea 20, función "evaluate" del paquete mathjs, importado en linea 6, instalado desde la terminal
    (npm install mathjs)**/