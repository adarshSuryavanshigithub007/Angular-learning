import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksManagementApiserviceService } from '../../app/service/api/books-management-apiservice.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../app/components/spinner/spinner/spinner.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-addnewbooks',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, SpinnerComponent],
  templateUrl: './addnewbooks.component.html',
  styleUrl: './addnewbooks.component.css'
})
export class AddnewbooksComponent  {
  formValue= null
  getAllBooks = null
  constructor(private service: BooksManagementApiserviceService, private spinner: NgxSpinnerService, private router:Router) {
    this.getBooksList()
  }
  newBookForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    publishYear: new FormControl(''),
  })
  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.getBooksList()
  // }

  submitNewBook() {
    // this.formValue = ;
    try {
      this.spinner.show();
      this.service.addNewBooks(this.newBookForm.value).subscribe((response)=>{
        console.log(response)
        if (response.success === true) {
          console.log("working")
          this.getBooksList()
        }
      })
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      this.spinner.hide();
    }
  this.newBookForm.reset()
  }

  getDeleteEachRecord(id:any){
    console.log(id)
    try {
      this.spinner.show()
      this.service.deleteBooks(id).subscribe((response)=>{
        console.log(response)
        if(response.success === true){
          this.getBooksList()
          alert(response.message)
        }
      })
    } catch (error) {
      this.spinner.hide()
    }

  }
  getBooksList() {
    try {
      this.spinner.show()
      this.service.listOfBooks().subscribe((response) => {
        console.log(response)
        if (response.success) {
          this.spinner.hide()
          console.log(response.data)
         if(response.data){
          // this.getAllBooks = response.data
         }
        }
      },error=>{
        console.log(error)
      })
    } catch (error) {
    }
  }

  navigateToEditPage(book:any){
    console.log(book)
    this.router.navigate(['/edit',book._id])
  }

}
