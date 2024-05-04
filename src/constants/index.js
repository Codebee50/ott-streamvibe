import {
  gamingConsole,
  laptop,
  smartPhone,
  tablet,
  tv,
  vr,
} from "../assets/icons";

import defaultbg from "../assets/images/defaultbg.png";

export const openMovieDetailPage = (movieid) => {
  window.location.href = `/moviesandshows?tab=movie&id=${movieid}`;
};

export const TMDB_API_TOKEN = import.meta.env.VITE_TMDP_API_TOKEN;

export const getMovieDetailLink = (movieid) => {
  return `/moviesandshows?tab=movie&id=${movieid}`;
};
export const getShowDetailLink = (showId) => {
  return `/moviesandshows?tab=show&id=${showId}`;
};

export const constructTmdbImageLink = (path) => {
  return `https://image.tmdb.org/t/p/w500${path}`;
};

export const getGenreTvListLink = (genreId) => {
  return `http://localhost:5173/moviesandshows?tab=genre&id=${genreId}}&content=tv&page=1`;
};
export const getGenreMovieListLink = (genreId) => {
  return `http://localhost:5173/moviesandshows?tab=genre&id=${genreId}}&content=movie&page=1`;
};

export const imageErrorHandler = (event) => {
  event.target.src = defaultbg;
};

export const footerItems = [
  [
    {
      label: "Home",
      link: "#",
      head: true,
    },
    {
      label: "Categories",
      link: "#",
    },
    {
      label: "Devices",
      link: "#",
    },
    {
      label: "Pricing",
      link: "#",
    },
    {
      label: "FAQ",
      link: "#",
    },
  ],

  [
    {
      label: "Movies",
      link: "#",
      head: true,
    },
    {
      label: "Genres",
      link: "#",
    },
    {
      label: "Trending",
      link: "#",
    },
    {
      label: "New Release",
      link: "#",
    },
    {
      label: "Popular",
      link: "#",
    },
  ],

  [
    {
      label: "Shows",
      link: "#",
      head: true,
    },
    {
      label: "Genres",
      link: "#",
    },
    {
      label: "Trending",
      link: "#",
    },
    {
      label: "New Release",
      link: "#",
    },
    {
      label: "Popular",
      link: "#",
    },
  ],

  [
    {
      label: "Support",
      link: "#",
      head: true,
    },
    {
      label: "Contat us",
      link: "#",
    },
  ],
  [
    {
      label: "Subscription",
      link: "#",
      head: true,
    },
    {
      label: "Plans",
      link: "#",
    },
    {
      label: "Features",
      link: "#",
    },
  ],
];

export const planList = [
  {
    name: "Basic Plan",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    monthPrice: "9.99",
  },
  {
    name: "Standard Plan",
    description:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    monthPrice: "12.99",
  },
  {
    name: "Premium Plan",
    description:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    monthPrice: "14.99",
  },
];

export const faqList = [
  {
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    question: "How do I sign up for StreamVibe?",
    answer:
      'To sign up for StreamVibe, simply visit our website and click on the "Sign Up" button. Follow the prompts to create your account by providing your email address, creating a password, and filling out some basic information.',
  },
  {
    question: "How much does StreamVibe cost?",
    answer:
      "StreamVibe offers flexible pricing plans to suit your needs. Our subscription plans start at $9.99 per month, with options for annual subscriptions that offer additional savings.",
  },
  {
    question: "What content is available on StreamVibe?",
    answer:
      "StreamVibe offers a vast library of movies, TV shows, documentaries, and more. Our content library includes a wide range of genres.",
  },
  {
    question: "How can I watch StreamVibe?",
    answer:
      "You can watch StreamVibe on a variety of devices, including smartphones, tablets, smart TVs, and computers. Simply download the StreamVibe app from the App Store or Google Play Store.",
  },
  {
    question: "What is the StreamVibe free trial?",
    answer:
      "The StreamVibe free trial allows new users to explore our platform and enjoy unlimited streaming for a limited time, completely free of charge.",
  },
  {
    question: "How do I contact StreamVibe customer support?",
    answer:
      "If you have any questions, concerns, or feedback, our customer support team is here to help. You can reach us by emailing support@streamvibe.com",
  },
  {
    question: "What are the StreamVibe payment methods?",
    answer:
      "StreamVibe accepts a variety of payment methods to make subscribing convenient for our users. You can pay for your subscription using major credit cards such as Visa, Mastercard, and American Express.",
  },
];

export const navLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Movies & Shows",
    link: "/moviesandshows",
  },
  {
    label: "Support",
    link: "/support",
  },
  {
    label: "Subscriptions",
    link: "#",
  },
];

export const screensList = [
  {
    icon: smartPhone,
    label: "Smartphones",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: tablet,
    label: "Tablet",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: tv,
    label: "Smart Tv",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: laptop,
    label: "Laptops",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: gamingConsole,
    label: "Gaming consoles",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: vr,
    label: "VR Headsets",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
];
