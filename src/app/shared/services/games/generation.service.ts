import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BaseService } from "../api/base-api.service";
import { ModelNameUrl } from '../model/model-name-url';
import { Endpoint } from '../api/resource';

@Injectable({ providedIn: 'root' })
export class GenerationService extends BaseService<ModelNameUrl>{
  constructor(http: HttpClient) {
    super(http);
    this.baseUrl = Endpoint.URL + "generation"
  };
}