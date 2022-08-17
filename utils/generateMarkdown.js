// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  ## Description:
  ${data.description}
  ## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Installation:  

  ${data.installation}
  
  ## Usage:
  
  ${data.usage}
  

  ## License:

  ${data.license}

  ## Contributing:

  ${data.contibution}

  ## Testing:

  In order to test run ${data.test} in the GitBash terminal

  ## Questions:
  
  In you have any questions contact me on [Github](https://github.com/${data.username})
  or by email at ${data.email}
  `;
}

module.exports = generateMarkdown;
