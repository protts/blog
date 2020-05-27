import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import { BsArrowLeft } from "react-icons/bs";

import SEO from '../components/seo'
import Main from '../components/main'
import Footer from '../components/footer'
import Header from '../components/blog/header'
import PostList from '../components/blog/list'

import '../style/sass/style.scss'

const Category = ({data}) => {
    return(
        <>
            <SEO title={`Kategoria: ${data.wordpressCategory.name} | pawelkot.com.pl`}
                 description={data.wordpressCategory.description}
                 urlPath={`/category/${data.wordpressCategory.slug}/`} og_type="article" />
            <Header />
            <Main>
                <div className="container">
                    <div className="post-list">
                       <PostList data={data} title={data.wordpressCategory.name} />
                    </div>
                    <div className="list-description">
                        <p>
                            All articles in the <span dangerouslySetInnerHTML={{ __html: data.wordpressCategory.name }} /> category.
                            You can go to all articles on the main page or to a specific category.
                            If you have a question or an offer for me, write boldly. I reply to everyone.
                        </p>
                        <Link to="/blog/"><BsArrowLeft /> More articles</Link>
                    </div>
                </div>
            </Main>
            <Footer />
        </>
    )
}

export default Category;

export const query = graphql`
    query($slug: String!) {
        wordpressCategory(slug: {eq: $slug}) {
            id
            slug
            name
            description
        }
        allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: $slug}}}, status: {eq: "publish"}}) {
            edges {
                node {
                    id
                    slug
                    title
                    date(formatString: "Y/M/D")
                    categories {
                        id
                        slug
                        name
                    }
                }
            }
        }
    }
`