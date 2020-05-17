import React from 'react'
import PropTypes from 'prop-types'

import '../../style/sass/style.scss'

const PostList = ({data, title}) => {
    return(
            <section>
                <div className="category-title">
                    <h3>{title}</h3>
                </div>
                {data.allWordpressPost.edges.map(({node}) => (
                    <article key={node.id}>
                        <span className="date">{node.date}</span><span className="date-dash">-</span>
                        <span className="post"><a className="post-title" href={`/${node.date}/${node.slug}/`}>
                            <span dangerouslySetInnerHTML={{ __html: node.title }} />
                        </a></span>
                        {node.categories.map((cat) => (
                            <span key={cat.id} className="category"><a className="date-date" href={`/category/${cat.slug}/`}>{cat.name}</a></span>
                        ))}
                    </article>
                ))}
            </section>
    )
}

PostList.propTypes = {
    title: PropTypes.string,
    data: PropTypes.object,
}

export default PostList;