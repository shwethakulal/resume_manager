import mongoose from './mongoose'

const User = mongoose.model('users', { username: String });

export function getUserByUsername(username, callbackFn) {
    User.findOne({username:username},callbackFn);
}