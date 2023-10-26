const path = require('path');
require('path').resolve(__dirname, '../../public/index.html');
const router = require('express').Router();

// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public/index.html'));
// });

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
}
);

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
}
);

module.exports = router;