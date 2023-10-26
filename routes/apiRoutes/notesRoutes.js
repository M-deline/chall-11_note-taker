const router = require('express').Router();
const { notes } = require('../../db/db.json')   
const { makeNewNote } = require('../../lib/notes');

// const cors = require('cors');
// const { arrayNotes } = require('../../db/db.json')
//SOMETHING WRONG WITH GET routers
// router.get("/", (req, res) => {
//     res.json(notes);
//     res.status(200).json({status: '1', message: 'Success'});
// }
// );
//says to replace with text instead of json 
// The DOCTYPE response is indicative of you receiving HTML rather than a JSON response. 
router.get('/notes', (req, res) => {
   let results = notes;
   res.json (results);
    });

router.post('/notes', (req, res) => {
    // req.body.id = arrayNotes.length.toString();
    // let note = makeNewNote(req.body, notes);
    // res.json(note);
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