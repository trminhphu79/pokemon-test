import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu/menu.service';

@Component({
  selector: 'pokemon-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() responsive: boolean = false
  constructor(public menuService: MenuService) {
    this.menuService.getMenus();
  }

  ngOnInit(): void { }

}
