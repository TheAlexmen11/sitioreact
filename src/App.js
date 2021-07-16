import logo from './logo.svg';
import './App.css';
import C01componente from './components/C01componente';
import C02contador from './components/C02contador';
import C03componenteConCss from './components/C03compCss';
import EjemploDeEstado from './components/C04estado'
import EjemploDeDobleEstado from './components/C05dobleestado'

function App() {
  return (
    <div className="container">
      <header className="row bg-secondary">
        (Header - Cabecera)
        <C01componente />
      </header>

      <nav className="row bg-warning">
        (nav-menu)
        <C02contador/>
      </nav>

      <section className="row bg-primary"> 
        <article className="col-md-6 bg-warning"> 
          Articulo 1
          <C03componenteConCss/>
        </article>
        
        <article className="col-md-4 bg-secondary">
          Articulo 2
          <EjemploDeEstado/>
        </article>

        <aside className="col-md-2 bg-primary">
          aside
          <EjemploDeDobleEstado/>
        </aside>
        
      </section>

      <footer className="row bg-dark text-light">
        footer
      </footer>

    </div>
  );
}

export default App;

