import React from 'react';

const RecipeDetail = ({recipe, selectedRecipe}) => {

    if (!recipe) {
        return <div>Loading...</div>
    }

    return (
        <div className="col-8 card">
        <div>
            <h2>{recipe.name}</h2>
        </div>
        <div className="detail-image">
            <img src={recipe.imageUrl} />
            <p>Bacon ipsum dolor amet biltong frankfurter shank swine pancetta prosciutto short ribs sausage pig chicken. Ball tip rump tongue spare ribs burgdoggen, cupim buffalo chuck corned beef flank. Sirloin fatback buffalo tenderloin, pancetta shankle landjaeger ground round sausage hamburger pork loin bacon tongue. Bresaola ham hock kielbasa sausage strip steak shank cupim andouille leberkas turducken. Ball tip turkey ribeye chuck pork loin tenderloin spare ribs.
            </p>
            <p>Pork jowl ham pork belly ball tip, burgdoggen corned beef spare ribs venison ham hock pork chop turducken beef tri-tip. Rump prosciutto venison tongue ham hock cow buffalo cupim meatloaf ribeye t-bone drumstick pastrami shankle alcatra. Strip steak swine fatback tri-tip, shankle doner ball tip pig. Chicken swine shankle shank. Bacon alcatra ribeye flank tail swine.</p>
        </div>
        
    </div>
    );
}

export default RecipeDetail;