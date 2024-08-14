// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'none'){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }else{
    return '' // this is saying if there is no license, return an empty string
  }
  }



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { // this is a function that returns the license link to the badge so that the user can click on it and be taken to the license page
  if(license !== 'none'){
    return `[License](#license)` // this is the link to the license badge
  }
  else {
    return '' // this is saying if there is no license, return an empty string  
};
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none"){
    return ` ## License
    This project is license under ${license}. 
    
    
    
    `
  }
  else{
    return ''
  };
}

// TODO: Create a function to generate markdown for README 
function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge(data.license)}

  
  ## Description
  ${data.description}



  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  


  ## Installation
  To install the necessary dependencies, run the following command:
  ${data.installation}


  ## Usage
  What you need to know about using the repo:
  It is important create a branch before making any changes to the main branch. This will help you keep track of your changes and make it easier to merge your changes with the main branch.
  ${data.usage}


  ${renderLicenseSection(data.license)}
  
  
  ## Contributing
  According to github, on learning how to contribute to someones repo, you can use a ${data.contributing}. 
  Here is a link to the github documentation on how to fork and pull request: [Github Documentation](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
  Since this is an open source project, check out the this link on contributor covenant: [Contributor Covenant](https://www.contributor-covenant.org/) This is a code of conduct for open source projects.
  
  ## Test
  To run tests, run the following command:
  ${data.test}
  
  
  ## Questions
  If you have any questions about this repo, please contact me directly at ${data.email}. You can find more of my work on github at [${data.userName}](https://github.com/marquel12/Readme-Generator-) 
  
  

`;
}

export default generateMarkdown;
