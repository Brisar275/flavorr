import React from 'react'

const SobreNosotros = () => {
  return (
    <div className="py-18 px-15 flex flex-col gap-10 items-center">
        <h1 className="text-4xl font-[Aurora] text-blue-900">Sobre nosotros</h1>
        <div className="flex flex-row gap-10">
            <img src='/assets/pizza.jpg' alt='pizza' className="w-2/5 h-1/2"></img>
            <p className="bg-blue-900 text-white font-[Inter] p-4">Flavor no es solo un recetario, es un espacio pensado para devolverle el placer a la cocina cotidiana. Creemos que el proceso de elegir qué comer debe ser tan satisfactorio como el plato terminado. Por eso, diseñamos una experiencia visual y directa, donde la gastronomía se manifiesta para inspirar tu día a día.
              No importa si recién estás dando tus primeros pasos entre las hornallas o si ya tenés confianza experimentando con nuevos sabores; esta plataforma está diseñada para acompañarte. Queremos que Flavor se convierta en esa fuente de inspiración diaria que te motive a probar combinaciones distintas, a romper con la rutina y a redescubrir la alegría de preparar tus propios platos con total seguridad y estilo.
            </p>
        </div>
    </div>
  )
}

export default SobreNosotros