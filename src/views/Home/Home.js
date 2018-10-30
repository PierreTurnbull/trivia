import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Home = ({ categories }) => (
    <section>
        <h1>HomePage</h1>
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
