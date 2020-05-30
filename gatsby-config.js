const page = `| pawelkot.com.pl`

module.exports = {
  siteMetadata: {
    title: `SEO & Python & JavaScript Developer ${page}`,
    description: `I have been involved in SEO and SEM for over 6 years. I also write code in Python and JavaScript -> React / Gatsby.`,
    author: `@prott_`,
    siteUrl: `https://pawelkot.com.pl`,
    urlPath: ``,

    title_404: `404 ${page}`,
    desc_404: `Page not found...`,
    urlPath_404: `/404/`,

    title_contact: `Contact ${page}`,
    desc_contact: `The quickest way to contact me is via email or twitter.`,
    urlPath_contact: `/kontakt/`,

    title_about: `About me ${page}`,
    desc_about: `I write code in python and JavaScript. He deals with SEO and SEO audits.`,
    urlPath_about: `/about/`,

    title_services: `SEO / Web Development Services ${page}`,
    desc_services: `Services: programming - SEO positioning - website optimization - Google ads.`,
    urlPath_services: '/uslugi/',

    title_blog: `Blog ${page}`,
    desc_blog: `Blog about: Python, JavaScript, SEO and SEM.`,
    urlPath_blog: `/blog/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `api.kolarzowa.pl`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: false,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/media",
          "**/tags",
          "**/users",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-31571413-1",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://pawelkot.com.pl',
        sitemap: 'https://pawelkot.com.pl/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-pawelkot-com-pl`
      }
    },
  ],
}
