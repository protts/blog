import React from 'react'
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Thumbnail = ({data}) => {
    const img = data.wordpressPost.featured_media.localFile.childImageSharp.fluid
    const alt = data.alt_text
    return(
        <>
            {img ? <Img fluid={img} alt={alt} /> : ""}
        </>
    )
}

Thumbnail.propTypes = {
    data: PropTypes.object,
}

export default Thumbnail;