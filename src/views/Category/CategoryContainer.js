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
                    console.log(categoryData);
                    this.setState({
                        categoryData
                    })
                })
            })
    }
    render() {
        return (
            <div>
                <Category
                    categoryName={this.props.match.params.id}
                />
            </div>
        )
    }
}

export default CategoryContainer