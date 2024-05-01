// logo title hover change to korean text
function mouseOver(element) {
  element.innerText = "코니";
}

// logo title nohover change to english text
function mouseOut(element) {
  element.innerText = "cone";
}

/* ------------------------------------------------------------------------- */


// new class for the projects
class Project {
  constructor(projectTitle, projectYear, projectDescription, projectMedia, projectAlt) {
      this.title = projectTitle;
      this.year =  projectYear;
      this.description = projectDescription;
      this.media = projectMedia;
      this.altText = projectAlt;
}
}

let projectsArray = [];

//need to iterate all the objects in the set
for (const work of projectsAll) {
  let projectTitle = work["title"];
  let projectYear = work["year"];
  let projectDescription = work["text"];
  let projectMedia = work["mediaFile"];
  let projectAlt = work["alt"];

  const project = new Project(projectTitle, projectYear, projectDescription, projectMedia, projectAlt);
  projectsArray.push(project);
}


for (const project of projectsArray) {
  // console.log(projectsArray);
  createElement(project);
}

function createElement(project){
  //find the html element that can be the new template 
  const template = document.querySelector("#projectPages");
  const clone = template.content.cloneNode(true);

  //clone that specific class
  project.element = clone.querySelector(".projectInfo");

  //add them to the div class
  const projectListElement = document.querySelector(".projectContainer");
  projectListElement.append(project.element);

  //and udpate the elements within this cloned/template with new properties
  updateElement(project);
}

//function to update each element in the template
function updateElement(project) {
  //updating each element
  
  const projectTitleElement = project.element.querySelector(".projectTitle");
  const projectYearElement = project.element.querySelector(".projectYear");
  const projectTextElement = project.element.querySelector(".projectDescription");

  const projectMediaElement = project.element.querySelector(".projectMedia");
  const projectAltElement = project.element.querySelector(".projectMedia");

  //assigning each elements to the respective project
  
  projectTitleElement.innerText = project.title;
  projectYearElement.innerText = project.year;
  projectTextElement.innerText = project.text;

  projectMediaElement.src = project.media;
  projectAltElement.alt = project.altText;
}
