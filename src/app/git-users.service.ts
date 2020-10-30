import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GitUserService {
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    const url = ' https://api.github.com/users/SerhiiYaroshenko1986';
    return this.http.get<any>(url);
  }
}
