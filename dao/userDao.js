import mongoose from './mongoose'


const User = mongoose.model('users', { username: String });


export function getUserByUsername(username, callbackFn) {
    User.findOne({username:username},callbackFn);
}

export function getAllUsers(callbackFn){
    User.find(callbackFn);
}
export function insertNewUsers(username,callbackFn){
    User.save({username:username},callbackFn);
}