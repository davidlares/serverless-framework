const dynamoDB = require('../dynamodb') // instance
const uuid = require('uuid')
const Joi = require('joi')

module.exports.handler=async(event, context) => {

  const data = JSON.parse(event.body) // body params
  const timestamp = new Date().getTime() // unique ID

  // input validations
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    published: Joi.boolean().required(),
  })

  const {error, value} = Joi.validate(data, schema)
  if(error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error.details)
    }
  }

  // insertion params
  const params = {
    TableName: process.env.JOBS_TABLE,
    Item: {
      id: uuid.v1(),
      title: data.title,
      published: data.published,
      createdAt: timestamp,
      updatedAt: timestamp
    }
  };

  // dynamo PUT (for insertion)
  try {
    // curl -i -X POST -H "Content-Type: application/json" -d '{"title": "Exploit Development", "published": false}' http://localhost:3000/dev/jobs
    await dynamoDB.put(params).promise() //converting it to promise
    return {
      statusCode: 200,
      body: JSON.stringify(params.Item)
    }
  } catch(error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    }
  }
}
