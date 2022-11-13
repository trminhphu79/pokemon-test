import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { PokemonSectionComponent } from './pokemon-section/pokemon-section.component';

import { ItemSectionComponent } from './item-section/item-section.component';
import { MaterialModule } from './../../shared/components/material/material.module';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    PokemonSectionComponent,
    ItemSectionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule
  ],
  exports: [RouterModule]
})
export class HomeModule { }
