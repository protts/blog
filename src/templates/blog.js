import React from 'react'
import { graphql, Link } from 'gatsby'

import { BsArrowLeft } from "react-icons/bs";

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
                        <PostList data={data} title="Recent posts" />
                    </div>
                    <div className="list-description">
                        <p>
                            I work as an SEO specialist and write in Python and JavaScript. 
                            If you have any questions, offers or comments for me, write boldly. 
                            I reply to everyone. If you want to find an article, ctrl + f.
                        </p>
                        <Link to="/kontakt/"><BsArrowLeft /> Contact with me</Link>
                    </div>
                </div>
            </Main>
            <Footer />
        </>
    )
}

export default Blog;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title_blog
                desc_blog
                urlPath_blog
            }
        }
        allWordpressCategory {
            edges {
                node {
                    id
                    name
                }
            }
        }
        allWordpressPost(sort: {fields: date, order: DESC}) {
            edges {
                node {
                    id
                    slug
                    title
                    date(formatString: "Y/MM/DD")
                    categories {
                        id
                        name
                        slug
                    }
                }
            }
        }
    }
`