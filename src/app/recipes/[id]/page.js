 import React from 'react'
import RecipeContainer from './componentes/RecipeContainer'

const page = async ({ params }) => {

  const { id } = await params;

  return (
    <RecipeContainer id={id} />
  )
}

export default page