import { Component, OnInit } from '@angular/core';
import { PokemonDialogComponent } from 'src/app/shared/components/pokemon-dialog/pokemon-dialog.component';
import { LimitDefault, ModelPokemon } from 'src/app/shared/services/pokemon/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon/pokemon.service';
import { DialogService, DialogSize } from 'src/app/shared/services/dialog/dialog.service';
import { LoaderService } from 'src/app/shared/services/loading/loading.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, take } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: [PokemonService]
})
export class PokemonListComponent implements OnInit {

  queryParams: { name: string, limit: number } = { name: '', limit: LimitDefault.PokemonList };
  pagination: number[] = [10, 20, 50, 100];

  searchForm!: FormGroup
  constructor(
    public pokemonService: PokemonService,
    private dialogService: DialogService,
    public loader: LoaderService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
      paginator: new FormControl(LimitDefault.PokemonList),
    })
    this.activatedRoute.queryParams.pipe(take(1)).subscribe((params) => {
      if (params['name'] | params['limit']) {
        if (params['name']) {
          this.searchForm.get('search')?.patchValue(params['name']);
          this.pokemonService.search(params['name']);
          return
        };

        if (params['limit']) {
          let _limit = this.pagination.includes(+params['limit']) ? params['limit'] : LimitDefault.PokemonList
          this.pokemonService.initData({ limit: +_limit, offset: 0 });
          this.searchForm.get('paginator')?.patchValue(+_limit);
          return
        };
      } else {
        this.pokemonService.initData({ limit: LimitDefault.PokemonList, offset: 0 });
      }
    });
  }

  ngOnInit(): void {
    this.searchForm.get('search')?.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(200)).subscribe((keyword) => {
        this.pokemonService.search(keyword);
        this.queryParams.name = keyword;
        this.router.navigate(['/pokemon'], { queryParams: this.queryParams });
      });


    this.searchForm.get('paginator')?.valueChanges.subscribe((limit) => {
      if(this.searchForm.get('search')?.value){
        this.pokemonService.search(this.searchForm.get('search')?.value);
        return
      }
      this.pokemonService.paging(limit);
      this.queryParams.limit = limit;
      this.router.navigate(['/pokemon'], { queryParams: this.queryParams });
    })
  };

  openDialog(event: ModelPokemon) {
    if (!event) {
      return
    };

    this.dialogService.open(PokemonDialogComponent, {
      data: event
    }, DialogSize.LARGE).subscribe((result) => { })
  };

  clearSearch() {
    this.searchForm.get('search')?.patchValue('')
  }
}
