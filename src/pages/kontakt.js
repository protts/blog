import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Main from '../components/main'
import Header from '../components/header'
import Footer from '../components/footer'
import SocialIcons from '../components/social-icons'

const Contact = ({data}) => {
    return(
        <>
            <SEO title={data.site.siteMetadata.title_contact} 
                 description={data.site.siteMetadata.desc_contact} urlPath={data.site.siteMetadata.urlPath_contact} />
            <Header>You can contact me quickly via Email, Twitter or LinkedIn.</Header>
            <Main>
                <section className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content is-medium has-text-black-bis">
                                <p>
                                    I try to reply to all messages as soon as possible.
                                </p>
                                <p>
                                    If I do not reply after a few hours, it means that your question or inquiry takes me some time to answer.
                                </p>
                                <p><b>Email:</b> <a href="mailto:kontakt@pawelkot.com.pl">kontakt@pawelkot.com.pl</a></p>
                                <p><b>Twitter:</b> @prott_</p>
                                <p><b>LinkedId:</b> Paweł Kot</p>
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

export default Contact;

export const query = graphql` {
    site {
        siteMetadata {
            title_contact
            desc_contact
            urlPath_contact
        }
    }
}`;