import React from 'react';
import Cart from '../icons/Cart';


const NavBar = () => {

const categorias = [
  {id: 1, name: 'Electrodomesticos'},
  {id: 2, name: 'Instrumentos musicales'},
  {id: 3, name: 'Celulares'}
];



  return (
    <div>
      <nav className='NavBar'>
        {categorias.map((categoria, index) => {
          return (
            <a className='TextoNav' href='#' key={index}>
              {categoria.name}
            </a>
          )
        })}
      <Cart />
      </nav>
    
    
    </div>

  )
}

export default NavBar;