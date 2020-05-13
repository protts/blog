import React from 'react'
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Thumbnail = ({data}) => {
    return(
        <Img fluid={data.wordpressPost.featured_media.localFile.childImageSharp.fluid} alt={data.alt_text} />
    )
}

Thumbnail.propTypes = {
    data: PropTypes.node,
}

export default Thumbnail;