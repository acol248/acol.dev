import { strapiRequest } from "./strapi";

// types
import type { Project } from "../types/projects";

/**
 * Fetches all projects from the Strapi API
 * 
 * @returns projects data array
 */
export default async function getProjects() {
  const data = await strapiRequest<Array<Project>>("/projects");

  return data;
}
