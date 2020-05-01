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
            <Header>Możemy współpracować w obszarach SEO/SEM i Web Developmentu.</Header>
            <Main>
                <section className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content is-medium has-text-black-bis">
                                <h3 className="services-title has-text-black-bis">Usługi Web Developmentu</h3>
                                <p>
                                    Moją główną domeną jest backend, ale nie ma problemu, aby stworzyć cały front strony (design).
                                    W przeszłości pisałem również w php np. motywy dla Wordpress.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content is-medium has-text-black-bis">
                                <h3 className="services-title has-text-black-bis">Usługi SEO</h3>
                                <p>
                                    Pracuje przy optymalizacji stron, pozycjonowaniu SEO, content marketingu i prowadzeniu projektów.
                                    Pracuje głównie z serwisami ecommerce oraz klasycznymi stronami firmowymi.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content is-medium has-text-black-bis">
                                <h3 className="services-title has-text-black-bis">Usługi SEM</h3>
                                <p>
                                    Zajmuje się planowaniem, ustawianiem oraz optymalizacją kampani Google Ads.
                                    Tworzyłem kampanie Search, Display, YouTube, Remarketingowe.
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