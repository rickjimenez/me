const functions = require('firebase-functions');
const PDFDocument = require('pdfkit');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const generatePDF = require('./generatePDF');

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());

exports.api = functions.https.onRequest(app);

app.get('/getResume', (req, res) => {
  const { name } = req.query;
  console.log(name);
  const doc = new PDFDocument({ margin: 20 });
  generatePDF(doc, name);
  // Setting response to 'attachment' (download).
  // If you use 'inline' here it will automatically open the PDF
  // res.setHeader('Content-disposition', 'attachment; filename="rickjimenez.pdf"');
  // res.setHeader('Content-type', 'application/pdf');
  doc.pipe(res);
  doc.end();
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
