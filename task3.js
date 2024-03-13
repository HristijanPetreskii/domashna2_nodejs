const fs = require('fs');



function readData() {
  fs.readFile('task2.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('File content:', data);
    }
  });
}


fs.watch('task2.txt', (event, filename) => {
  if (filename) {
    console.log(`fajlot ${filename} e promenet`);
    readData();
  }
});


readData();
