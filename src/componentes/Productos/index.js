import React from 'react'
import IMG from "../../images/img01.jpg"

export const ProductosLista = () => {
  return (
    <>
    <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        <div className="producto">
          <a href="#">
            <div className="producto__img">
              <img src={IMG} alt=""/> 
            </div>
          </a>
          <div className="producto__footer">
            <h1>title</h1>
            <p>categoria</p>
            <p className="price">$320</p>
          </div>
          <div className="bottom">
            <button className="btn">Añadir al carrito</button>
            <div>
              <a href="#" className="btn">vista</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
