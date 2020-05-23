const page = `| pawelkot.com.pl`

module.exports = {
  siteMetadata: {
    title: `SEO & Python & JavaScript Developer ${page}`,
    description: `Od ponad 6 lat zajmuje się SEO i SEM. Piszę również kod w Python oraz JavaScript -> React / Gatsby.`,
    author: `@prott_`,
    siteUrl: `https://pawelkot.com.pl`,
    urlPath: ``,

    title_404: `404 ${page}`,
    desc_404: `Strony nie znaleziono...`,
    urlPath_404: `/404/`,

    title_contact: `Kontakt ${page}`,
    desc_contact: `Najszybciej skontaktujesz się ze mną przez maila lub twittera.`,
    urlPath_contact: `/kontakt/`,

    title_about: `O mnie ${page}`,
    desc_about: `Pisze kod w pythonie oraz JavaScripte. Zajmuje się SEO oraz audytami SEO.`,
    urlPath_about: `/about/`,

    title_services: `Usługi SEO / Web Development ${page}`,
    desc_services: `Usługi: programowanie - pozycjonowanie seo - optymalizacja stron - google ads.`,
    urlPath_services: '/uslugi/',

    title_blog: `Blog ${page}`,
    desc_blog: `Blog o: Python, JavaScript, SEO i SEM.`,
    urlPath_blog: `/blog/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `api.pawelkot.com.pl`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: true,
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
  ],
}
