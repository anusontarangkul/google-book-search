var mongoose = require("mongoose");


var Schema = mongoose.Schema


var BookSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
}
)


var GoogleBooks = mongoose.model("GoogleBooks", BookSchema);

module.exports = GoogleBooks;