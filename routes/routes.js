'use strict';

let express                         =               require('express');
let apiRoutes                       =               express.Router();
let controller                      =               require('../controller');
let validations                     =               require('../validations');

/**********************************Unsecure Routes*****************************************/

apiRoutes         .post     ('/login',                                              controller.user.login);
apiRoutes         .post     ('/register',       validations.user.register,          controller.user.register);
// apiRoutes         .post     ('/register',                                           controller.user.register);

// Middleware function for auth token
// apiRoutes         .use(                                                             controller.authentication);

/***********************************Secure Routes*******************************************/
apiRoutes         .get      ('/userslist',                                          controller.user.list);
apiRoutes         .get      ('/user/:userId',                                       controller.user.profile);
apiRoutes         .put      ('/user/:userId',                                       controller.user.edit);
apiRoutes         .delete   ('/user/:userId',                                       controller.user.delete);

module.exports                      =               apiRoutes;