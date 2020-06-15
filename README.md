# Serverless Framework Demo

This repository contains a fully integrated REST API example deployed with the help of the `Serverless Framework` and `AWS DynamoDB` via `lambda` functions.

In complex systems, you can define and divide modules into services so you can create a separate `YAML` file for each service. Each service inside the `Serverless` ecosystem can be considered as an API Endpoint.

The `Serverless Framework` uses an `IaaS` tool called `AWS` called `CloudFormation` which models and sets up your `AWS` resources.

Internally the `CloudFormation` (with instructions of the `serverless.yml`), configures an `S3` Bucket, logs with `CloudWatch` services, and creates an `API Gateway` for production `API endpoints`.

## Dependencies

Check the `package.json` file. There's a lot of dependencies focused on local deployment, this ensures a quicker testing process.

## Local Deployment

The `serverless-offline` package is used for test AWS Lambda functions locally, is a development plugin, basically creates an HTTP Server. Same applies for the `serverless-dynamodb-local`.

Check the script in the `package.json` file under the `dev` script.

Just: `npm run dev`.

## AWS Setup

1. Create an `AWS` Console Account.
2. Create a user with the help of the `IAM Settings`, include the `Programmatic Access` and the `AdministratorAccess` policy.
3. Download the user credentials and configure the local `Serverless` provider. Something like:

`sls config credentials --provider AWS --key [ACCESS_KEY_ID] --secret [ACCESS_SECRET_KEY]`

## AWS Deployment

Simple, just `sls deploy` (you can use `sls` or also use `serverless`).

## Credits

 - [David E Lares](https://twitter.com/davidlares3)

## License

 - [MIT](https://opensource.org/licenses/MIT)
