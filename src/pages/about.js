import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Main from '../components/main'
import Header from '../components/header'
import Footer from '../components/footer'
import SocialIcons from '../components/social-icons'

import '../style/sass/style.scss'

const About = ({data}) => {
    return(
        <>
            <SEO title={data.site.siteMetadata.title_about}
                 description={data.site.siteMetadata.desc_about}
                 urlPath={data.site.siteMetadata.urlPath_about} />
            <Header>I work as an SEO specialist. Also I write in Python and JavaScript.</Header>
            <Main>
                <section className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content is-medium has-text-black-bis">
                                <p>
                                    Hey. My name is Paul. I have always been interested in technology, 
                                    which at some point translated into my work in IT. 
                                    I have been involved in SEO for over 6 years.
                                    I have also been creating websites using React, Gatsby, Django and Flask for several years.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content is-medium has-text-black-bis">
                                <p><b>My last books</b></p>
                                <p>1. Sapiens – Harari</p>
                                <p>2. Homo deus – Harari</p>
                                <p>3. Snapchat story – Gallagher</p>
                                <p>4. The black swan – Taleb</p>
                                <p>5. The Four – Galloway</p>
                                <p>6. Start-Up Nation – Senor & Singer</p>
                                <p>7. Elon Musk - Vance</p>
                                <p>8. Permanent Record - Snowden</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content is-medium has-text-black-bis">
                                <p><b>My work experience</b></p>
                                <p>Go to my LinkedIn or write me email.</p>
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

export default About;

export const query = graphql` {
    site {
        siteMetadata {
            title_about
            desc_about
            urlPath_about
        }
    }
}`;