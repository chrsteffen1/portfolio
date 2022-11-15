import { projects } from "../data/projects";
import { hyphenate } from "./hyphenateWords";

export const findProject = (str) => {
  let project = projects.filter(projects => hyphenate(projects.title) === str)
  return project[0]  
}
