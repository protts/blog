import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Main from '../components/main'
import Header from '../components/header'
import Footer from '../components/footer'
import SocialIcons from '../components/social-icons'

import '../style/sass/style.scss'

const Services = ({data}) => {
    return(
        <>
            <SEO title={data.site.siteMetadata.title_services}
                 description={data.site.siteMetadata.desc_services}
                 urlPath={data.site.siteMetadata.urlPath_services} />
            <Header>We can cooperate in the areas of SEO / SEM and Web Development.</Header>
            <Main>
                <section className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content is-medium has-text-black-bis">
                                <h3 className="services-title has-text-black-bis">Usługi Web Developmentu</h3>
                                <p>
                                    My main domain is backend, but there is no problem to create the whole front of the page (design). In the past I wrote in php, for example, themes for Wordpress.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content is-medium has-text-black-bis">
                                <h3 className="services-title has-text-black-bis">SEO services</h3>
                                <p>
                                    I work on website optimization, SEO, content marketing and project management.
                                    I work mainly with e-commerce websites and classic company websites.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content is-medium has-text-black-bis">
                                <h3 className="services-title has-text-black-bis">SEM services</h3>
                                <p>
                                    I deal with planning, setting and optimization of Google Ads campaigns.
                                    I created Search, Display, YouTube and Remarketing campaigns.
                                </p>
                                <p><b>Email:</b> <a href="mailto:kontakt@pawelkot.com.pl">kontakt@pawelkot.com.pl</a></p>
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

export default Services;

export const query = graphql` {
    site {
        siteMetadata {
            title_services
            desc_services
            urlPath_services
        }
    }
}`;