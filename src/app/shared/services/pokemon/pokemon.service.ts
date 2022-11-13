import { Injectable } from "@angular/core";
import { Observable, take, timer } from 'rxjs';
import { ModelCard } from "../model/card.model";
import { PokemonsApi } from "../api/pokemons-api.service";
import { CoreStateService } from "../state.service";
import { UtilService } from "../util.service";
import { LimitDefault } from "./pokemon.model";

interface PokemonState {
  pokemons: ModelCard[],
  offset: number,
  loading: boolean,
  emptyData: boolean
};

const initialState: PokemonState = {
  pokemons: [],
  offset: 0,
  loading: false,
  emptyData: false
}

@Injectable()
export class PokemonService extends CoreStateService<PokemonState> {

  pokemons$: Observable<ModelCard[]> = this.select((state) => state.pokemons);

  loading$: Observable<boolean> = this.select((state) => state.loading);

  emptyData$: Observable<boolean> = this.select((state) => state.emptyData);

  constructor(
    private pokemonsApi: PokemonsApi,
    private utilService: UtilService,
  ) {
    super(initialState);
  };

  search(keyword: string) {

    this.setLoading(true);
    let _keyword = this.utilService.removeVietnameseTones(keyword)
    let item = this.state.pokemons.filter((item) => item.name === _keyword);
    if (item.length) {
      timer(333).pipe(take(1)).subscribe(() => {
        this.setState({
          pokemons: item,
          loading: false,
          emptyData: false
        });
      });
    } else {
      if (!keyword) {
        this.initData({ limit: LimitDefault.PokemonList, offset: 0 });
      } else {
        this.pokemonsApi.retrieve(_keyword).subscribe((response: any) => {
          let pokemon = {
            name: response.name,
            image: response.sprites['other']['official-artwork']['front_default'],
            id: response.id,
            weight: response.weight,
            height: response.height,
            base_experience: response.base_experience,
          };
          this.setState({
            pokemons: [pokemon],
            loading: false,
            emptyData: false
          });
        }, (err) => {
          this.setState({
            pokemons: [],
            loading: false,
            emptyData: true
          });
        });
      }
    }
  };

  paging(limit: number) {
    this.setLoading(true);
    if (limit > this.state.offset) {
      this.pokemonsApi.getDataFormat({ limit: limit - this.state.offset, offset: this.state.offset }).subscribe((response) => {
        let _newPokemons = []
        _newPokemons = [
          ...this.state.pokemons,
          ...response
        ]
        this.setState({
          pokemons: _newPokemons,
          offset: limit,
          loading: false,
          emptyData: false
        });
      })
    } else if (limit < this.state.offset) {
      let _newPokemons = this.state.pokemons.slice(0, limit);
      timer(333).pipe(take(1)).subscribe(() => {
        this.setState({
          pokemons: _newPokemons,
          offset: limit,
          loading: false,
          emptyData: false
        });
      })
    }
  };

  initData(params: { limit: number, offset?: number } = { limit: LimitDefault.PokemonSelect, offset: 0 }) {
    this.pokemonsApi.getDataFormat(params).subscribe((response) => {
      this.setState({
        pokemons: response,
        offset: params.limit,
        loading: false,
        emptyData: false
      });
    })
  };

  setLoading(loading: boolean) {
    this.setState({ loading: loading })
  }
}