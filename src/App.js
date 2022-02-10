import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(evento) {
    

    setLinea1(evento.target.value);

  }
  const onChangeLinea2 = function(evento) {
    

    setLinea2(evento.target.value);

  }
  const onChangeImagen = function(evento) {
    

    setImagen(evento.target.value);

  }
  const onClickExportar = function(evento) {
    

    html2canvas(document.querySelector("#meme")).then(canvas => {

      
      let img    = canvas.toDataURL("image/png");

      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });

  }

  

  return (
    <div className="App" id='meme'>
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
      <button onClick={onClickExportar}>Exportar</button>

      <div className='meme'>
        <span>{linea1}</span> <br />
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} alt="" />
      </div>
      


    </div>
  );
}

export default App;
