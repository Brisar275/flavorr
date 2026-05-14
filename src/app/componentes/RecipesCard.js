import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipesCard = ({ id, name, image }) => {
  return (
    <div className="bg-blue-900 p-4 text-white font-[Inter] flex flex-col items-center h-full max-w-60">
      <Image src={image} alt={name} width={200} height={100} className="pb-4" />
      <h2 className="pb-4 line-clamp-2">{name}</h2>
      <Link href={`/recipes/${id}`} className="bg-white text-blue-900 w-full py-2 hover:bg-blue-950 hover:text-white mt-auto text-center">Ver receta</Link>
    </div>
  );
};

export default RecipesCard;
