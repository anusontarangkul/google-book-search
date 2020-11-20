import axios from "axios";

export default {
    searchTerms: function(query) {
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=coraline" + query )
    }
  };