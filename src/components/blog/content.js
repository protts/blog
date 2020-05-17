import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

import { FaLongArrowAltLeft } from "react-icons/fa";

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
                    Właśnie przeczytałeś artykuł pod tytułem <span dangerouslySetInnerHTML={{ __html: data.wordpressPost.title }} />, 
                    który został napisany w <span dangerouslySetInnerHTML={{ __html: data.wordpressPost.date}} />.
                    Jest to jedent z artykułów, który znajdziesz w kategorii <span dangerouslySetInnerHTML={{ __html: data.wordpressPost.categories[0].name }} />.
                    Jeśli masz ochotę to przeczytaj więcej z tej kategorii.
                    Jeśli masz do mnie pytanie lub ofertę to pisz śmiało, odpisuję każdemu.
                </p>
                <Link to={`category/${data.wordpressPost.categories[0].slug}/`}><FaLongArrowAltLeft /> Więcej artykułów</Link>
            </div>
        </div>
    )
}

Content.propTypes = {
    data: PropTypes.object,
}

export default Content;