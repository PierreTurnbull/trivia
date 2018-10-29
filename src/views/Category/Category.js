import React from 'react';
import PropTypes from 'prop-types';

const Category = props => (
    <div>
        <h1>Category : {props.categoryName}</h1>
    </div>
)

Category.prototypes = {
    categoryName: PropTypes.string.isRequired
}

export default Category
