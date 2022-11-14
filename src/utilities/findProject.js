import { projects } from "../data/projects";
import { hyphenate } from "./hyphenateWords";

export const findProject = (str) => {
  let project = projects.filter(projects => hyphenate(projects.title) === str)
  return project[0]
  // console.log(project)

  
}


//map over projects to get each project
// project.title hyphenate to get url path
//filter by url path to get project
//display project data

//for loop 
//projects.filter(project => project[i].title === hyphenate(str))