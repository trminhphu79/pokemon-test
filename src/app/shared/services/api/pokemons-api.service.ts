import { Injectable } from '@angular/core';
import { ModelNameUrl } from '../model/model-name-url';
import { BaseService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { Endpoint } from './resource';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { ModelPokemon } from '../pokemon/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonsApi extends BaseService<ModelNameUrl>{
  constructor(http: HttpClient) {
    super(http);
    this.baseUrl = Endpoint.URL + "pokemon"
  };

  getDataFormat(params: { limit?: number, offset?: number } = { limit: 10, offset: 0 }) {
    return this.getAll(params).pipe(switchMap((response) => {
      let request$: Array<Observable<any>> = [];
      if (response.results.length > 0) {
        response.results.forEach((pokemon) => {
          if (pokemon && pokemon.name) {
            request$.push(this.retrieve(pokemon.name));
          }
        });
      };
      return forkJoin(request$).pipe(map((results) => {
        return results.map((pokemon: ModelPokemon) => {
          return {
            name: pokemon.name,
            image: pokemon.sprites['other']['official-artwork']['front_default'],
            id: pokemon.id,
            weight: pokemon.weight,
            height: pokemon.height,
            base_experience: pokemon.base_experience,
          }
        });
      }))
    }))
  };
}