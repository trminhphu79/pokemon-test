import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelMenu } from 'src/app/shared/services/menu/menu.model';
import { MenuService } from 'src/app/shared/services/menu/menu.service';

@Component({
  selector: 'pokemon-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() responsive: boolean = false
  constructor(public menuService: MenuService,private router:Router) {
    this.menuService.getMenus();
  }

  ngOnInit(): void { }

  newPage(item:ModelMenu){
    if(!item.path){
      return;
    }
    this.router.navigate([`${item.path}`])
  }
}
