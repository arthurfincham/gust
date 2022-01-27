const fs = require('fs');
const folder = './src/pubComponents/';

const handleFile = (subFolder, file) => {
  const filename = file.substring(0, file.length - 3);
  var text = fs.readFileSync(`./src/pubComponents/${subFolder}/${filename}.js`, 'utf-8');

  fs.writeFile(`./src/pubComponents/${subFolder}/${filename}.txt`, text, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

const dontConvert = ['Buttons.js', 'Cards.js', 'DataDisplay.js', 'Forms.js', 'Lists.js', 'Progress.js', 'Text.js', 'Timeline.js', 'Waves.js'];

fs.readdirSync(folder)
  .filter((x) => x !== 'AllComponents.js')
  .forEach((subFolder) => {
    fs.readdirSync(`${folder}${subFolder}/`)
      .filter((x) => x.endsWith('.js'))
      .filter((x) => !dontConvert.includes(x))
      .forEach((file) => {
        handleFile(subFolder, file);
      });
  });
