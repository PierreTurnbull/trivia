import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ categoryName, categories }) => (
    <div>
        <section>
            <h1>Category : {categoryName}</h1>
        </section>
        <section>
            <h2>Categories:</h2>
            <ul>
                {
                    categories.length > 0 && (
                        <section>
                            {
                                categories.map(category => (
                                    <Link key={category.id} to={'/categories/'+category.id}>{category.title}</Link>
                                ))
                            }
                        </section>
                    )
                }
            </ul>
        </section>
    </div>
)

Category.prototypes = {
    categoryName: PropTypes.string.isRequired
}

export default Category
