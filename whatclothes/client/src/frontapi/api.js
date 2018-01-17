import axios from "axios";

export default {
  // Gets all books
  getScrapeds: function() {
    return axios.get("/api/scrapeds");
  },
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};
