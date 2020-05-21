import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import gatsbyIcon from '../images/gatsby-icon.png'

const SEO = ({title, description, urlPath, og_type}) => {
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
            <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
            <link rel="canonical" href={`${site.siteMetadata.siteUrl}${urlPath}`} />
            <meta name="description" content={description} />
            <meta name="keywords" content="Paweł Kot" />
            <meta name="author" content={site.siteMetadata.author} />
            <meta property="og:url" content={`${site.siteMetadata.siteUrl}${urlPath}`} />
            <meta property="og:type" content={og_type} />
            <meta property="og:locale" content="pl_PL" />
            <meta property="og:site_name" content={title} />
            <meta property="og:image" content={`${site.siteMetadata.siteUrl}${gatsbyIcon}`} />
            <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="512" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:site" content={`${site.siteMetadata.siteUrl}`} />
            <meta name="twitter:image" content={`${site.siteMetadata.siteUrl}${gatsbyIcon}`} />
            <meta name="twitter:creator" content={site.siteMetadata.author} />
        </Helmet>
    )
}

SEO.defaultProps = {
    title: ``,
    description: ``,
    urlPath: ``,
    og_type: `webiste`
}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    urlPath: PropTypes.string,
    og_type: PropTypes.string,
}

export default SEO;