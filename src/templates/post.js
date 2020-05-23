import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Main from '../components/main'
import Footer from '../components/footer'
import HeaderMin from '../components/blog/header-min.js'
import Content from '../components/blog/content'
import Pagination from '../components/blog/pagination'


const Post = ({data, pageContext}) => {
    const [scroll, scrollState] = useState(false)
    const [header, headerState] = useState(false)

    const scrollHandle = () => {
        const position = window.pageYOffset
        const top = document.body.scrollTop
        
        if(position === top) {
            headerState(false)
            scrollState(position)
        }
        else {
            headerState(true)
            scrollState(position)
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandle, {passive: true})

        return () => {
            window.removeEventListener('scroll', scrollHandle, {passive: true})
        }
    }, [])

    return(
        <>
            <SEO title={`${data.wordpressPost.title.replace("&#8211;", '-')} | pawelkot.com.pl`}
                 description={data.wordpressPost.excerpt}
                 urlPath={`${data.wordpressPost.date}/${data.wordpressPost.slug}/`} og_type="article" />
            <HeaderMin data={data} header={header} />
            <Main>
                <div className="container">
                    <Content data={data} />
                    <Pagination data={pageContext} />
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

