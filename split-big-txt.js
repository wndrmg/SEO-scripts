const fs = require('fs');

const inputFile = 'input.txt';
const outputFile1 = 'output1.txt';
const outputFile2 = 'output2.txt';

const readStream = fs.createReadStream(inputFile, 'utf8');
const writeStream1 = fs.createWriteStream(outputFile1);
const writeStream2 = fs.createWriteStream(outputFile2);

let chunkCount = 0;
let totalSize = 0;

readStream.on('data', (chunk) => {
  chunkCount++;
  totalSize += chunk.length;

  const writeStream = chunkCount % 2 === 0 ? writeStream2 : writeStream1;

  writeStream.write(chunk);
});

readStream.on('end', () => {
  writeStream1.end();
  writeStream2.end();
  console.log(`Файл ${inputFile} разделен на ${outputFile1} и ${outputFile2}.`);
});