const dotenv = require("dotenv")
dotenv.config()
const MongoClient = require("mongodb").MongoClient

MongoClient.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
  if (err) {
    console.log(err)
  }
  module.exports = client
  const app = require("./app")
  app.listen(process.env.PORT)
})
