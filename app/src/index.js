import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import RecipeList from './components/recipe_list';

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
              recipes: []
            };
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/recipes/`)
        .then(res => {
            const recipes = res.data;
            this.setState({ recipes });
        });
    }

    render() {
        return (
            <div>
            <RecipeList recipes={this.state.recipes} />
            </div>
            // <div>
            //     {this.state.recipes.map(recipe =>
            //         <ul>
            //             <li key={recipe.recipeId}>{recipe.name}</li>
            //             <p>{recipe.description}</p>
            //             <img src={recipe.imageUrl}/>
            //         </ul>
            //     )}
            // </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
