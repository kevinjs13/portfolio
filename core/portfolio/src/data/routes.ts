export enum Paths {
  HOME = "/",
  DESIGN = "/design",
  DEVELOPMENT = "/development",
  PERSONAL = "/personal",
}

export const NavigationItems = [
  { id: 1, name: `Home`, link: `home`, path: Paths.HOME },
  { id: 2, name: `Design`, link: `/design`, path: Paths.DESIGN },
  { id: 3, name: `Development`, link: `development`, path: Paths.DEVELOPMENT },
  { id: 4, name: `Personal`, link: `personal`, path: Paths.PERSONAL },
];
