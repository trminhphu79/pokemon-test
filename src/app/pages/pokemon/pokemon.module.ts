import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/components/material/material.module';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
];

@NgModule({
  declarations: [
    PokemonListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class PokemonModule { }
