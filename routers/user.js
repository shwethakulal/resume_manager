import { getUserByUsername, getAllUsers, insertNewUsers } from '../dao/userDao';
import mongoose from '../dao/mongoose';



export function getUserDetails(req, res, next) {
  getUserByUsername(req.params.username, function (err, user) {
    res.send(user);
  });
  next();
}

export function getAllUserDetails(req, res, next) {
  getAllUsers(function (err, users) {
    res.send(users);
  });
  next();
}

export function insertUserDetails(req, res, next) {
  insertNewUser(req.body, function (err, users) {
    res.send(users);
  });
 next();
}