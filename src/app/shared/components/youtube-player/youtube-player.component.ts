import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit {
  @ViewChild('player') player: any;
  @Input() videoId: string = '';

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  onReady() {
    this.player.mute();
    this.player.stopVideo();
  }

  onPlayerReady(event: any) {
    event.target.playVideo();
  }
}
