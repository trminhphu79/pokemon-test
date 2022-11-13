import { ModelNameUrl } from "../model/model-name-url";

export interface IGenneration {
  id: number,
  name: string,
  abilities: Array<any>,
  main_region: ModelNameUrl,
  moves: ModelNameUrl,
  names: ModelNameUrl[],
  pokemon_species: ModelNameUrl[],
  types: ModelNameUrl[],
  version_groups: ModelNameUrl[],
}