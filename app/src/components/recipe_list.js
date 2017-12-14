import React from 'react';
import RecipeListItem from './recipe_list_item';

const RecipeList = (props) => {

    const recipeItems = props.recipes.map((recipe) => {
        return (
            <RecipeListItem 
                onRecipeSelect={props.onRecipeSelect}
                key={recipe._id}
                recipe={recipe} />
        )
    })

    return (
        <ul className="col-4">
            {recipeItems}
        </ul>
    );
}

export default RecipeList;