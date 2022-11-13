export interface ModelMenu {
  name: string,
  sub?: Array<{ name: string }>,
  path:string
}
export enum MenuName {
  Home = "Home",
  Games = "Game / Games version",
  Generations = "Generations",
  Locations = "Locations",
  Items = "Items"
};


export const DefaultMenu = [
  {
    name: "Home",
    path: "home"
  },
  {
    name: "Game / Games version",
    path: 'games'
  },
  {
    name: "Generations",
    path: 'generations'
  },
  {
    name: "Locations",
    path: 'locations'
  },
  {
    name: "Items",
    path: 'items'
  },
]