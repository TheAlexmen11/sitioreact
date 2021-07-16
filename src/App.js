import Headercode from './sitioweb/Header'
import MenuNav from './sitioweb/MenuNav'
import Carrusel from './sitioweb/Carrusel';
import CartTarjeta from './sitioweb/CartTarjeta';
import Aside from './sitioweb/Aside';
import MapaUbic from './sitioweb/MapaUbic';
import VideoAnime from './sitioweb/VideoAnime';
import Footer from './sitioweb/Footer';

function App() {
  return (
    <div className="container">
      <header className="row bg-secondary">
        <Headercode/>
      </header>
      <nav className="row bg-primary">
        <MenuNav/>
      </nav>
      <section className="row bg-primary"> 
        <article className="col-md-6 bg-warning"> 
        <Carrusel/>
        </article>
        <article className="col-md-3 bg-secondary">
          <CartTarjeta/>
        </article>
        <aside className="col-md-3 bg-primary">
          <Aside/>
        </aside>
      </section>
      <section className="row bg-dark text-light">
        <article className="col-md-5 justify-content-center bg-success">
          <MapaUbic/>
        </article>
        <article className="col-md-7 justify-content-center bg-secondary">
          <VideoAnime/>
        </article>
      </section>
      <footer className="row bg-dark text-light justify-content-center align-item-center p-5 mb-3">
        <Footer/>
      </footer>
    </div>
  );
}
export default App;

