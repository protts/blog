import React from 'react'

import { FaLinkedin, FaTwitter, FaGithub, FaTelegramPlane, FaBitcoin, FaEthereum } from "react-icons/fa";

const SocialIcons = () => {
    return(
        <div class="tabs is-right">
            <ul className="social-tabs">
                <li><a href="https://twitter.com/prott_" target="_blank" rel="noopener noreferrer"><FaTwitter color="#00acee" /></a></li>
                <li><a href="https://www.linkedin.com/in/pawe%C5%82-kot-b7101478/" target="_blank" rel="noopener noreferrer"><FaLinkedin color="#0e76a8" /></a></li>
                <li><a href="https://github.com/protts" target="_blank" rel="noopener noreferrer"><FaGithub color="211f1f" /></a></li>
                <li><a href="mailto:kontakt@pawelkot.com.pl"><FaTelegramPlane color="#0088cc" /></a></li>
                <li><a href="https://www.blockchain.com/btc/address/bc1q8z3yt6deuyzsejyf4nv9w0p2g654spe0ksgh97" target="_blank" rel="noopener noreferrer"><FaBitcoin color="#f2a900"/></a></li>
                <li><a href="https://www.blockchain.com/eth/address/0xF364a7552E4b78acd6FaaA6F65E3e88F7b14f6E3" target="_blank" rel="noopener noreferrer"><FaEthereum color="#3c3c3d"/></a></li>
            </ul>
        </div>
    )
}

export default SocialIcons;