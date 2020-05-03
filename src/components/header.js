import React from 'react'
import PropTypes from 'prop-types'

import '../style/sass/style.scss'

const Header = ({children}) => {
    return(
        <header>
            <section className="hero is-medium">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-size-0 has-text-black-bis">
                            {children}
                        </h1>
                    </div>
                </div>
            </section>
        </header>
    )
}

Header.defaultProps = {
    children: 'Add your header'
}

Header.propTypes = {
    children: PropTypes.string,
}

export default Header;