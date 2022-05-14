module.exports = {
  // this checks Typescript files
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  // This lints and formats TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': filenames => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // this formats MarkDown and JSON
  '**/*.(md|json)': filenames => `npx prettier --write ${filenames.join(' ')}`,
};
