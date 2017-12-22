import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import RecipeList from './components/recipe_list';
import RecipeDetail from './components/recipe_detail';

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
              recipes: [],
              selectedRecipe: null
            };
    }

    componentDidMount() {
        axios.get(`https://drewstockpdx-recipe-api.herokuapp.com/api/recipes`)
        .then(res => {
            const recipes = res.data;
            this.setState({ 
                recipes: recipes,
                selectedRecipe: recipes[0]
             });
        });
    }

    render() {
        return (
            <div className="row">
            <RecipeDetail recipe={this.state.selectedRecipe} />   
            <RecipeList
                onRecipeSelect={selectedRecipe => this.setState({selectedRecipe})} 
                recipes={this.state.recipes} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
