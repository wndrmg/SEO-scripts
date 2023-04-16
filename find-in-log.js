const fs = require('fs');
const readline = require('readline');

// Путь к лог-файлу
const logFilePath = 'input.txt';

// Путь к файлу, в который будут записываться результаты поиска
const outputFilePath = 'output-search.txt';

const writeStream = fs.createWriteStream(outputFilePath);

const readStream = fs.createReadStream(logFilePath);
const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity
});

// Искать слово "bing" в каждой строке из log-файла и записать результаты в новый файл
rl.on('line', (line) => {
  if (line.includes('bing')) {
    writeStream.write(line + '\n');
  }
});

rl.on('error', (err) => {
  console.error(err);
});

rl.on('close', () => {
  console.log('Поиск завершен');
  writeStream.end(() => {
    console.log('Результаты сохранены в файл', outputFilePath);
  });
});