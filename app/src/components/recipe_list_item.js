import React from 'react';

const RecipeListItem = ({recipe, onRecipeSelect}) => {
    console.log(recipe);

    return (
        <li onClick={() => {
            onRecipeSelect(recipe);
            console.log('selected recipe is ' + recipe.name);
            }
        }    
            className="card">
                <div className="media">
                    <div className="recipe-item">
                        <h4>{recipe.name}</h4> 
                        <img src={recipe.imageUrl} />
                        <p>{recipe.description}</p>
                    </div>
                </div>
            
            </li>
    );
}

export default RecipeListItem;