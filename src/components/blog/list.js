import React from 'react'
import PropTypes from 'prop-types';

import '../../style/sass/style.scss'

const PostList = ({data}) => {
    return(
        <section>
            <div className="category-title">
                <h3>Tytuł kategorii</h3>
            </div>
            <article>
                <span className="date"><a href="#">2020-05-05</a></span>
                <span className="post-title"><a href="#">Tytuł wpisu jakiegoś fajnego.</a></span>
                <span className="category"><a href="#">Category</a></span>
            </article>
            <article>Artykuł do wyspisania.</article>
            <article>Artykuł do wyspisania.</article>
            <article>Artykuł do wyspisania.</article>
            <article>Artykuł do wyspisania.</article>
        </section>
    )
}

PostList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
}

export default PostList;