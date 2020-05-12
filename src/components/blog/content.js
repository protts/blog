import React from 'react'
import PropTypes from 'prop-types';

import '../../style/sass/style.scss'

const Content = ({data}) => {
    return(
        <div className="content post-content">
            <header>
                <h1 className="title is-1" dangerouslySetInnerHTML={{ __html: data.wordpressPost.title }} />
                <p className="subtitle is-3 has-text-grey">Subtytuł</p>
                <div className="meta-post">
                    <span>Paweł Kot</span>
                    <span className="separator"></span>
                    <span>2020, mar 10</span>
                    <span className="separator"></span>
                    <span><a href="#">Paweł</a></span>
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