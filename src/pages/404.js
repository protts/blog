import React from 'react'
import { Link } from 'gatsby'

import Main from '../components/main'
import Header from '../components/header'
import Footer from '../components/footer'
import SocialIcons from '../components/small/social-icons'

import '../style/sass/style.scss'

const NotFoundPage = () => {
    return(
        <>
            <Header>Strona, której szukasz nie istnieje. Wróć na <Link to="/">stroną główną</Link></Header>
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
