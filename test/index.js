const Mocha = require('mocha');
const glob = require('glob');
const path = require('path');

// Create a new Mocha instance
const mocha = new Mocha();

// Get all test files and add them to Mocha
const testFiles = glob.sync('**/*.test.js', { cwd: __dirname });
testFiles.forEach(file => mocha.addFile(path.join(__dirname, file)));

// Run the tests
mocha.run(failures => {
  process.exitCode = failures ? 1 : 0;
});
