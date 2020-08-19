const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

// dashboard routes

router.use('/dashboard', dashboardRoutes);


router.use('/', homeRoutes);


router.use('/api', apiRoutes);
//if the end point no exist return a error
router.use((req, res) => {
  res.status(404).end();
});






module.exports = router;