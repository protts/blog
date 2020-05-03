import React from 'react'
import PropTypes from 'prop-types';

import '../../style/sass/style.scss'

const PostList = ({data}) => {
    return(
        <section className="post-list">
            <div className="category-title">
                <h3>Tytuł kategorii</h3>
            </div>
            <article>Artykuł do wyspisania.</article>
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