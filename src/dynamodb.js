const AWS = require('aws-sdk')

let options = {}

// offline settings
if (process.env.IS_OFFLINE) {
  options.region = 'localhost',
  options.endpoint = "http://localhost:8000/"
}

// new instance
const dynamoDB = new AWS.DynamoDB.DocumentClient(options)

module.exports = dynamoDB
