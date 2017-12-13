import React from 'react';
import RecipeListItem from './recipe_list_item';

const RecipeList = (props) => {

    const recipeItems = props.recipes.map((recipe) => {
        return <RecipeListItem key={recipe._id} recipe={recipe} />
    })

    return (
        <ul className="col-md-6 list-group">
            {recipeItems}
        </ul>
    );
}

export default RecipeList;