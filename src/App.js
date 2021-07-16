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
        <img src={Header} class="img-fluid" alt="..." className="my-3"></img>
      </header>

      <nav className="row bg-primary">
      <nav className="navbar navbar-expand-lg navbar-light p-3" style={{backgroundColor: 'rgb(183 255 244)'}}>
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
        
        <article className="col-md-3 bg-secondary">
          <div class="card" >
            <img src={Colibri} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          
        </article>

        <aside className="col-md-3 bg-primary">
          <hr/>
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
          <hr/>
          <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>
          <hr/>
          <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>
          <hr/>
          <p style={{color:'white'}}>En este apartado se esta considerando algunos tipos de botones y sus funcionalidades</p>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">Recipient:</label>
                      <input type="text" class="form-control" id="recipient-name"/>
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">Message:</label>
                      <textarea class="form-control" id="message-text"></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Send message</button>
                </div>
              </div>
            </div>
          </div>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel">Offcanvas right</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              ...
          </div>
          </div>
        </aside>
      </section>

      <section className="row bg-dark text-light">
        <article className="col-md-5 justify-content-center bg-success">
          <div className="d-flex align-items-stretch pt-2">
          <iframe width="100%" height="380"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d464.8446757469184!2d-71.54916641680117!3d-16.387950589452185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a6a0172d35d%3A0xebeb3b98aa2420d9!2sInstituto%20Superior%20Honorio%20Delgado%20Espinoza!5e0!3m2!1ses-419!2spe!4v1626405026975!5m2!1ses-419!2spe"  allowfullscreen="" loading="lazy"></iframe>
          </div>
          <h5>Los Arces 202 Distrito de cayma - Arequipa. </h5>
          <p>Numero de contacto: 054232323</p>
        </article>
        <article className="col-md-7 justify-content-center bg-secondary">
        <iframe width="100%" height="460" src="https://www.youtube.com/embed/cSOpnQXJu9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </article>
      </section>


      <footer className="row bg-dark text-light justify-content-center align-item-center p-5 mb-3">
        <div className="mx-auto" style={{width: '70%' , fontSize:'2rem' , justifyContent: 'center' , textAlign:'center'}}>
          <span>Informacion del sitio web</span>
        </div>
      </footer>

    </div>
  );
}

export default App;

