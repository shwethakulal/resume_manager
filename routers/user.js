import { getUserByUsername } from '../dao/userDao';

export function getUserDetails(req, res, next) {
  getUserByUsername(req.params.username, function (err, user) {
    res.send(user);
  });
  next();
}