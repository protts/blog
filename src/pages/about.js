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
            <Header>Zajmuje sie SEO i pisze kod w Python oraz JS.</Header>
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
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content is-medium has-text-black-bis">
                                <p><b>Ostatnie książki</b></p>
                                <p>1. Sapiens. Od zwierząt do bogów – Harari</p>
                                <p>2. Homo deus. Krótka histora jutra – Harari</p>
                                <p>3. Snapchat story – Gallagher</p>
                                <p>4. Czarny łabędź – Taleb</p>
                                <p>5. Wielka czwórka – Galloway</p>
                                <p>6. Naród Start-upów – Senor & Singer</p>
                                <p>7. Elon Musk - Vance</p>
                                <p>8. Pamięc nieulotna - Snowden</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content is-medium has-text-black-bis">
                                <p><b>Moje doświadczenie zawodowe</b></p>
                                <p>Po więcej zaraszam na LinkedIn lub kontakt mailowy.</p>
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