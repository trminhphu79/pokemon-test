import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';


import SwiperCore, { Pagination, Navigation, SwiperOptions } from "swiper";
import { UtilService } from '../../services/util.service';
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'pokemon-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class CarouselComponent implements OnInit {
  videoUrls = [
    'https://www.youtube.com/watch?v=D0zYJ1RQ-fs',
    "https://www.youtube.com/watch?v=1roy4o4tqQM",
    "https://www.youtube.com/watch?v=bILE5BEyhdo",
    "https://www.youtube.com/watch?v=uBYORdr_TY8"
  ];

  @ViewChild('videoPlayer') videoplayer: any;
  videoIds: string[] = []
  config: SwiperOptions = {
    pagination: {
      clickable: true,
    },
    navigation: true,
    loop: true,
    breakpoints: {
      '480': {
        slidesPerView: 1,
        spaceBetween: 12
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 20
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 12
      }
    }
  }
  constructor(private utilService: UtilService) {
    this.videoIds = this.utilService.getYoutubeIdByUrls(this.videoUrls);
  }

  ngOnInit(): void {
  }
}
