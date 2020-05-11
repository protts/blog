import React from 'react'
import PropTypes from 'prop-types';

import '../../style/sass/style.scss'

const Content = ({data}) => {
    return(
        <div className="post-content">
            <header>TYTUŁ</header>
            <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
        </div>
    )
}

Content.propTypes = {
    data: PropTypes.node,
}

export default Content;