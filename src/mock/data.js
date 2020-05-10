import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: "Anna Dontcova's Web Dev Portfolio", // e.g: 'Name | Developer'
  lang: 'en, rus, de', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Anna Dontcova',
  subtitle: "I'm a Frontend Developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'about.jpeg',
  paragraphOne:
    'I am a web developer currently working for a legal tech startup in Berlin. My stack includes JavaScript, ReactJS, NodeJS, Ruby on Rails, HTML & CSS. I use on daily basis modern development methods and technologies such as version control with Git, collaboration on GitHub as well as working with and building APIs.',
  paragraphTwo:
    'Additionally I have a background in cultural heritage management and a long history of working for tourism companies, cultural foundations, universities and NGOs.',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'lordofthering.png',
    title: 'The Lord of the (Berlin) Ring',
    info:
      'A game to challenge your knowledge of the Berlin transport system. You get a random U-Bahn or S-Bahn station within the ring and you have to guess where it is. When you click on one of the stations you get points depending on how far you are from the right station.',
    info2:
      'The game is built using HTML, CSS and JavaScript DOM Manipulation. A solo project built in 4 days.',
    url: 'https://codeadventurer.github.io/LordOfTheRingGame/',
    repo: 'https://github.com/codeadventurer/LordOfTheRingGame',
  },
  {
    id: uuidv1(),
    img: 'marketsofberlin.png',
    title: 'Markets of Berlin',
    info:
      'A full stack web app to search and sort your favorite Berlin markets. You can sort them by type and day of the week they are open. Logged in users can add markets to the map.',
    info2:
      'The app is built with JS Handlebars templates, MongoDB and node.js backend. It uses Mappox api and Bulma CSS framework. A pair project built in 5 days.',
    url: 'http://markets-of-berlin.herokuapp.com/',
    repo: 'https://github.com/codeadventurer/Markets-of-Berlin',
  },
  {
    id: uuidv1(),
    img: 'travelboard.png',
    title: 'Travelboard',
    info:
      'All-in-one planning tool for your next trip. You can fill each day with sightseeing while also scheduling accomodations, flights, bus and train connections. Don’t forget to add must-try cafes and restaurants. Drag and drop, play around!',
    info2:
      'The app is built with node.js and MongoDB on server side and ReactJS on client side. it also uses Google Maps api and Material-UI React library. Built in 8 days in a team of 4 people.',
    url: 'https://mytravelboard.herokuapp.com/',
    repo: 'https://github.com/codeadventurer/travel-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'a.dontcova@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/code_adventurer',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/adontcova/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/codeadventurer',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
