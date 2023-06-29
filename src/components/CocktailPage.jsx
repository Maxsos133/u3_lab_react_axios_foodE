import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function CocktailPage () {
    const { name } = useParams()
    
    const [cocktail, setCocktail] = useState('')

    useEffect(() => {
        const getCocktail = async () => {
            const response = await axios.get (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
            setCocktail(response.data.drinks[Math.floor(Math.random()* response.data.drinks.length)])
            
        }
        getCocktail()
    }, [name])
    
    return (
        <div className="detail">
          <img className="cocktail-img" src={cocktail.strDrinkThumb} />
          <h2>{cocktail.strDrink}</h2>
          <div>{cocktail.strAlcoholic}</div>
          <h3>Ingredients:</h3>
          <div className="ingredient-list">
            {[...Array(15).keys()].map((i) => {
              if (cocktail[`strIngredient${i}`] !== null) {
                return (
                  <div>
                    {cocktail[`strIngredient${i}`]} {cocktail[`strMeasure${i}`]}
                  </div>
                );
              }
              return null
            })}
          </div>
          <h3>Instructions:</h3>
          <div className='instructions' >{cocktail.strInstructions}</div>
        </div>
      )
}