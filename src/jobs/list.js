const dynamoDB = require('../dynamodb')

// const jobs = [{id: 1, title: "NodeJS Developer"},{id: 2, title: "Python Developer"}]

module.exports.handler=async(event, context) => {
  // fetching all records
  try {
    const results = await dynamoDB.scan({
      TableName: process.env.JOBS_TABLE
    }).promise()

    // return data
    return {
      statusCode: 200,
      body: JSON.stringify(results)
    }
  } catch(err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    }
  }

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     jobs // jobs property
  //   })
  // }
}
