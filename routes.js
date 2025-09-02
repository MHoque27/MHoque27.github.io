const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hi everyone');
});
router.get('/secret', (req, res) => {
    res.send('bloop');
});
module.exports = router;