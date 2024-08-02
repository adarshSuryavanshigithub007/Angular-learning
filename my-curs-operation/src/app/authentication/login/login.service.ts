import { inject, Injectable } from '@angular/core';
import { Constants } from '../../config/API';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl: string = Constants.API_URL;
httpClient = inject(HttpClient)

  constructor() { }
}
