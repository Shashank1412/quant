import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from "rxjs";
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  getListRequest(listName) {
    let headers = new HttpHeaders().set('Content-Type', 'text/plain');
    return this.http.get(`https://jsonplaceholder.typicode.com/${listName}`);
  }

  editFormRequest(listName,id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/${listName}/${id}`);
  }

}
