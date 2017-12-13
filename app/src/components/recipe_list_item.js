import React from 'react';

const RecipeListItem = ({recipe}) => {
    console.log(recipe);

    return (
        <li className="list-group-item">
            <div className="media">
                <div className="media-left">
                    <h2>{recipe.name}</h2> 
                    <img className="media-object" src={recipe.imageUrl} />
                    <p>{recipe.description}</p>
                </div>
            </div>
           
        </li>
    );
}

export default RecipeListItem;