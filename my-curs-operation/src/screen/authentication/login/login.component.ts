import { HttpClient } from '@angular/common/http';
import { routes } from '../../../app/app.routes';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertComponent } from '../../../app/components/alert/alert.component';
import { NgContainerComponent } from "../../../app/template/ng-container/ng-container.component";
import { SpinnerComponent } from "../../../app/components/spinner/spinner/spinner.component";
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

interface LoginResponse {
  message: string;
  success: boolean;
  token: string;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, AlertComponent, SpinnerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj ={
    email: '',
    password: ''
  }
  constructor(private http:HttpClient, private spinner: NgxSpinnerService){

  }
  router = inject(Router)

  loginUser(){
    console.log("calling")
    this.spinner.show()
    this.http.post<LoginResponse>('http://localhost:8080/api/v1/user/login', this.loginObj)
  .subscribe((response) => {
    console.log(response);
    if (response.success) {
      console.log("calling")
      this.spinner.hide()
      localStorage.setItem('token', response.token);
      this.router.navigate(['/add-Books']);
      // Do something if login was successful
    }else{
      this.spinner.hide()
    }
  });
  }


}
