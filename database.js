const books = [
  {
    ISBN: "12345Book",
    title: "GETTING Started with MERN",
    pubDate: "2021-12-31",
    language: "en",
    numPage: 250,
    author: [1,2],
    publications: [1],
    category: ["tech", "programming", "education"]

  }
];

const author = [
  {
    id: 1,
    name: "Vishwajeet",
    books: ["12345Book", "Mybook"]
  },
  {
    id: 2,
    name: "Priyanka",
    books: ["12345Book"]
  }

];

const publication = [
  {
    id: 1,
    name: "Writex",
    books: ["12345Book"]
  }

];


module.exports = {books, author, publication};
