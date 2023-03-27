export const SiteMetadata = {
  title: 'travelens',
  description: 'Travels Through A Lens',
  author: {
    name: 'Chris Tham',
    twitter: '@chris1tham',
    url: 'https://christham.net',
    email: 'chris@christham.net',
    summary: 'Outrageous actualiser.',
  },
  org: {
    name: 'Hello Tham',
    twitter: '@hellothamcom',
    url: 'https://hellotham.com',
    email: 'info@hellotham.com',
    summary:
      'Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.',
  },
  location: 'Sydney, Australia',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/travelens/travelens.github.io',
  social: [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/christham',
      icon: 'linkedin',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/chris1tham',
      icon: 'facebook',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/chris1tham',
      icon: 'instagram',
    },
    {
      name: 'Github',
      link: 'https://github.com/travelens',
      icon: 'github',
    },
  ],
  buildTime: new Date(),
}

export const TripImage = 'assets/trip.jpeg'
export const AuthorImage = 'assets/trip.jpeg'

export const NavigationLinks = [
  { name: 'Trips', href: '/trips' },
  { name: 'Places', href: '/#places' },
  { name: 'About', href: '/#about' },
]

export const AuthorDetail = {
    name: 'Chris Tham',
    description: 'Hello World',
    contact: 'chris@christham.net',
    image: '../images/authors/Chris Tham.jpg'
  }

export const Websites = [
  {
    website: 'Hello Tham',
    link: 'https://hellotham.com',
    featured: true,
    screenshot: '../images/website/hellotham.png',
    description: 'I founded a booutique strategic consulting company called Hello Tham. This is the corporate website.',
  },
  {
    website: 'Travels Through a Lens',
    link: 'https://travel.christham.net',
    featured: true,
    screenshot: '../images/website/travel.png',
    description: 'This is a travelogue web site that that documents my travel adventures and trips over the years.',
  },
  {
    website: 'Visual Voyager',
    link: 'https://visualvoyager.net',
    featured: true,
    screenshot: '../images/website/visualvoyager.png',
    description: 'This is my photography website, for exploring the world we live in, as seen through our unique perspectives and experiences.',
  },
]
