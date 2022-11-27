export enum Paths {
  HOME = "/home",
  PROJECTS = "/projects",
  PERSONAL = "/personal",
}

export const NavigationItems = [
  { id: 1, name: `Home`, link: `/home`, path: Paths.HOME },
  { id: 2, name: `Projects`, link: `/projects`, path: Paths.PROJECTS },
  { id: 4, name: `Personal`, link: `/personal`, path: Paths.PERSONAL },
];
