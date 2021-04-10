import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ishops} from '../interfaces/ishops';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopservicesService {
 url = 'http://127.0.0.1:8000/shops';
  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:typedef
  get_all_products(){
    return this.http.get<Ishops[]>(this.url);
  }
}
