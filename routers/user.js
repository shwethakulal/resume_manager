import { getUserByUsername,getAllUsers} from '../dao/userDao';


export function getUserDetails(req, res, next) {
  getUserByUsername(req.params.username, function (err, user) {
    res.send(user);
  });
  next();
}

export function getAllUserDetails(req,res,next){
  getAllUsers(function(err,users){
    res.send(users);
  });
next();
}