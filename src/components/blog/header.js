import React from 'react'
import { Link } from 'gatsby'

import { BsArrowLeft } from "react-icons/bs";

import '../../style/sass/style.scss'

const Header = () => {
    return(
        <header className="header-blog">
            <nav className="navbar-blog">
                <div className="container">
                    <div className="navbar-body">
                        <div className="navbar-arrow-left">
                            <a href="/"><BsArrowLeft className="arrow-fix" /></a>
                        </div>
                        <div className="navbar-blog-brand">
                            <Link className="blog-name" to="/blog/">Paweł Kot Blog</Link>
                        </div>
                        <div className="navbar-arrow-right"></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;