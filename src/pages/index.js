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
            <Header>Zajmuje się SEO oraz kodowaniem. Piszę w Python i Javascript.</Header>
            <Main>
                <section className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content is-medium has-text-black-bis">
                                <p>
                                   Cześć. Mam na imie Paweł. Od zawsze interesowałem się technologią co w pewnym
                                   momencie przełożyło się na moją prace w obrębie IT. Od ponad 6 lat zajmuje się
                                   SEO. Od kilku lat tworzę też strony internetowe z wykorzystaniem React, Gatsby, Django i Flask.
                                </p>
                                <p>
                                    Przede wszystkim usługi związane z tworzeniem stron internetowych, ale też
                                    dalsze ich pozycjonowanie, optymalizowanie oraz reklamowanie w systemie Google Ads.
                                </p>
                                <p>
                                    Po więcej informacji zapraszam do kontaktu mailowego lub za pomocą kanałów
                                    społecznościowych.
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