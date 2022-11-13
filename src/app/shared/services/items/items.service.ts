import { Injectable } from "@angular/core";
import { BaseService } from "../api/base-api.service";
import { HttpClient } from '@angular/common/http';
import { ModelItem } from "./item.model";
import { BehaviorSubject, switchMap, forkJoin, map, Observable } from "rxjs";
import { ModelPokemon } from "../pokemon/pokemon.model";
import { ModelNameUrl } from "../model/model-name-url";
import { Endpoint } from "../api/resource";
import { ModelCard } from "../model/card.model";
import { CoreStateService } from "../state.service";
import { ItemsApi } from "../api/items-api.service";

interface ItemState {
  items: ModelCard[]
}
const initialState: ItemState = {
  items: []
}

@Injectable({ providedIn: 'root' })
export class ItemsService extends CoreStateService<ItemState>{

  items$: Observable<ModelCard[]> = this.select(state => state.items);

  constructor(private itemsApi: ItemsApi) {
    super(initialState);
    this.itemsApi.getDataFormat().subscribe((response) => {
      this.setState({
        items: response
      });
    });
  };
  
}