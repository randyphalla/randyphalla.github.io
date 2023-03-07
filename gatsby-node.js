/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions: { createPage } }) => {
  const projects = [
    {
      id: 0,
      imgSrc: '/portfolio/starwars_thumbnail.png',
      imgSrcAlt: 'Starwars',
      title: 'Starwars',
      type: "Web",
      description: `
        This project is about fetching data from a server and build a web application. The goal was to display a list of character and display the detail of that character.
      `,
      siteLink: 'https://roaring-liger-fcf8b7.netlify.app/',
      repoLink: 'https://github.com/randyphalla/swapi-ajax/tree/development/fetch-api',
      languages: 'HTML5, CSS3, Foundation 6, JavaScript and Gulp',
    },
    {
      id: 1,
      imgSrc: '/portfolio/marvel_thumbnail.png',
      imgSrcAlt: 'Marvel',
      title: 'Marvel',
      type: "Web / Mobile",
      description: `
        This project is about fetching data from a server and build a mobile application. The goal was to display a list of superheroes and display the detail of that superhero on click.
      `,
      siteLink: 'https://serene-beijinho-2a498a.netlify.app/',
      repoLink: 'https://github.com/randyphalla/marvel-expo-app',
      languages: 'React Native, Expo and CSS-in-JS',
    },
    {
      id: 2,
      imgSrc: '/portfolio/pokemon_thumbnail.png',
      imgSrcAlt: 'Pokemon',
      title: 'Pokemon',
      type: "Web / Mobile",
      description: `
        This project is about fetching data from a server and build a mobile application. The goal was to display a list of Pokémon's and display the details of that Pokémon on click.
      `,
      siteLink: 'https://lucent-banoffee-173852.netlify.app/',
      repoLink: 'https://github.com/randyphalla/pokemon-expo-app',
      languages: 'React Native, Expo and CSS-in-JS',
    },
    {
      id: 3,
      imgSrc: '/portfolio/musicbook_thumbnail.png',
      imgSrcAlt: 'Musicbook',
      title: 'Musicbook',
      type: "Web",
      description: `
        This project is about creating music app using PHP & MySQL. Users are able to create a user account and login with your new account, users have the ability to favorite/unfavorite their artists, albums, songs, playlist and users and able to create, update and delete their own playlist.
      `,
      // siteLink: '',
      repoLink: 'https://github.com/randyphalla/musicbook-php-mysql',
      languages: 'HTML5, CSS3, Bootstrap v5, PHP and MySQL',
    },
  ];

  // // Create portfolio page
  // createPage({
  //   path: `/portfolio`,
  //   component: require.resolve('./src/templates/portfolio.tsx'),
  //   context: { projects },
  // });

  // // Create list of portfolio pages
  // projects.forEach(project => {
  //   createPage({
  //     path: `/portfolio/${project.id}`,
  //     component: require.resolve('./src/templates/portfolio-details.tsx'),
  //     context: { project },
  //   });
  // });
};
