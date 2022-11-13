import { Injectable } from "@angular/core";
import { BaseService } from "./base-api.service";
import { HttpClient } from '@angular/common/http';
import { switchMap, forkJoin, map, Observable } from "rxjs";
import { ModelNameUrl } from "../model/model-name-url";
import { ModelItem } from "../items/item.model";
import { Endpoint } from "./resource";

@Injectable({ providedIn: 'root' })
export class ItemsApi extends BaseService<ModelNameUrl> {
  constructor(http: HttpClient) {
    super(http);
    this.baseUrl = Endpoint.URL + "item"
  };

  getDataFormat(params: { limit: number, offset: number } = { limit: 10, offset: 0 }) {
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
        return results.map((pokemon: ModelItem) => {
          return {
            name: pokemon.name,
            image: pokemon.sprites['default'],
            id: pokemon.id,
          }
        });
      }))
    }))
  }
}