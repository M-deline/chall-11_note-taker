const router = require('express').Router();
const { notes } = require('../../db/db')   
const { makeNewNote } = require('../../lib/notes');

// const cors = require('cors');
// const { arrayNotes } = require('../../db/db.json')




router.get("/", (req, res) => {
    res.json(notes);
}
);

router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/notes', (req, res) => {
    req.body.id = arrayNotes.length.toString();
    let note = makeNewNote(req.body, notes);
    res.json(note);
    })

    //delete 
    // router.delete('/notes/:id', (req, res) => {
    //     deleteNote(arrayNotes, req.params.id);
    //     res.json(arrayNotes);
    // })

    module.exports = router;