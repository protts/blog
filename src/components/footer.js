import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    const date = new Date().getFullYear()

    return(
        <footer class="footer">
            <div class="content has-text-centered">
                <div class="tabs is-centered">
                    <ul className="footer-tabs">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/o-mnie/">O mnie</Link></li>
                        <li><Link to="/uslugi/">Usługi</Link></li>
                        <li><Link to="/blog/">Blog</Link></li>
                        <li><Link to="/kontakt/">Kontakt</Link></li>
                        <li><Link to="/portfolio/">Portfolio</Link></li>
                    </ul>
                </div>
                <p className="has-text-grey">
                    © {date} <Link to="/" className="footer-name has-text-grey">Paweł Kot</Link>
                    - Wszelkie prawa zastrzeżone
                </p>
            </div>
        </footer>
    )
}

export default Footer;