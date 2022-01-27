const fs = require('fs');
const folder = './src/pubComponents/';

const handleFile = (file) => {
  const filename = file.substring(0, file.length - 3);
  var text = fs.readFileSync(`./src/pubComponents/${filename}.js`, 'utf-8');

  fs.writeFile(`./src/pubComponents/${filename}.txt`, text, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

fs.readdirSync(folder)
  .filter((x) => x.endsWith('.js'))
  .forEach((file) => {
    handleFile(file);
  });
