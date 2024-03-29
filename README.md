## Word App - v1
---

For creative writers, songwriters, rappers, and poets struggling with writer's block, WordApp saves you a ton of stress by suggesting related words, rhymes, synonyms, or antonyms as accurately as possible.

The *Rhymes* constraint, for instance, requires that the results are pronounced similarly to the user's entry. If the string of characters doesn't have a known pronunciation, the system will make its best guess using a text-to-phonemes algorithm.


[Preview Live Demo 🚀](https://word-app.up.railway.app/)

---

![WordApp Demo](https://github.com/giwajossy/wordapp/blob/master/demo.gif)


---

**Environments**
- Node version - v14.17.0


**Technologies:**
- NodeJS
- ExpressJS
- GSAP
- [Datamuse API](https://www.datamuse.com/api/)

---
**Homepage**
![WordApp Homepage](https://res.cloudinary.com/dd3hmuucq/image/upload/v1629919255/WordApp%20Resources/__wordApp_eb2r2k.jpg)


**The result when you search for words that ryhme with "happy"**
![Word related to ready when you are](https://res.cloudinary.com/dd3hmuucq/image/upload/v1629925326/WordApp%20Resources/wordApp_result_for_happy_hdpe1a.jpg)

---

## To run the app manually
*note*: `run all commands in the application's root directory`

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

---

**The result when you search for words related to "ready when you are"**
![Word related to ready when you are](https://res.cloudinary.com/dd3hmuucq/image/upload/v1629925326/WordApp%20Resources/wordApp_related_words_for_happy_f8sx42.jpg)

--- 

**To do**
- Refactor project in Typescript.


---
**Author(s):** 

- [Giwa Jossy](https://github.com/giwajossy)

