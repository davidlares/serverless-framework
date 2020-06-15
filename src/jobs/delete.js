const dynamoDB = require('../dynamodb') // instance

module.exports.handler=async(event, context) => {

  const id = event.pathParameters.id;

  try {
    await dynamoDB.delete({
      TableName: process.env.JOBS_TABLE,
      Key: {
        id: id // filter - Item based in ID
      }
    }).promise()
    // return status
    return {
      statusCode: 200,
      body: JSON.stringify({msg: `Job has deleted with id ${id}`})
    }
  } catch(err) {
    return { statusCode: 500, body: JSON.stringify(err)}
  }

  // const jobIndex = jobs.findIndex(j => j.id == event.pathParameters.id)
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     job: jobs[jobIndex]// jobs property
  //   })
  // }
}
