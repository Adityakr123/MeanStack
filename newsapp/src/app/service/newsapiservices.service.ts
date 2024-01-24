import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=daeb3011f2d74b5bb78103f70b7192a1";
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
}
