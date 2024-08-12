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
function renderLicenseLink(license) { }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none"){
    return  '##license'
    


    

  }
  

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
  ${data.installation}


  ## Usage
  ${data.usage}


  ${renderLicenseSection(data.license)}
  
  
  ## Contributing
  ${data.contributing}
  
  
  ## Test
  ${data.test}
  
  
  ## Questions
  If you have any questions about this repo, please contact me directly at ${data.email}. You can find more of my work on github at ${data.userName}

  
  

`;
}

export default generateMarkdown;
