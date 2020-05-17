import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Main from '../components/main'
import Footer from '../components/footer'
import Header from '../components/blog/header'
import Content from '../components/blog/content'
import Pagination from '../components/blog/pagination'

const Post = ({data, pageContext}) => {
    console.log(pageContext)
    return(
        <>
            <SEO title={`${data.wordpressPost.title} | pawelkot.com.pl`}
                 description={data.wordpressPost.excerpt}
                 urlPath={`${data.wordpressPost.date}/${data.wordpressPost.slug}/`} og_type="article" />
            <Header />
            <Main>
                <div className="container">
                    <Content data={data} />
                    <Pagination prv="TEXT" nxt="TXT" />
                </div>
            </Main>
            <Footer />
        </>
    )
}

export default Post;

export const query = graphql`
    query($slug: String!) {
        wordpressPost(slug: {eq: $slug}) {
            id
            slug
            title
            excerpt
            content
            date(formatString: "Y/M/D")
            categories {
                id
                slug
                name
            }
            author {
                name
            }
            featured_media {
                alt_text
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 1280) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

