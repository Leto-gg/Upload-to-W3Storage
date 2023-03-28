# Verified IPFS Gateway

This repo is dedicated to a Cloudflare workers configuration that acts as a IPFS Gateway that takes an object(10mb max filesize) from a user and uploads it to our Web3.Storage configuration(Users are currently tied to our Web3.Storage account) This is so that user can call the objects they upload from Web3.Storages superfast gateway. 


# New Stuff

# Verified Web3.Storage Upload

The "Verified Web3.Storage Upload" repository provides a simple and efficient way to interact with the Web3.Storage API, allowing users to securely store and retrieve data using the decentralized storage network. By installing this repository, you'll have access to an easy-to-use interface for uploading and managing your data on the Web3.Storage platform.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Reference](#api-reference)
5. [Contributing](#contributing)
6. [License](#license)

## Prerequisites

Before you can use this repository, make sure you have the following:

- A valid Web3.Storage API key, which can be obtained by registering for an account at [https://web3.storage](https://web3.storage)
- Node.js (version 14.0.0 or higher) installed on your system
- Git installed on your system

## Installation

To install the "Verified Web3.Storage Upload" repository, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/username/verified-web3storage-upload.git
```

```bash
Change to the repository directory:
```
```bash
cd verified-web3storage-upload
Install the required dependencies:
```
```bash
npm install
Create a .env file in the root directory and add your Web3.Storage API key:
```
```bash
WEB3_STORAGE_API_KEY=<your_api_key>
```

## Usage
With the "Verified Web3.Storage Upload" repository installed, you can use the API to upload and manage your data on Web3.Storage.

## Uploading a File
To upload a file to Web3.Storage, use the uploadFile function:
```bash
const Web3Storage = require('./src/web3storage');

(async () => {
  const storage = new Web3Storage();
  const filePath = 'path/to/your/file.txt';
  const cid = await storage.uploadFile(filePath);

  console.log(`File uploaded successfully with CID: ${cid}`);
})();

```

## Retrieving a File
To retrieve a file from Web3.Storage, use the getFile function:

```bash

const Web3Storage = require('./src/web3storage');

(async () => {
  const storage = new Web3Storage();
  const cid = 'your_file_cid';
  const outputPath = 'path/to/save/your/file.txt';
  await storage.getFile(cid, outputPath);

  console.log(`File retrieved successfully and saved at: ${outputPath}`);
})();

```
## API Reference
The "Verified Web3.Storage Upload" API includes the following methods:
```bash

uploadFile(filePath): Uploads a file to Web3.Storage and returns its Content Identifier (CID).
getFile(cid, outputPath): Retrieves a file from Web3.Storage using its CID and saves it to the specified output path.
Contributing
We welcome contributions from the community. If you'd like to contribute to the "Verified Web3.Storage Upload" repository, please follow our contribution guidelines.
```
## License
This project is licensed under the MIT License.

rust

Copy and paste the content above into a Markdown file (e.g., `README.md`) to
