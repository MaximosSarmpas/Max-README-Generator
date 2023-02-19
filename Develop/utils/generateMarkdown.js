// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT License'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  
  }else if(license === 'The Unlicense'){
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  
  }else if(license === 'Apache License 2.0'){
    '[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)'
  }}


    // TODO: Create a function that returns the license link
// If there is no license, return an empty string

  function renderLicenseLink(license) {
    if(license === 'no license'){
      return '';
    }else{
      return '\n- [License](#license)'
    }
    
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if (license) {
    return `## License\nThis product is under the ${license}.\n`
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;
  let licenseName = "";
  let badge = "";
  
  if(license === "None")
    licenseName = "This project has no license";
  else{
    licenseName = "This project is licensed under the "+license;
    
    switch(license){
      case "MIT License" : 
  
        badge = "https://img.shields.io/badge/license-MIT-green";
        break;

      case "Apache License 2.0" : 
        
        badge = "https://img.shields.io/badge/license-Apache--2.0-blue";
        break;

      case "GNU General Public License 3.0" : 
        
        badge = "https://img.shields.io/badge/license-GPL%203.0-blue";
        break;

      

      default :
        badge = "https://img.shields.io/badge/license-MIT-green";
    }
  }
  

  return `# ${data.title}
![Github License](${badge})


## Table of Contents

[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.test}

## Contributing
${data.contributing}



## Questions
https://github.com/${data.github} 
Contact me at: ${data.email}`
}

module.exports = generateMarkdown;

