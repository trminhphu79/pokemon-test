export interface ModelPokemon {
  name: string,
  image: string,
  type?: string,
  id: number,
  height?:number,
  weight?:number,
  base_experience?:number,
  sprites:any
}
export enum LimitDefault {
  PokemonSelect = 10,
  PokemonList = 20,
}