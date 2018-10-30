import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Home = ({ categories }) => (
  <section>
    <h1>HomePage</h1>
    {
      categories.length > 0
        ? (
          <section>
            <ul>
              {
                categories.map((category, key) => (
                  <li key={key}>
                    <Link to={'/categories/'+category.id}>{category.title}</Link>
                  </li>
                ))
              }
            </ul>
          </section>
        )
        : (
          <section>No category found, sorry...</section>
        )
    }
  </section>
)

Home.prototype = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      clues_count: PropTypes.number
    })
  )
}

export default Home
