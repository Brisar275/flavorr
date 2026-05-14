"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Loading from "@/app/componentes/Loading";

const RecipeContainer = ({ id }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://dummyjson.com/recipes/${id}`;
        const responseId = await fetch(url);
        const responseDataId = await responseId.json();
        setData(responseDataId);
      } catch (error) {
        console.log("Mi error fue", error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="font-[Inter] bg-blue-900">
      {data ? (
        <div className="mx-40 pt-15 flex flex-col items-center bg-white">
          <h1 className="mb-6 text-blue-900 font-[Aurora] text-4xl">
            {data.name}
          </h1>{" "}
          <div>
            <ul className="flex gap-2 mb-2">
              {data.tags?.map((tag, index) => (
                <li className="bg-blue-900 py-1 px-2 text-white" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>{" "}
          <div className="mb-10">
            <h2 className="mb-1">Ideal para:</h2>
            <ul className="flex gap-2">
              {data.mealType?.map((meal, index) => (
                <li className="bg-blue-900 py-1 px-2 text-white" key={index}>
                  {meal}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-top justify-center gap-10 max-w-6xl mx-auto">
            <Image
              src={data.image}
              width={400}
              height={300}
              alt={data.name}
              className="bg-blue-900 p-6 pb-20"
            />

            <div className="bg-blue-900 p-6 flex flex-col gap-3 w-full text-blue-950">
              <div className="border-2 border-blue-900 h-full mb-13 p-6 bg-white">
                <h2 className="font-[Aurora] text-xl m-4 text-center text-blue-900">Detalles</h2>
                <div className="flex items-end w-full mb-4">
                  <p>Dificultad: </p>
                  <span className="flex-grow border-b-[3px] border-dotted border-blue-900 mx-2 mb-1.5"></span>
                  <p>{data.difficulty}</p>
                </div>

                <div className="flex items-end w-full mb-4">
                  <p>Cocina: </p>
                  <span className="flex-grow border-b-[3px] border-dotted border-blue-900 mx-2 mb-1.5"></span>
                  <p>{data.cuisine}</p>
                </div>

                <div className="flex items-end w-full mb-4">
                  <p>Tiempo de preparación: </p>
                  <span className="flex-grow border-b-[3px] border-dotted border-blue-900 mx-2 mb-1.5"></span>
                  <p>{data.prepTimeMinutes} minutos</p>
                </div>

                <div className="flex items-end w-full mb-4">
                  <p>Tiempo de cocción: </p>
                  <span className="flex-grow border-b-[3px] border-dotted border-blue-900 mx-2 mb-1.5"></span>
                  <p>{data.cookTimeMinutes} minutos</p>
                </div>

                <div className="flex items-end w-full mb-4">
                  <p>Porciones: </p>
                  <span className="flex-grow border-b-[3px] border-dotted border-blue-900 mx-2 mb-1.5"></span>
                  <p>{data.servings}</p>
                </div>

                <div className="flex items-end w-full">
                  <p>Calorías por porción: </p>
                  <span className="flex-grow border-b-[3px] border-dotted border-blue-900 mx-2 mb-1.5"></span>
                  <p>{data.caloriesPerServing}</p>
                </div>
              </div>
            </div>

          </div>

          <div className="">
            <div className="">
              <h2>Ingredientes</h2>
              <div>
                <ul>
                  {data.ingredients?.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="instruYvalo">
              <div>
                <h2>Instrucciones</h2>
                <ol>
                  {data.instructions?.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h2>Valoraciones</h2>
                <p>Rating: {data.rating}</p>
                <p>Reseñas: {data.reviewCount}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default RecipeContainer;
