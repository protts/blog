import React from 'react'
import PropTypes from 'prop-types';

import Thumbnail from './thumbnail';

import '../../style/sass/style.scss'

const Content = ({data}) => {
    return(
        <div className="content post-content">
            <header>
                <h1 className="title is-1" dangerouslySetInnerHTML={{ __html: data.wordpressPost.title }} />
                <span className="subtitle" dangerouslySetInnerHTML={{ __html: data.wordpressPost.excerpt }} />
                <div className="meta-post">
                    <span>{data.wordpressPost.author.name}</span>
                    <span className="separator"></span>
                    <span>{data.wordpressPost.date}</span>
                    <span className="separator"></span>
                    {data.wordpressPost.categories.map(data => (
                        <span key={data.id}><a href={`/category/${data.slug}/`}>{data.name}</a></span>
                    ))}
                </div>
            </header>
            <div className="thumbnail">
                <Thumbnail data={data} />
            </div>
            <div className="cnt" dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
        </div>
    )
}

Content.propTypes = {
    data: PropTypes.object,
}

export default Content;