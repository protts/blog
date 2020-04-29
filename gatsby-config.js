const page = `| pawelkot.com.pl`

module.exports = {
  siteMetadata: {
    title: `SEO & Python & JavaScript Developer ${page}`,
    description: `Od ponad 6 lat zajmuje się SEO i SEM. Piszę również kod w Python oraz JavaScript -> React / Gatsby.`,
    author: `@prott_`,
    siteUrl: `https://pawelkot.com.pl`,
    urlPath: ``,

    title_contact: `Kontakt ${page}`,
    desc_title: `Najszybciej skontaktujesz się ze mną przez maila lub twittera.`,
    urlPath: `/kontakt/`,

    title_404: `404 ${page}`,
    desc_404: `Strony nie znaleziono...`,
    urlPath: `/404/`,
  },
  plugins: [
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
  ],
}
