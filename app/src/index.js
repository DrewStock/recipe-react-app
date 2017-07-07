import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
            console.log(res.data);
            const recipes = res.data;
            this.setState({ recipes });
        });
    }

    render() {
        return (
            <div>
                {this.state.recipes.map(recipe =>
                    <div>
                        <h1 key={recipe._id}>{recipe.name}</h1>
                        <p>{recipe.description}</p>
                        <img src={recipe.imageUrl}/>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
