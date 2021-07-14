import logo from './logo.svg';
import './App.css';
import C01componente from './components/C01componente';
import C02contador from './components/C02contador';
import C03componenteConCss from './components/C03compCss';
import EjemploDeEstado from './components/C04estado'
import EjemploDeDobleEstado from './components/C05dobleestado'

function App() {
  return (
    <div className="App">
      <C01componente />
      <hr></hr>
      <C02contador/>
      <hr/>
      <C03componenteConCss/>
      <br/>
      <EjemploDeEstado/>
      <br/>
      <EjemploDeDobleEstado/>
    </div>
  );
}

export default App;

