import React from 'react';
import PropTypes from 'prop-types';

const Category = props => (
    <div>
      {props.category
        ? <h1>Category : {props.category.title}</h1>
        : <p>loading ...</p>
      }
    </div>
)

Category.prototypes = {
    categoryName: PropTypes.string.isRequired
}

export default Category
