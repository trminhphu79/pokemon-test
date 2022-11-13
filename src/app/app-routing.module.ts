import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './pages/games/games.component';
import { GenerationsComponent } from './pages/generations/generations.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ItemsComponent } from './pages/items/items.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: "pokemon",
    loadChildren: () => import('./pages/pokemon/pokemon.module').then((m) => m.PokemonModule)
  },
  { path: "games", component: GamesComponent },
  { path: "locations", component: LocationsComponent },
  { path: "generations", component: GenerationsComponent },
  { path: "items", component: ItemsComponent },

  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
