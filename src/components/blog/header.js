import React from 'react'

import { BsArrowLeft } from "react-icons/bs";

import '../../style/sass/style.scss'

const Header = () => {
    return(
        <header>
            <nav className="navbar-blog">
                <div className="container">
                    <div className="navbar-body">
                        <div className="navbar-arrow-left">
                            <a href="/"><BsArrowLeft className="arrow-fix" /></a>
                        </div>
                        <div className="navbar-blog-brand">
                            <a className="blog-name" href="/blog/">Paweł Kot Blog</a>
                        </div>
                        <div className="navbar-arrow-right"></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;