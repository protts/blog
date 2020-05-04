import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Main from '../components/main'
import Footer from '../components/footer'
import Header from '../components/blog/header'
import PostList from '../components/blog/list'

const Blog = ({data}) => {
    return(
        <>
            <SEO title={data.site.siteMetadata.title_blog}
                 description={data.site.siteMetadata.desc_blog}
                 urlPath={data.site.siteMetadata.urlPath_blog} />
            <Header />
            <Main>
                <div className="container">
                    <div className="post-list">
                        <PostList />
                        <PostList />
                    </div>
                </div>
            </Main>
            <Footer />
        </>
    )
}

export default Blog;

export const guery = graphql` {
    site {
        siteMetadata {
            title_blog
            desc_blog
            urlPath_blog
        }
    }
    allWordpressPost {
        edges {
            node {
                id
                title
            }
        }
    }
}`;