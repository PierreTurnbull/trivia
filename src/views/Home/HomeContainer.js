import React, { Component } from 'react';
import api from '../../helpers/api';
import Home from './Home';

class HomeContainer extends Component {

    state = {
        categories: []
    }

    async componentDidMount() {
      const categories = await api.getCategories()
        this.setState({
          categories
      })
    }

    render() {
        return (
            <Home categories={this.state.categories} oui={1} />
        );
    }
}

export default HomeContainer;