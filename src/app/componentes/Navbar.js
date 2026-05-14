import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-blue-900 py-4 px-15 flex items-center justify-between text-white">
      <h1 className="font-[Aurora] text-2xl"> <Link href={'/'}>Flavor</Link></h1>
      <div>
        <ul className="flex flex-nowrap gap-4 font-[Inter] text-white">
          <li><Link href={'/'}>Inicio</Link></li>
          <li><Link href={'/about'}>Sobre Nosotros</Link></li>
          <li><Link href={'/contacto'}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar