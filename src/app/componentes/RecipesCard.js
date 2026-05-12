import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipesCard = ({ id, name, image }) => {
  return (
    <div>
      <Image src={image} alt={name} width={300} height={200} />
      <h2>{name}</h2>
      <Link href={`/recipes/${id}`}>Ver receta</Link>
    </div>
  );
};

export default RecipesCard;
