import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

import { BsArrowLeft } from "react-icons/bs";

import '../../style/sass/style.scss'

const HeaderMin = ({data, css}) => {
    return(
        <header className="header-blog">
            <nav className="navbar-blog">
                <div className="container">
                    <div className="navbar-body">
                        <div className="navbar-arrow-left">
                            <a href="/"><BsArrowLeft className="arrow-fix" /></a>
                        </div>
                        <div className="navbar-blog-brand">
                            <Link className="blog-name" to="/blog/">
                                {css ? "PKB" : "PKB1"}
                            </Link>
                            <span className="sep">/</span>
                            <span className="bread" dangerouslySetInnerHTML={{ __html: data.wordpressPost.title }} />
                        </div>
                        <div className="navbar-arrow-right"></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

HeaderMin.propTypes = {
    data: PropTypes.object
}

export default HeaderMin;