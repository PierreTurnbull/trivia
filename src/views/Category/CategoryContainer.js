import React, { Component } from 'react'
import Category from './Category';

export class CategoryContainer extends Component {
    state = {
        categoryData: {}
    }
    componentDidMount() {
        fetch(`http://jservice.io/api/category?id=${this.props.match.params.id}`)
            .then(response => {
                response.json().then(categoryData => {
                    this.setState({
                        categoryData
                    })
                })
            })
        fetch('http://jservice.io/api/categories?count=100')
            .then(response => {
                response.json().then(categories => {
                    this.setState({
                        categories
                    })
                })
            })
    }
    render() {
        return (
            <div>
                <Category
                    categories={this.state.categories}
                    categoryName={this.props.match.params.id}
                />
            </div>
        )
    }
}

export default CategoryContainer