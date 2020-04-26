import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({children}) => {
    return(
        <>
            <Header slogan="Zajmuje się SEO oraz kodowaniem. Piszę w Python i Javascript." />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;