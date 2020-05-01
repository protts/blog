import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import Main from '../components/main'
import Header from '../components/header'
import Footer from '../components/footer'
import SocialIcons from '../components/social-icons'

import '../style/sass/style.scss'

const NotFoundPage = ({data}) => {
    return(
        <>
            <SEO title={data.site.siteMetadata.title_404}
                 description={data.site.siteMetadata.desc_404}
                 urlPath={data.site.siteMetadata.urlPath_404} />
            <Header>Strona, której szukasz nie istnieje. Wróć na <Link to="/">stronę główną.</Link></Header>
            <Main>
                <section className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content is-medium has-text-black-bis">
                                <p>
                                    Trafiłeś tutaj ponieważ to czego szukasz nie istnieje na tej stronie.
                                    Możesz spróbwać poczytać coś innego albo wrócić na <Link to='/'>stronę główną</Link>.
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

export default NotFoundPage;

export const query = graphql` {
    site {
        siteMetadata {
            title_404
            desc_404
            urlPath_404
        }
    }
}`;
