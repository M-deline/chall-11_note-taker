const router = require('express').Router();
const { makeNewNote, deleteNote } = require('../../lib/notes');
// const { arrayNotes } = require('../../db/db.json')
const { notes } = require('../../db/db.json')   


router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/notes', (req, res) => {
    req.body.id = arrayNotes.length.toString();
    let note = makeNewNote(req.body, arrayNotes);
    res.json(note);
    })

    //delete 
    // router.delete('/notes/:id', (req, res) => {
    //     deleteNote(arrayNotes, req.params.id);
    //     res.json(arrayNotes);
    // })

    module.exports = router;