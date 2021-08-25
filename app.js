const express = require("express")
const bodyParser = require("body-parser")
const axios = require('axios')
const mongoose = require('mongoose');
require('dotenv').config()


const app = express()
const port = 3000

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static(`${__dirname}/public`))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))

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

    updated: {
        type: Date,
        default: Date.now
    }
})



// Query Model
const Query = mongoose.model("Query", querySchema)

var wordOutput = [];
var word = "";
var filter = ""

app.get("/", (req, res)=> {

    
    res.render("index", {
        title: "Word App",
        item: wordOutput,
        enteredWord: word,
        query: filter
    })
})

    
app.post("/", (req, res) => {
    
    word = req.body.word
    filter = req.body.filter
    var query = ""    
    
    checkBulkQuery = (entry)=> {
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
    // console.log(url)
    
    axios.get(url)
    .then(function (response) {
        // handle success
        // console.log(response)
        const wordData = response.data
        // console.log(wordData)
        wordOutput = wordData

        const saveQuery = Query({
            query: word,
            filter: filter,
            updated: Date.now()
        })

        saveQuery.save()
        res.redirect("/")
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

 
})


app.get("/track", (req, res) => {

    Query.find({__v: 0}, (err, documents) => {
        if (!err) {
            res.render("track", {
                title: "Track Queries",
                docs: documents
            })
        }
    })
})

app.listen(process.env.PORT || port, ()=> console.log(`Server spinning on port ${port}`))