const dynamoDB = require('../dynamodb') // instance
const uuid = require('uuid')
const Joi = require('joi')

module.exports.handler=async(event, context) => {

  const data = JSON.parse(event.body) // body params
  const timestamp = new Date().getTime() // unique ID

  // getting the ID
  const id = event.pathParameters.id;

  // input validations
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    published: Joi.boolean().required(),
  })

  const {error, value} = Joi.validate(data, schema)
  if(error) {
    return {
      statusCode: 400,
      body: JSON.stringify(err.details)
    }
  }

  // insertion params
  const params = {
    TableName: process.env.JOBS_TABLE,
    Key: {
      id: id
    },
    UpdateExpression:
      'SET title = :title, published = :published, updatedAt = :updatedAt',
    AttributeExpressionValues: {
      ':title': data.title,
      ':published': data.published,
      ':updatedAt': timestamp
    },
    ReturnValues: 'ALL_NEW'
  };

  // dynamo PUT (for insertion)
  try {
    const results = await dynamoDB.update(params).promise() //converting it to promise
    return {
      statusCode: 200,
      body: JSON.stringify(results.Attributes)
    }
  } catch(error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    }
  }
}
