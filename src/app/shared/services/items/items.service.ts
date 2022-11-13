import { Injectable } from "@angular/core";
import {  Observable } from "rxjs";
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