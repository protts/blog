import React from 'react'
import PropTypes from 'prop-types';

import '../../style/sass/style.scss'

const Content = ({data}) => {
    return(
        <div className="content post-content">
            <header>
                <h1 className="title is-1" dangerouslySetInnerHTML={{ __html: data.wordpressPost.title }} />
                <p className="subtitle is-3 has-text-grey">dfkjhfjshdfjsdkaf</p>
                <div className="meta-post">
                    <span>{data.wordpressPost.author.name}</span>
                    <span className="separator"></span>
                    <span>{data.wordpressPost.date}</span>
                    <span className="separator"></span>
                    {data.wordpressPost.categories.map(data => (
                        <span><a href={data.slug}>{data.name}</a></span>
                    ))}
                </div>
            </header>
            <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
        </div>
    )
}

Content.propTypes = {
    data: PropTypes.node,
}

export default Content;