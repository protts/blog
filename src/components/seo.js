import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({title, description, urlPath}) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        siteUrl
                        author
                    }
                }
            }
        `
    );

    return(
        <Helmet>
            <title>{title}</title>
        </Helmet>
    )
}

SEO.defaultTypes = {
    title: ``,
}

SEO.propTypes = {
    title: PropTypes.string,
}

export default SEO;