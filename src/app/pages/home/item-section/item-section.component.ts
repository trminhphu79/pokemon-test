import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/shared/services/items/items.service';
import { LoaderService } from 'src/app/shared/services/loading/loading.service';

@Component({
  selector: 'item-section',
  templateUrl: './item-section.component.html',
  styleUrls: ['./item-section.component.scss']
})
export class ItemSectionComponent implements OnInit {

  constructor(public itemsService: ItemsService,public loader: LoaderService) {
  }

  ngOnInit(): void {
  }
}
