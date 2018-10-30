import React, { Component } from 'react'
import Category from './Category';
import api from '../../helpers/api'

export class CategoryContainer extends Component {
  state = {
    categoryData: {}
  }
  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id)
    this.setState({
      categoryData: data
    })
  }
  render() {
    return (
      <div>
        <Category
          categoryData={this.state.categoryData}
        />
      </div>
    )
  }
}

export default CategoryContainer