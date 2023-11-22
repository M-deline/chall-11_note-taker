# Note Taker Application 
## Overview & Description
- 
## Challenges & Successes
- using console in web browser to troubleshoot helped a lot 
## Technologies Used
- 
## Installation
- git clone, install node, node server.js 

## Contributions

## Credits
- https://stackoverflow.com/questions/32405812/failed-to-load-resource-neterr-file-not-found-loading-json-js
- https://stackoverflow.com/questions/41965066/access-to-image-from-origin-null-has-been-blocked-by-cors-policy
- https://stackoverflow.com/questions/67252514/vm16611-uncaught-in-promise-syntaxerror-unexpected-token-s-in-json-at-positi
- https://stackoverflow.com/questions/52919331/access-to-script-at-from-origin-null-has-been-blocked-by-cors-policy
- https://expressjs.com/en/resources/middleware/body-parser.html#:~:text=The%20extended%20option%20allows%20to,qs%20library%20(when%20true%20).
- https://aneeqa-k25.medium.com/creating-rest-api-routes-in-node-js-922069e59feb

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column


Getting Started
The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.

The following HTML routes should be created:

GET /notes should return the notes.html file.

GET * should return the index.html file.

The following API routes should be created:

GET /api/notes should read the db.json file and return all saved notes as JSON.

POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.


deployment to heruku poss link https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true