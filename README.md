

# A simple project purposed to integrate to S3 bucket for upload and fetch files.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Permissions](#permissions)

## Installation

To install all dependencies, navigate to root directory and run npm install

## Features

The project contains two main features:

* upload a file to S3 Bucket by given the right permissions, credentials and relevant parameters.
* fetch a file from S3 Bucket by given the right permissons, credentials and relevant paremeters.

## Usage

### Uploading a File to S3 Bucket

To upload a file to the S3 bucket, use the following REST API method:

**POST** `http://localhost:3000/api/upload`

**Request Body:**
JSON
{
    "bucketName": "<your bucket name>",
    "filePath": "<your file path>"
}

Replace <your bucket name> with the name of your S3 bucket and <your file path> with the path of the file you want to upload.
The file must be stored in the files folder in order to read it's directory name and path correctly.

### Fetching a File from S3 Bucket

To fetch a file from S3 bucket, use the following REST API method:

**POST** `http://localhost:3000/api/fetch`

**Request Body:**
JSON
{
    "bucketName": "<your bucket name>",
    "fileName": "<your file name>"
}

Replace <your bucket name> with the name of your S3 bucket and <your file name> with the name of the file you want to fetch.


## Permissions

### Setting Up AWS IAM User and Permissions

To interact with your S3 bucket from the application, you need to create an IAM user in AWS and assign the following policy to it. This policy grants the user the minimum necessary permissions to upload and fetch files from the specified S3 bucket.

#### IAM Policy

Create a new IAM policy with the following JSON:

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject"
      ],
      "Resource": [
        "arn:aws:s3:::YOUR_BUCKET_NAME/*"
      ]
    }
  ]
}

Replace `YOUR_BUCKET_NAME` with the name of your S3 bucket.

#### Creating an IAM User

1. **Navigate to IAM in the AWS Management Console:**
   - Go to [AWS IAM Console](https://console.aws.amazon.com/iam/).
   
2. **Create a New IAM User:**
   - Click on **Users** in the left sidebar.
   - Click on **Add user**.
   - Enter a username (e.g., `s3-api-user`) and select **Programmatic access** for Access type.
   - Click **Next: Permissions**.

3. **Attach the Policy:**
   - Choose **Attach policies directly**.
   - Search for the policy you created (e.g., `S3ReadWritePolicy`).
   - Select the policy and click **Next: Tags** and **Next: Review**.

4. **Review and Create the User:**
   - Review the details and click **Create user**.
   - Note down the **Access key ID** and **Secret access key**. You'll need these credentials in your application's configuration.

#### Using IAM Credentials in Your Application

Ensure that your application securely stores and uses the IAM user's **Access key ID** and **Secret access key**. Avoid hardcoding these credentials in your source code or sharing them publicly.
The Access Key ID and Secret Access Key must be stored in .env file along with the region of the resource, e.g:

AWS_ACCESS_KEY_ID=YOUR ACCESS KEY ID
AWS_SECRET_ACCESS_KEY=YOUR AWS SECRET KEY
AWS_REGION=YOUR AWS RESOURCE REGION


### Security Considerations

- **Least Privilege Principle:** Grant only the necessary permissions (`s3:PutObject`, `s3:GetObject`) and restrict access to specific resources (`arn:aws:s3:::YOUR_BUCKET_NAME/*`).
- **Credential Management:** Securely manage and rotate IAM user credentials to maintain security best practices.





