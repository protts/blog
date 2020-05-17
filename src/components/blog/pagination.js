import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import '../../style/sass/style.scss'

const Pagination = ({data}) => {
    return(
        <div className="post-pagination">
            <div>
                {data.prev && <Link className="item" to={`/${data.prev.date}/${data.prev.slug}/`} rel="prev"><BsArrowLeft /><span dangerouslySetInnerHTML={{ __html: data.prev.title }} /></Link>}
            </div>
            <div>
                {data.next && <Link className="item" to={`/${data.next.date}/${data.next.slug}/`} rel="next"><span dangerouslySetInnerHTML={{ __html: data.next.title }} /><BsArrowRight /></Link>}
            </div>
        </div>
    )
}

Pagination.propTypes = {
    data: PropTypes.object,
}

export default Pagination;