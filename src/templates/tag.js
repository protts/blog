import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Main from '../components/main'
import Footer from '../components/footer'
import Header from '../components/blog/header'
import PostList from '../components/blog/list'

const Tag = ({data}) => {
    return(
        <>
            <SEO title={`Tag: ${data.wordpressTag.name} | pawelkot.com.pl`}
                 description={data.wordpressTag.description}
                 urlPath={`/category/${data.wordpressTag.slug}/`} og_type="article" />
            <Header />
            <Main>
                <div className="container">
                    <div className="post-list">
                       <PostList data={data} title={data.wordpressTag.name} />
                    </div>
                </div>
            </Main>
            <Footer />
        </>
    )
}

export default Tag;

export const query = graphql`
    query($slug: String!) {
        wordpressTag(slug: {eq: $slug}) {
            id
            name
            slug
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