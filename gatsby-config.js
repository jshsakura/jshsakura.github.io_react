module.exports = {
  siteMetadata: {
    description: "Developer Jeong SeungHyeon",
    locale: "ko",
    title: "There's More Than One Way To Do It",
    formspreeEndpoint: "https://formspree.io/f/jshsakura@gmail.com",
  },
  plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          basePath: "/",
          contentPath: "content/",
          showThemeLogo: false,
          theme: "bright-green",
          
      },
    },
  ],
}