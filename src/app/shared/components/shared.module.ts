import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { CarouselComponent } from "./carousel/carousel.component";
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { SwiperModule } from 'swiper/angular';
import { PokemonDialogComponent } from './pokemon-dialog/pokemon-dialog.component';
import { CardItemComponent } from './card-item/card-item.component';
import { SearchInputComponent } from "./search-input/search-input.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PaginatorComponent } from './paginator/paginator.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContentLoaderComponent } from "./content-loader/content-loader.component";
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [
    CarouselComponent,
    YoutubePlayerComponent,
    PokemonDialogComponent,
    CardItemComponent,
    SearchInputComponent,
    PaginatorComponent,
    ScrollToTopComponent,
    PageNotFoundComponent,
    ContentLoaderComponent
  ],
  providers: [],
  imports: [
    YouTubePlayerModule,
    CommonModule,
    SwiperModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' }),

  ],
  exports: [
    CarouselComponent,
    PokemonDialogComponent,
    CardItemComponent,
    SearchInputComponent,
    PaginatorComponent,
    ScrollToTopComponent,
    PageNotFoundComponent,
    ContentLoaderComponent
  ]
})
export class SharedModule {
  constructor() { }
}