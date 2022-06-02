import React, { useState } from 'react'
import { AddCategory } from './componentes/AddCategory'
import { GifGrid } from './componentes/GifGrid'

export const GifExpertApp = () => {

   
    const [categories, setCategories] = useState( ['Dragon Ball Z']);

   /* const hanndleAdd = () =>{
      setCategories( cats => [...cats, 'Futurama']);

    }*/

    
    return (
    <>
        <h2> Gif Expert App</h2>
        <AddCategory setCategories={setCategories}/>
        <hr></hr>

        <ol>
          {
            categories.map( category => {

              return  <GifGrid key = {category}
              category={ category}
              />
              })
          }
        </ol>
    </>
  )
}


