const fs = require('fs');

describe('Component text file is the same as js', () => {
  test('BasicButton', () => {
    expect(fs.readFileSync('./src/pubComponents/buttons/BasicButton.js')).toEqual(
      fs.readFileSync('./src/pubComponents/buttons/BasicButton.txt'),
    );
  });

  test('HorizontalProgress', () => {
    expect(fs.readFileSync('./src/pubComponents/progress/HorizontalProgress.js')).toEqual(
      fs.readFileSync('./src/pubComponents/progress/HorizontalProgress.txt'),
    );
  });

  test('HeaderUnderline', () => {
    expect(fs.readFileSync('./src/pubComponents/text/HeaderUnderline.js')).toEqual(
      fs.readFileSync('./src/pubComponents/text/HeaderUnderline.txt'),
    );
  });
});
