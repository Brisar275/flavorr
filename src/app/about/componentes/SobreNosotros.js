import React from "react";

const SobreNosotros = () => {
  return (
    <div className="py-18 px-15 flex flex-col gap-10 items-center">
      <h1 className="text-4xl font-[Aurora] text-blue-900">Sobre nosotros</h1>
      <article className="flex flex-row gap-7">
        <img src="/assets/pizza.jpg" alt="pizza" className="w-2/5 h-1/2"></img>
        <div className="flex flex-col gap-4">
          <section className="bg-blue-900 text-white font-[Inter] p-8">
            <h4 className="text-2xl font-[Inter] font-medium pb-4">
              ¿Qué es Flavor?
            </h4>
            <p>
              Flavor no es solo un recetario, es un espacio pensado para
              devolverle el placer a la cocina cotidiana. Creemos que el proceso
              de elegir qué comer debe ser tan satisfactorio como el plato
              terminado. Por eso, diseñamos una experiencia visual y directa,
              donde la gastronomía se manifiesta para inspirar tu día a día. No
              importa si recién estás dando tus primeros pasos entre las
              hornallas o si ya tenés confianza experimentando con nuevos
              sabores; esta plataforma está diseñada para acompañarte. Queremos
              que Flavor se convierta en esa fuente de inspiración diaria que te
              motive a probar combinaciones distintas, a romper con la rutina y
              a redescubrir la alegría de preparar tus propios platos con total
              seguridad y estilo.
            </p>
          </section>
          <section className="bg-blue-900 text-white font-[Inter] p-8">
            <h4 className="text-2xl font-[Inter] font-medium pb-4">
              Del caos a la simplicidad
            </h4>
            <p>
              Todo empezó con una frustración muy común: querer cocinar algo
              rápido y terminar perdiendo el tiempo en páginas llenas de
              anuncios, textos interminables y diseños caóticos. Decidimos
              cambiar las reglas. Flavor nació con el objetivo de limpiar el
              ruido digital y crear el recetario que nosotros mismos
              necesitábamos usar. De eso nació un entorno donde podes encontrar
              una receta que lleve segundos y donde la comida sea, por fin, la
              verdadera y única protagonista.
            </p>
          </section>
          <section className="bg-blue-900 text-white font-[Inter] p-8">
            <h4 className="text-2xl font-[Inter] font-medium pb-4">
              Tu cocina, tus reglas
            </h4>
            <p>
              Creemos que las recetas no son manuales estrictos, sino
              puntos de partida. Queremos desmitificar la idea de que cocinar
              rico requiere técnicas complejas o ingredientes inalcanzables.
              Nuestro enfoque está puesto en la comida real y cotidiana: sacar
              el máximo provecho de lo que tenés a mano, perderle el miedo a
              improvisar y entender que el mejor plato es aquel que disfrutás
              preparar.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default SobreNosotros;
