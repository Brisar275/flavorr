"use client"; // es para que el usuario lo pueda ver

import { useState, useEffect } from "react"; // useState es para manejar el estado del componente, useEffect es para manejar los efectos secundarios (como la carga de datos)
import RecipesCard from "./RecipesCard";
import parsedData from "../data/recipes";
import axios from "axios";
import Loading from "./Loading";

import React from "react";

const Grid = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://dummyjson.com/recipes?limit=0",
        );
        const responseData = response.data.recipes; // le estoy diciendo que quiero ir a la api y de la api quiero a la data e ir a recetas
        setData(responseData);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div id="recetas" className="bg-white px-15 py-20 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4 items-stretch">
      {!loading &&
        data.map((recipe) => (
          <RecipesCard
            key={recipe.id}
            name={recipe.name}
            image={recipe.image}
            id={recipe.id}
          />
        ))}
      {loading && <Loading />}
      {error && "Error"}
    </div>
  );
};

export default Grid;
