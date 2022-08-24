const API_KEY = process.env.API_KEY;

export default {
  tesla: {
    title: "tesla",
    url: `/everything?q=tesla&from=2022-07-21&sortBy=publishedAt&apiKey=${API_KEY}`,
  },
  apple: {
    title: "apple",
    url: `/everything?q=apple&from=2022-08-20&to=2022-08-20&sortBy=popularity&apiKey=${API_KEY}`,
  },
  business: {
    title: "business",
    url: `/top-headlines?country=us&category=business&apiKey=${API_KEY}`,
  },
  topTech: {
    title: "topTech",
    url: `/top-headlines?sources=techcrunch&apiKey=${API_KEY}`,
  },
  public: {
    title: "public",
    url: `/everything?domains=wsj.com&apiKey=${API_KEY}`,
  },
};
