import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url: any = "assets/data/grid-data.json"
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    console.log(this.http.get<any>(this.url))
    return this.http.get<any>(this.url)
  }
}
