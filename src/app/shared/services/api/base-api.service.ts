import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResult } from '../model/list-result.model';
import { Endpoint } from './resource';

export class BaseService<T>{
  protected baseUrl: string = ""
  constructor(protected http: HttpClient) { 
  };

  getAll(params?: any): Observable<ListResult<T>> {
    return this.http.get<ListResult<T>>(this.baseUrl, { params });
  };

  retrieve(name?: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${name}`);
  };

}