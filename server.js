import mongoose from 'mongoose';
import restify from 'restify';

import * as config from './config';
import {getUserDetails} from './routers/user';



var server = restify.createServer();
server.get(config.RouterPaths.USER_DETAILS_URL, getUserDetails);


server.listen(config.SERVER_PORT, function () {
  console.log('%s listening at %s', server.name, server.url);
 
});

