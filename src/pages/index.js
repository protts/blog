import React from 'react'
import { Link } from 'gatsby'
import { FaLinkedin, FaTwitter, FaGithub, FaTelegramPlane, FaBitcoin, FaEthereum } from "react-icons/fa";

import Layout from '../components/layout'

import '../style/sass/style.scss'

const IndexPage = () => {
    return(
        <>
            <Layout>
                <div className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content is-medium has-text-grey-dark">
                                <p>
                                   Cześć. Mam na imie Paweł. Od zawsze interesowałem się technologią co w pewnym
                                   momencie przełożyło się na moją prace w obrębie IT. Od ponad 6 lat zajmuje się
                                   SEO. Od kilku lat tworzę też strony internetowe z wykorzystaniem React, Gatsby, Django i Flask.
                                </p>
                            </div>
                        </div>
                        <div className="column is-half">
                            <div className="content is-medium">
                                <div class="tabs is-right">
                                    <ul className="social-tabs">
                                        <li><a href="https://twitter.com/prott_"><FaTwitter color="#00acee" /></a></li>
                                        <li><a href="https://www.linkedin.com/in/pawe%C5%82-kot-b7101478/"><FaLinkedin color="#0e76a8" /></a></li>
                                        <li><a href="https://github.com/protts"><FaGithub color="211f1f" /></a></li>
                                        <li><a href="mailto:kontakt@pawelkot.com.pl"><FaTelegramPlane color="#0088cc" /></a></li>
                                        <li><Link><FaBitcoin color="#f2a900"/></Link></li>
                                        <li><Link><FaEthereum color="#3c3c3d"/></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default IndexPage;