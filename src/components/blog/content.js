import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

import { BsArrowLeft } from "react-icons/bs";

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
            <div className="post-footer">
                <p>
                    You just read the article titled: <span dangerouslySetInnerHTML={{ __html: data.wordpressPost.title }} />, 
                    which was written in <span dangerouslySetInnerHTML={{ __html: data.wordpressPost.date}} />.
                    This is one of the articles that you will find in the category <span dangerouslySetInnerHTML={{ __html: data.wordpressPost.categories[0].name }} />.
                    You can go to all articles in this category or to the main page.
                    If you have a question or an offer for me, write boldly and reply to everyone.
                </p>
                <Link to={`category/${data.wordpressPost.categories[0].slug}/`}><BsArrowLeft /> More articles</Link>
            </div>
        </div>
    )
}

Content.propTypes = {
    data: PropTypes.object,
}

export default Content;