## Word App 

- version 1.0


WordApp helps you out of your writer's block. It does so much thinking for you by suggesting *related words*, *rhymes*, *synonyms*, and *antonyms* as quickly as possible.

If you are a creative writer, poet, song writer, rapper, musician, or poet who often struggles with words, WordApp will save you a ton of stress.


[Live Demo]()


![WordApp Demo](https://github.com/giwajossy/wordapp/blob/master/demo.gif)


---

**Environments**
- Node version - v14.17.0


**Technologies:**
- NodeJS
- ExpressJS
- GSAP
- Datamuse API

---
**Homepage**
![WordApp Homepage](https://res.cloudinary.com/dd3hmuucq/image/upload/v1629919269/WordApp%20Resources/_Word_App_Demo_rik4gz.gif)


**The result when you search for words related to "ready when you are"**
![Word related to ready when you are](https://res.cloudinary.com/dd3hmuucq/image/upload/v1629925326/WordApp%20Resources/wordApp_related_words_for_happy_f8sx42.jpg)


**The result when you search for words that ryhme with "happy"**
![Word related to ready when you are](https://res.cloudinary.com/dd3hmuucq/image/upload/v1629925326/WordApp%20Resources/wordApp_result_for_happy_hdpe1a.jpg)


---


## To run the app manually
*note*: `run all commands in the applications root directory`

**Install all dependencies**

```
npm install
```

**Database**
```
- get a mongodb uri
- create a .env file on the project's root directory
- set the connection uri as MONGODB_URI in the .env file (i.e MONGODB_URI=<connection uri>)
```

**API Configuration**
```
- In the .env file on the root folder directory, set the following
- QUERY_PREFFIX=https://api.datamuse.com/words?
- QUERY_SUFFIX=&md=d,p,r&ipa=1
```


**Start the application**

```
node app.js
```

#

---

## The Design Principles used are:

- DRY Principle
- KISS Principle
- YAGNI Principle


### DRY Principle:

```
I utilized this principle to make my code more composed and simpler to keep up. And furthermore spare my time at whatever point I need to change something later on.
```

### KISS Principle:

```
I utilized this principle to make it simpler for other software engineers to envision the different parts of the applications, intellectually planning the potential impacts of any change.
```

### YAGNI Principle:

```
I utilized this principle since it abstains from investing energy on features that may not be used and helps me avoid feature creep.
```

---

**To do**
- Polish User Interface and Experience


---
**Author:** 
- Giwa Jossy
