import React from 'react'
import Galeria1 from './img/galeria1.jpg';
import Galeria2 from './img/galeria2.jpg';
import Galeria3 from './img/galeria3.jpg';

const Carrusel = () => {
    return (
        <div>
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
				<p>Esta es una Galeria de imagenes creada con ayuda de bootstrap con imagenes de los recursos del curso de diseño web</p>
        </div>
    )
}

export default Carrusel
