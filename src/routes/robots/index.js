const router = require('express').Router();
const path = require('path');
const expressAsync = require('../../middleware/express-async');

router.get('/', expressAsync((req, res) => {
  const IS_PROD = process.env.NODE_ENV === 'production';
  const fileDirectory = './';
  const fileName = IS_PROD ? 'prod.txt' : 'non-prod.txt';

  res.sendFile(
    fileName,
    { root: path.join(__dirname, fileDirectory) },
    (err) => res.status(500)
  );
}));

module.exports = router;