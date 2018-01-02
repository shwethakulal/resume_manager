import mongoose from 'mongoose';
import restify from 'restify';

import * as config from './config';
import { getUserDetails, getAllUserDetails, insertUserDetails } from './routers/user';



var server = restify.createServer();


server.get(config.RouterPaths.USER_DETAILS_URL, getUserDetails);
server.get(config.RouterPaths.USERS_URL, getAllUserDetails);
server.post(config.RouterPaths.USERS_URL,insertUserDetails);


server.listen(config.SERVER_PORT, function () {
  console.log('%s listening at %s', server.name, server.url);

});

