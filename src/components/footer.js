import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    const date = new Date().getFullYear()

    return(
        <footer class="footer">
            <div class="content has-text-centered">
                <div class="tabs is-centered">
                    <ul className="footer-tabs">
                        <li><Link>O mnie</Link></li>
                        <li><Link>Usługi</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Kontakt</Link></li>
                        <li><Link>Staffmedia</Link></li>
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