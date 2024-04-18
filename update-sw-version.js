// update-sw-version.js

const fs = require('fs');

// Get the commit hash from command line arguments
const commitHash = process.argv[2];
const version = `v${commitHash.substring(0, 8)}`; // Use the first 8 characters of the commit hash as the version

const swFilePath = './public/sw.js'; // Specify the path to your service worker file

fs.readFile(swFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading service worker file:', err);
    return;
  }

  // Replace a placeholder with the version number
  const updatedData = data.replace(/const VERSION = '.*';/, `const VERSION = '${version}';`);

  // Write the updated content back to the service worker file
  fs.writeFile(swFilePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to service worker file:', err);
      return;
    }
    console.log('Service worker version updated successfully.');
  });
});
