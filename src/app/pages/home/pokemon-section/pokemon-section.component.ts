import { Component, OnInit } from '@angular/core';
import { DialogService, DialogSize } from 'src/app/shared/services/dialog/dialog.service';
import { LoaderService } from 'src/app/shared/services/loading/loading.service';
import { ModelPokemon } from 'src/app/shared/services/pokemon/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon/pokemon.service';
import { PokemonDialogComponent } from '../../../shared/components/pokemon-dialog/pokemon-dialog.component';

@Component({
  selector: 'pokemon-section',
  templateUrl: './pokemon-section.component.html',
  styleUrls: ['./pokemon-section.component.scss'],
  providers: [PokemonService]
})
export class PokemonSectionComponent implements OnInit {

  constructor(public pokemonService: PokemonService, public dialogService: DialogService,public loader: LoaderService) {
    this.pokemonService.initData();
  }

  ngOnInit(): void {}

  change(event: ModelPokemon) {
    if (!event) {
      return
    };

    this.dialogService.open(PokemonDialogComponent, {
      data: event
    }, DialogSize.LARGE).subscribe((result) => { })
  }
}
