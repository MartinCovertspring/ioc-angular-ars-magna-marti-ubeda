import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class TestHttpService {
  private http = inject(HttpClient);
  private url = `${API_URL}/items`;

  getItems() {
    return this.http.get<any[]>(this.url);
  }
}