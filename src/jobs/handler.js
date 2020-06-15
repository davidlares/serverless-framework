// lambda function (event | context)
module.exports.handler=async (event, context) => {

  console.log(event) // event information
  console.log('context', context) // information of the lambda function

  return {
    statusCode: 200,
    body: JSON.stringify({
      "message": "Nodejs dev",
      event
    })
  }
}
