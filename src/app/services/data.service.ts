import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

export interface Data {
  id?: number; // optional for new items
  name: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
 private baseUrl = 'http://localhost:8080/api/data';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Data[]> {
    return this.http.get<Data[]>(this.baseUrl);
  }

  create(data: Data): Observable<Data> {
    return this.http.post<Data>(this.baseUrl, data);
  }

  update(id: number, data: Data): Observable<Data> {
    return this.http.put<Data>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  get(id: number): Observable<Data> {
  return this.http.get<Data>(`${this.baseUrl}/${id}`);
}
}


