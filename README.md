# cypress.io
Cypress.io training  
npm install cypress
npm install typescript

.\node_modules\.bin\cypress open  

# type script quick start
# windows command
npm init -y
npm i cypress typescript --force
npx tsc --init --types cypress --lib dom,es6
echo {} > cypress.json
package.json
  "scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  },

npm run cypress:open
.\node_modules\.bin\cypress.cmd install --force

# testing-library
npm i cypress @testing-library/cypress
Add this line to your project's cypress/support/commands.js:
import '@testing-library/cypress/add-commands';
