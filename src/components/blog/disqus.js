import React from 'react'
import PropTypes from 'prop-types'

import { Disqus } from 'gatsby-plugin-disqus'

import '../../style/sass/style.scss'

const DisqusComment = ({data}) => {
  const disqusConfig = {
    url: `${data.site.siteMetadata.siteUrl}`,
    identifier: data.wordpressPost.id,
    title: data.wordpressPost.title,
  }

  return(
    <div className="disqus-container">
      <Disqus config={disqusConfig} />
    </div>
  )
}

DisqusComment.propTypes = {
  data: PropTypes.object,
}

export default DisqusComment;