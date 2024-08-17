import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor( private http : HttpClient) {

  }

  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getCustomer(){
    return this.http.get("https://projectapi.gerasim.in/api/PropertyBookingController/GetAllCustomer")
  }
}
