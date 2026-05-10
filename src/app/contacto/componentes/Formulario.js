import React from "react";

const Formulario = () => {
  return (
    <div className="bg-[url(/assets/fondo.png)] bg-black/50 bg-blend-overlay w-full h-screen bg-cover bg-bottom flex items-center justify-center">
      <article className="py-18 px-15 flex flex-wrap items-center gap-10">
        <section className="bg-blue-900 text-white font-[Inter] p-8 boder-r-1 border-white flex flex-wrap gap-20 align-items-center justify-center">
          <div className="flex flex-col gap-20 items-center justify-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              <img src="/assets/phone.svg" className="w-[26%]"></img>
              <h4>Número de teléfono</h4>
              <h2>+1156483326</h2>
            </div>

            <div className="flex flex-col gap-4 items-center justify-center">
              <img src="/assets/clock.svg" className="w-[22%]"></img>
              <h4>Horario de asistencia</h4>
              <h2>Lunes a viernes 11 a 18hs</h2>
            </div>
          </div>
          <div className="flex flex-col gap-20 items-center justify-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              <img src="/assets/instagram.svg" className="w-[32%]"></img>
              <h4>Instagram</h4>
              <h2>@flavor.ok</h2>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <img src="/assets/mail.svg" className="w-[27%]"></img>
              <h4>Email</h4>
              <h2>info@flavorrecipies.com</h2>
            </div>
          </div>
        </section>
        <form className="bg-blue-900 h-full text-white font-[Inter] p-8 flex flex-col gap-10">
          <h2 className="font-medium font-[Aurora] text-xl">
            Envíanos un mensaje
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col">
              <label htmlFor="nombre" className="pb-4">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu nombre"
                required
                className="bg-white py-2 px-1 text-gray-900"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="pb-4">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="tuemail@ejemplo.com"
                required
                className="bg-white py-2 px-1 text-gray-900"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="asunto" className="pb-4">
              Asunto
            </label>
            <input
              type="text"
              id="asunto"
              placeholder="¿Sobre qué nos escribes?"
              required
              className="bg-white py-2 px-1 text-gray-900"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="mensaje" className="pb-4">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              rows="4"
              placeholder="Escribe tu mensaje aquí..."
              required
              className="bg-white py-2 px-1 text-gray-900"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-enviar bg-white text-blue-900 font-bold py-2 px-4 rounded hover:bg-blue-950 hover:text-white">
            Enviar mensaje
          </button>
        </form>
      </article>
    </div>
  );
};

export default Formulario;
