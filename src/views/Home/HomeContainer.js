import React, { Component } from 'react';
import Home from './Home';

class HomeContainer extends Component {

    state = {
        categories: []
    }

    componentDidMount() {
        fetch('http://jservice.io/api/categories?count=100')
            .then(response => {
                response.json().then(categories => {
                    console.log(categories);
                    this.setState({
                        categories
                    })
                })
            })
    }

    render() {
        return (
            <Home
                categories={this.state.categories}
            />
        );
    }
}

export default HomeContainer;