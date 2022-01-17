var fs = require('fs');
var text = fs.readFileSync('./src/pubComponents/ProgtoConvert.js', 'utf-8');
fs.writeFile('./src/pubComponents/ProgtoConvert.txt', text, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
