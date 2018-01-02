import mongoose from './mongoose'


const User = mongoose.model('users', { username: String, name: String, password: String });
//var NewUser = mongoose.model('users'),{username: String});

export function getUserByUsername(username, callbackFn) {
    User.findOne({username:username},callbackFn);
}

export function getAllUsers(callbackFn){
    User.find(callbackFn);
}


export function insertNewUser(users,callbackFn){
    User.create(users,callbackFn);
    //User.save(NewUser,callbackFn);
}