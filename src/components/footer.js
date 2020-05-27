import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    const date = new Date().getFullYear()

    return(
        <footer className="footer">
            <div className="content has-text-centered">
                <div className="tabs is-centered">
                    <ul className="footer-tabs">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about/">About me</Link></li>
                        <li><Link to="/service/">Services</Link></li>
                        <li><Link to="/blog/">Blog</Link></li>
                        <li><Link to="/kontakt/">Contact</Link></li>
                        <li><Link to="/category/portfolio/">Portfolio</Link></li>
                    </ul>
                </div>
                <p className="copy has-text-grey">
                    © {date} <Link to="/" className="footer-name has-text-grey">Paweł Kot</Link>
                    - All rights reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer;