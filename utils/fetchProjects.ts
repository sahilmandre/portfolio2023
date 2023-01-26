import { Project } from "../typing";

export const fetchProjects = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );

  const data = await response.json();
  const projects: Project[] = data.projects;

  console.log(projects);

  return projects;
};
