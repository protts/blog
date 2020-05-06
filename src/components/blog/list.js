import React from 'react'
import PropTypes from 'prop-types'

import '../../style/sass/style.scss'

const PostList = ({category, post}) => {
    return(
        <section>
            <div className="category-title">
                <h3>{category.name}</h3>
            </div>
                {post.edges.map(({node}) => (
                    <article>
                    <span className="date">2020-05-05</span><span className="date-dash">-</span>
                    <span className="post"><a className="post-title" href="#">{node.title}</a></span>
                    <span className="category"><a className="date-date" href="#">Category</a></span>
                    </article>
                ))}
        </section>
    )
}

PostList.propTypes = {
    category: PropTypes.string,
    post: PropTypes.arrayOf(PropTypes.object),
}

export default PostList;