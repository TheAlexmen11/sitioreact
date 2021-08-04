import React from 'react'
import Colibri from './img/procesador.gif';

const CartTarjeta = () => {
    return (
        <div>
            <div class="card" >
                <img src={Colibri} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Procesadores</h5>
                <p class="card-text">Encuentra los procesadores más recientes de Intel para PCs, desktops, laptops, estaciones de trabajo y servidores, diseñados para todos los casos de uso</p>
                <a href="#" class="btn btn-primary">Adquirir Productos</a>
            </div>
          </div>
        </div>
    )
}

export default CartTarjeta
