// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return '';
  }
  const badge = {
    'Boost': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    'Eclipse': '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Mozilla': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  return badge[license] || '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license){
    return '';
  }
  const links = {
    'Boost': 'https://opensource.org/license/BSD-3-Clause',
    'Eclipse': 'https://opensource.org/license/EPL-1.0',
    'MIT': 'https://opensource.org/license/MIT',
    'Mozilla': 'https://opensource.org/license/MPL-2.0'
  }
    return links[license] || '';
  }
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  const link = renderLicenseLink(license);
  return `[${license}](${link}) license is covering this project.`;
}   
  // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${renderLicenseSection(data.license)}

## Questions
If you have any questions, please reach out to me on [GitHub](https://github.com/${data.github}) or via email at ${data.email}.
`;
}

export default generateMarkdown;
