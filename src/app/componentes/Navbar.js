import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex items-center justify-between text-white">
      <h1>Flavor</h1>
      <div>
        <ul className="flex flex-nowrap gap-4  text-white">
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Sobre Nosotros</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar