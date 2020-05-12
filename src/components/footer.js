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
                        <li><Link to="/about/">O mnie</Link></li>
                        <li><Link to="/service/">Usługi</Link></li>
                        <li><Link to="/blog/">Blog</Link></li>
                        <li><Link to="/kontakt/">Kontakt</Link></li>
                        <li><Link to="/portfolio/">Portfolio</Link></li>
                    </ul>
                </div>
                <p className="copy has-text-grey">
                    © {date} <Link to="/" className="footer-name has-text-grey">Paweł Kot</Link>
                    - Wszelkie prawa zastrzeżone
                </p>
            </div>
        </footer>
    )
}

export default Footer;