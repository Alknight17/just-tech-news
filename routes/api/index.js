// this file, like index.js in the models folder serves as a means to 
// collect all of the API routes and package them up

const router = require('express').Router();

const UserRoutes = require('./user-routes');

router.use('/users', UserRoutes);

module.exports = router;