import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/loading/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public loader: LoaderService) { };

  ngOnInit(): void { }

}
