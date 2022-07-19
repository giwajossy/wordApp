const express = require("express")
const bodyParser = require("body-parser")
const axios = require('axios')
const mongoose = require('mongoose');
require('dotenv').config()

const TimeAgo = require('javascript-time-ago')
const en = require('javascript-time-ago/locale/en')
TimeAgo.addDefaultLocale(en)

// Create formatter (English).
const timeAgo = new TimeAgo('en-US')


const app = express()
const port = 3000

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static(`${__dirname}/public`))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))

// Query Schema
const querySchema = mongoose.Schema({
    query: {
        type: String,
        required: [true, "Query is required"]
    },

    filter: {
        type: String,
        required: [true, "Filter is required"]
    },

    queryOutput: {
        type: Boolean,
        required: [true, "Query result is required"]
    },

    updated: {
        type: Date,
        default: Date.now
    }
})



// Query Model
const Query = mongoose.model("Query", querySchema)

var wordOutput = [];
var word = "";
var filter = "";
var queryResult;

app.get("/", (req, res) => {
    res.render("index", {
        title: "Word App"
    })
})

app.get("/result", (req, res) => {

    res.render("result", {
        title: `'${word}' - '${filter}' - WordApp`,
        item: wordOutput,
        enteredWord: word,
        query: filter
    })
})


app.post("/result", (req, res) => {

    word = req.body.word
    filter = req.body.filter
    var query = ""

    checkBulkQuery = (entry) => {
        let getAllWords = entry.split(" ")
        let getLastWord = getAllWords[getAllWords.length - 1]
        return getLastWord
    }

    switch (filter) {
        case "synonyms":
            query = `rel_syn=${checkBulkQuery(word)}`
            break;
        case "antonyms":
            query = `rel_ant=${checkBulkQuery(word)}`
            break;
        case "rhymes":
            query = `rel_rhy=${checkBulkQuery(word)}`
            // query = `sp=${checkBulkQuery(word)}`
            break;
        case "related-words":
            query = `ml=${word}`
            break;
        default:
            break;
    }


    const url = `${process.env.QUERY_PREFFIX}${query}${process.env.QUERY_SUFFIX}`

    axios.get(url)
        .then(function (response) {
            const wordData = response.data
            wordOutput = wordData

            wordOutput.length > 1
                ? queryResult = true
                : queryResult = false

            const saveQuery = Query({
                query: word,
                filter: filter,
                queryOutput: queryResult,
                updated: Date.now()
            })

            saveQuery.save((err) => {
                if (err) console.log(err)
                res.redirect("/result")
            })

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})

app.get("/track", (req, res) => {

    Query.find({}, (err, documents) => {
        if (err) console.log(err)
        res.render("track", {
            title: "Track Queries",
            docs: documents
        })
    })
})

app.listen(process.env.PORT || port, () => console.log(`Server spinning on port ${port}`))