var fs = require('fs');
var text = fs.readFileSync('./src/pubComponents/HorizontalProgress.js', 'utf-8');
fs.writeFile('./src/pubComponents/HorizontalProgress.txt', text, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

var vtext = fs.readFileSync('./src/pubComponents/VerticalProgress.js', 'utf-8');
fs.writeFile('./src/pubComponents/VerticalProgress.txt', vtext, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
