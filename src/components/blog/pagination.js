import React from 'react'

import { FaLongArrowAltLeft, FaLongArrowAltRight} from "react-icons/fa";

import '../../style/sass/style.scss'

const Pagination = ({prv, nxt}) => {
    return(
        <div className="post-pagination">
            <a className="item" href="#"><FaLongArrowAltLeft />{prv}</a>
            <a className="item" href="#">{nxt}<FaLongArrowAltRight /></a>
        </div>
    )
}

export default Pagination;