
const express = require('express');
const { Web3Storage } = require('web3.storage');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);
require('dotenv').config();
// Hazardous Past... 
const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.WEB3_STORAGE_API_KEY;

const storage = new Web3Storage({ token: apiKey });
const upload = multer({ dest: 'uploads/' });

app.use(express.json());

// API endpoint to upload a file
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { path: filePath, originalname } = req.file;
    const file = await Web3Storage.fromFile(fs.createReadStream(filePath), {
      path: originalname,
    });
    const cid = await storage.put([file]);

    // Remove the temporary file
    await unlinkAsync(filePath);

    res.json({ success: true, cid });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ success: false, message: 'Error uploading file' });
  }
});

// API endpoint to retrieve a file
app.get('/download/:cid', async (req, res) => {
  try {
    const { cid } = req.params;
    const files = await storage.get(cid);

    if (files) {
      const [file] = files;
      res.setHeader('Content-Disposition', `attachment; filename=${file.name}`);
      res.setHeader('Content-Type', file.type);
      res.send(file.content);
    } else {
      res.status(404).json({ success: false, message: 'File not found' });
    }
  } catch (error) {
    console.error('Error retrieving file:', error);
    res.status(500).json({ success: false, message: 'Error retrieving file' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
