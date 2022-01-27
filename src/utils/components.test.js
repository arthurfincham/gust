const fs = require('fs');

describe('Component text file is the same as js', () => {
  test('BasicButton', () => {
    expect(fs.readFileSync('./src/pubComponents/BasicButton.js')).toEqual(fs.readFileSync('./src/pubComponents/BasicButton.txt'));
  });

  test('HorizontalProgress', () => {
    expect(fs.readFileSync('./src/pubComponents/HorizontalProgress.js')).toEqual(fs.readFileSync('./src/pubComponents/HorizontalProgress.txt'));
  });

  test('HeaderUnderline', () => {
    expect(fs.readFileSync('./src/pubComponents/HeaderUnderline.js')).toEqual(fs.readFileSync('./src/pubComponents/HeaderUnderline.txt'));
  });
});
