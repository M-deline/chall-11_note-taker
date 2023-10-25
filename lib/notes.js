const fs = require('fs');
const path = require('path');

function makeNewNote(body, arrayNotes) {
    const note = body;
    arrayNotes.push(note); 

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ arrayNotes }, null, 2)
    )
    return note;
}

//delete note
  
  module.exports = {
    makeNewNote
  };