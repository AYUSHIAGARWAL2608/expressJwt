'use strict';


let express = require('express');
let apiRoutes = express.Router();

let controller = require('../controller');


/**********************************Unsecure Routes*****************************************/

apiRoutes               .post               ('/login',                      controller.user.login);
apiRoutes               .post               ('/register',                   controller.user.register);


// Middleware function for auth token
apiRoutes               .use(                                               controller.authentication);



/***********************************Secure Routes*******************************************/
apiRoutes               .get                ('/user',                       controller.user.list);
apiRoutes               .get                ('/profile',                    controller.user.profile);