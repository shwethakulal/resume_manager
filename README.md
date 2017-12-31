# resume_manager
To maintain the users resumes.


npm - Node Package Manager

## To initialize package manager
npm init

## To install restify package
npm install restify --save

## To export variables from js file
export

## To run the project
npm run start

# MongoDB

## To create database
use databaseName
ex: use resume_manager

## To display all database
db

## To create collections
db.createCollection(name)
ex: db.createCollection("users")

## To display all collections
show collections

## To insert the document
db.collectionName.insert(document)
ex:
db.users.insert({
  "username" : "meena",
  "name" : "meena m",
  "password" : "b0489e1d2c75f77f73f36d2b6f7c734d8ddb5418"
})

## To display all documents
db.collectionName.find()
ex:
db.users.find()

## To display the document in a format
db.collectionName.find().pretty()
ex:
db.users.find().pretty()

## To display with condition
db.collectionName.find(queryObj)
ex:
db.users.find({"username":"shwetha"})

## To update the document
db.collectionName.update(queryObj)
ex:
db.users.update({'username':'shwetha'},{$set:{'username':'shwetha s'}})

## To save the document
db.collectionName.save(queryObj)
ex:
db.users.save({"username":"shwetha s","NickName":"gajju"})

## Difference b/w update and save method
The update() method updates the values in the existing document while the save() method replaces the existing document with the document passed in save() method.





