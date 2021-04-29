// STEP 1: Before you start: take a look at the code below to get a feel for what it does. 

// STEP 2: In your terminal, run npm init to initialize this project.

// STEP 3: In your terminal install the dependencies simply by typing in npm install. This will install the needed dependencies (express and ejs) and dev dependencies (morgan and nodemon) for this project.

// STEP 4: In the views/pages folder, change the file type of the html files to ejs files by replacing .html with .ejs for all three files.

// STEP 5: Follow the directions below in the commented code to complete the rest of this assignment. 


const express = require('express');
const app = express();
const PORT = 3000;
// STEP 6: Require the built-in Node module 'path'

const morgan = require('morgan');

// STEP 7: Set the view engine to 'ejs'


// STEP 8: Set up the path to static assets with express.static() method, which takes path.join() as it's argument - note that path.join() expects 2 arguments


app.use(morgan('combined'));

// Variables to be used in EJS files.
let userName = 'CodeSquader';
let date = new Date();
let year = date.getFullYear();

// Routes 
// STEP 9: Convert these get routes so that they use the response.render method to render the correct ejs files from the views/pages folder. Pass in the userName variable and the year variable so that their values can be imported into the ejs pages being rendered. 

// STEP 10: For each route, go to the ejs page in the views/pages folder and use userName and the year values being passed in through the route. The userName should diplay in the first paragraph, and the year should display in the footer. 
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/pages/index.html');
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/pages/about.html');
});

app.get('/contact', (request, response) => {
    response.sendFile(__dirname + '/views/pages/contact.html');
});


//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});

