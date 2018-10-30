import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ categoryData }) => (
  <div>
    <h1>{categoryData.title}</h1>
    {
      categoryData.clues
        ? categoryData.clues.map((clue, key) => (
          <form key={key}>
            <p>{clue.question}</p>
            <input />
          </form>
        ))
        : <p>Please wait... Or try another category.</p>
    }
    {
      categoryData.clues && (
        <button type="button">Send results</button>
      )
    }
  </div>
)

Category.prototypes = {
  categoryName: PropTypes.string.isRequired
}

export default Category
