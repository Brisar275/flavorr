import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-blue-900 py-4 px-13 flex items-center justify-between text-white">
      <h1 className="font-[Aurora] text-2xl">Flavor</h1>
      <div>
        <ul className="flex flex-nowrap gap-4 font-[Inter] text-white">
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Sobre Nosotros</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar