import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Main from '../components/main'
import Header from '../components/header'
import Footer from '../components/footer'
import SocialIcons from '../components/social-icons'

import '../style/sass/style.scss'

const IndexPage = ({data}) => {
    return(
        <>
            <SEO title={data.site.siteMetadata.title}
                 description={data.site.siteMetadata.description}
                 urlPath={data.site.siteMetadata.urlPath} />
            <Header>I work as an SEO specialist. Also I write in Python and JavaScript.</Header>
            <Main>
                <section className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content is-medium has-text-black-bis">
                                <p>
                                    Hey. My name is Paul. I have always been interested in technology, which at some point translated into my work in IT. I have been involved in SEO for over 6 years. I have also been creating websites using React, Gatsby, Django and Flask for several years.
                                </p>
                                <p>
                                    First of all, services related to creating websites, but also their further positioning, optimization (SEO) and advertising in the Google Ads system.
                                </p>
                                <p>
                                    For more information, please contact me via email or through social channels.
                                </p>
                            </div>
                        </div>
                        <div className="column is-half">
                            <div className="content is-medium">
                                <SocialIcons />
                            </div>
                        </div>
                    </div>
                </section>
            </Main>
            <Footer />
        </>
    )
}

export default IndexPage;

export const query = graphql` {
    site {
        siteMetadata {
            title
            description
            urlPath
        }
    }

}`;