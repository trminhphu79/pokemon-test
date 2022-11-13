import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { VersionService } from "../games/versions.service";
import { BaseService } from "../api/base-api.service";
import { GenerationService } from "../games/generation.service";
import { DefaultMenu, MenuName, ModelMenu } from "./menu.model";
import { BehaviorSubject, forkJoin } from "rxjs";

@Injectable({ providedIn: 'root' })
export class MenuService extends BaseService<any>{

  private _menuItems$ = new BehaviorSubject<ModelMenu[]>([]);
  public readonly menuItems$ = this._menuItems$.asObservable();

  constructor(http: HttpClient,
    private versionService: VersionService,
    private generationService: GenerationService,
  ) {
    super(http);
  };

  getMenus() {
    forkJoin([this.versionService.getAll({ limit: 100 }), this.generationService.getAll({ limit: 100 })])
      .subscribe(([versionRes, generationRes]) => {
        let menuItems: ModelMenu[] = DefaultMenu;
        if (versionRes.results) {
          let index = menuItems.findIndex((item) => item.name == MenuName.Games);
          menuItems[index]['sub'] = versionRes.results
        };
        if (generationRes.results) {
          let index = menuItems.findIndex((item) => item.name == MenuName.Generations);
          menuItems[index]['sub'] = generationRes.results
        };
        this._menuItems$.next(menuItems);
      })
  }
}

