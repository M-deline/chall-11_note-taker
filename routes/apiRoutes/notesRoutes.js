const router = require('express').Router();
const { notes } = require('../../db/db')   
const { makeNewNote } = require('../../lib/notes');


router.get('/notes', (req, res) => {
   let results = notes;
//    JSON.parse(results);
    res.json(results);
    });
//router get Promise (route(req))
router.post('/notes', (req, res) => {
    if(notes){
        req.body.id = notes.length.toString();
    } else {
        req.body.id = 0;}
        res.json(makeNewNote(req.body, notes));
    })

    //delete 
    // router.delete('/notes/:id', (req, res) => {
    //     deleteNote(arrayNotes, req.params.id);
    //     res.json(arrayNotes);
    // })

    module.exports = router;