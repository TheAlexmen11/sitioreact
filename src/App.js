import logo from './logo.svg';
import './App.css';
/*import C01componente from './components/C01componente';
import C02contador from './components/C02contador';
import C03componenteConCss from './components/C03compCss';
import EjemploDeEstado from './components/C04estado';
import EjemploDeDobleEstado from './components/C05dobleestado';*/
import Galeria1 from '../src/sitioweb/img/galeria1.jpg';
import Galeria2 from '../src/sitioweb/img/galeria2.jpg';
import Galeria3 from '../src/sitioweb/img/galeria3.jpg';
import Colibri from '../src/sitioweb/img/colibri.jpg';
import Header from '../src/sitioweb/img/header.jpg';
function App() {
  return (
    <div className="container">
      <header className="row bg-secondary">
        (Header - Cabecera)
        <img src={Header} class="img-fluid" alt="..."></img>
      </header>

      <nav className="row bg-primary">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </nav>

      <section className="row bg-primary"> 
        <article className="col-md-6 bg-warning"> 
          Articulo 1
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
				  <div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"
					></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				  </div>
				  <div className="carousel-inner">
					<div className="carousel-item active">
					  <img src={Galeria1} className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
					  <img src={Galeria2} className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
					  <img src={Galeria3} className="d-block w-100" alt="..." />
					</div>
				  </div>
				  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" >
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				  </button>
				  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				  </button>
				</div>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea minus vel saepe, a, excepturi odit fuga aperiam.</p>
        </article>
        
        <article className="col-md-4 bg-secondary">
          Articulo 2
          <div class="card" >
            <img src={Colibri} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          
        </article>

        <aside className="col-md-2 bg-primary">
          aside
          <br/>
        </aside>
        
      </section>

      <footer className="row bg-dark text-light">
        footer
      </footer>

    </div>
  );
}

export default App;

