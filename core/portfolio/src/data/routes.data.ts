export enum Paths {
  ABOUT_ME = "/",
  PROJECTS = "/projects",
  RESUME = "../assets/files/resume.pdf",
}

export const NavigationItems: {
  name: string;
  path: Paths;
  type: "file" | "nav-link";
}[] = [
  { name: `About Me`, path: Paths.ABOUT_ME, type: "nav-link" },
  { name: `Projects`, path: Paths.PROJECTS, type: "nav-link" },
  { name: `Resume`, path: Paths.RESUME, type: "file" },
];
