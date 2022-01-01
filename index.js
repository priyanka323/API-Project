const express = require("express");

//import database
const database = require("./database");
//initialise express
const booky = express();

//get all books
/*
Route          /
Description    get all books
access         public
parameter      none
methods        get

*/
//get specific book localhost:5000/12345Book
/*
Route          /is
Description    get all books
access         public
parameter      isbn
methods        get

*/

booky.get("/", (req,res) => {
  return res.json({books: database.books});
});

//get a specific BOOKS localhost:5000/12345Book
booky.get("/is:isbn", (req,res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.ISBN === req.params.isbn
  );
  if(getSpecificBook.length === 0) {
    return res.json({
      error: `No book found for ISBN of ${req.params.isbn}`
    });
  }
  return res.json({book: getSpecificBook});
});
//get book on a specific category
/*
Route          /c
Description    get all books
access         public
parameter      category
methods        get

*/
booky.get("/c/:category", (req,res) => {
  const getSpecificBook = database.books.filter((book) =>
  book.category.includes(req.params.category)
);
  if(getSpecificBook.length === 0) {
    return res.json({
      error: `No book found for category of ${req.params.category}`
    });
  }
  return res.json({book: getSpecificBook});
});

//get book on a specific language
/*
Route          /d
Description    get all books
access         public
parameter      language
methods        get

*/
booky.get("/d/:language", (req,res) => {
  const getSpecificBook = database.books.filter((book) =>
  book.language.includes(req.params.language)
);
  if(getSpecificBook.length === 0) {
    return res.json({
      error: `No book found for this language  ${req.params.language}`
    });
  }
  return res.json({book: getSpecificBook});
});
//to get all authors
/*
Route          /author
Description    get all books
access         public
parameter      author
methods        get

*/
booky.get("/author", (req,res) => {
  return res.json({authors: database.author});
//  const getSpecificBook = database.books.filter((book) =>
  //book.author.includes(req.params.author)
//);
//  if(getSpecificBook.length === 0) {
  //  return res.json({
    //  error: `No book found for this author  ${req.params.author}`
    //});
  //}
  //return res.json({book: getSpecificBook});
});
//to get all authors based on a book
/*
Route          /author/book
Description    get all authors based on book
access         public
parameter      isbn
methods        get
*/
booky.get("/author/book/:isbn", (req,res) => {
  const getSpecificAuthor = database.author.filter((author) =>
  author.books.includes(req.params.isbn)
);
  if(getSpecificAuthor.length === 0) {
    return res.json({
      error: `No author found for this isbn of  ${req.params.isbn}`
    });
  }
  return res.json({authors: getSpecificAuthor});
});
//to get all publications
/*
Route          /publications
Description    get all publications
access         public
parameter      none
methods        get
*/

booky.get("/publications", (req,res) => {
  return res.json({publications: database.publication});
})


booky.listen(5000,() => console.log("Server is up and running"));
