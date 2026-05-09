import React from 'react'

const Banner = () => {
  return (
    <div className=" bg-[url(/assets/fondo.png)] bg-black/50 bg-blend-overlay w-full h-screen bg-cover bg-center flex flex-col gap-10 items-center justify-center">
      <h1 className="text-white text-6xl text-center font-[Aurora]">¿Qué vamos a cocinar hoy?</h1>
      <button className="bg-blue-900 text-white p-4 text-xl hover:bg-blue-950 font-[Inter] cursor-pointer">Explorar Recetas</button>
    </div>
  )
}

export default Banner