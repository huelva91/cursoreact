import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [iamgen, setImagen] = useState('');

  const onChangeLinea1 = function(evento) {
    debugger;

    setLinea1(evento.target.value);

  }
  const onChangeLinea2 = function(evento) {
    debugger;

    setLinea2(evento.target.value);

  }
  const onChangeImagen = function(evento) {
    debugger;

    setImagen(evento.target.value);

  }

  

  return (
    <div className="App">
      <select onChange={onChangeImagen} name="" id="">
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History chanel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Filofo raptor</option>
        <option value="smart">Smart guy</option>
      </select> <br />

      <input onChange={onChangeLinea1} type="text" name="" id="" placeholder='Linea 1' /> <br />
      <input onChange={onChangeLinea2} type="text" name="" id="" placeholder='Linea 2' /> <br />
      <button>Exportar</button>

      <div>
        <span>{linea1}</span> <br />
        <span>{linea2}</span>
        <img src="" alt="" />
      </div>
      


    </div>
  );
}

export default App;
