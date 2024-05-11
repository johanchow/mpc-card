const fs = require('fs-extra');
const path = require('path');

const packageBPath = path.resolve(__dirname, '../official-common/dist');
const symlinkPath = path.resolve(__dirname, 'node_modules/official-common');

fs.ensureSymlink(packageBPath, symlinkPath, 'junction', (err) => {
  if (err) {
    console.error('Failed to create symlink:', err);
  } else {
    console.log('Symlink created:', symlinkPath, '->', packageBPath);
  }
});
