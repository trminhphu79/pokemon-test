import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonLayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { SharedModule } from './shared/components/shared.module';
import { LoadingInterceptor } from './shared/services/loading/loading.interceptor';
import { GamesComponent } from './pages/games/games.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { ItemsComponent } from './pages/items/items.component';
import { GenerationsComponent } from './pages/generations/generations.component';
import { MaterialModule } from './shared/components/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    LocationsComponent,
    ItemsComponent,
    GenerationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokemonLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
