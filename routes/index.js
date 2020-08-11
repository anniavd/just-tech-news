const router = require('express').Router();
const apiRoutes = require('./api');


router.use('/api', apiRoutes);
//if the end point no exist return a error
router.use((req, res) => {
  res.status(404).end();
});





module.exports = router;