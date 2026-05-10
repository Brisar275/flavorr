import React from "react";

const Formulario = () => {
  return (
    <div className="bg-[url(/assets/fondo.png)] bg-black/50 bg-blend-overlay w-full h-screen bg-cover bg-bottom">
      <article className="py-18 px-15 flex flex-wrap items-center">
        <section className="bg-blue-900 text-white font-[Inter] p-8 min-w-[20%] boder-r-1 border-white flex flex-wrap gap-20 align-items-center justify-center">
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
      </article>
    </div>
  );
};

export default Formulario;
