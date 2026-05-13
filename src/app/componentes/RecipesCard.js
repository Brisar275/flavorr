import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipesCard = ({ id, name, image }) => {
  return (
    <div className="bg-blue-900 p-4 text-white font-[Inter] flex flex-col items-center h-full">
      <Image src={image} alt={name} width={200} height={100} className="pb-4" />
      <h2 className="pb-4 line-clamp-2">{name}</h2>
      <Link href={`/recipes/${id}`} className="bg-white text-blue-900 py-1.5 px-16 hover:bg-blue-950 hover:text-white mt-auto">Ver receta</Link>
    </div>
  );
};

export default RecipesCard;
