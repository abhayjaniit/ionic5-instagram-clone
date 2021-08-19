import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getRandomuserData(page, results){
    return this.http.get(`https://randomuser.me/api/?page=${page}&results=${results}&seed=feed`)
  }
}
