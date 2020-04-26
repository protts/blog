import React from 'react'
import PropTypes from 'prop-types'

import '../style/sass/style.scss'

const Header = ({slogan}) => {
    return(
        <header>
            <section class="hero is-medium">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title is-size-0 has-text-black-bis">
                            {slogan}
                        </h1>
                    </div>
                </div>
            </section>
        </header>
    )
}

Header.defaultProps = {
    slogan: 'Add your header'
}

Header.propTypes = {
    slogan: PropTypes.string,
}

export default Header;