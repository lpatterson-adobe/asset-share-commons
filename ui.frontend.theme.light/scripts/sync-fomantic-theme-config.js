const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const source = path.join(projectRoot, 'semanticui', 'theme.config');
const target = path.join(projectRoot, 'node_modules', 'fomantic-ui-less', 'theme.config');

if (!fs.existsSync(source)) {
  throw new Error(`Missing theme.config at ${source}`);
}

const targetDir = path.dirname(target);
if (!fs.existsSync(targetDir)) {
  throw new Error(`Missing fomantic-ui-less at ${targetDir}`);
}

fs.copyFileSync(source, target);
