import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksManagementApiserviceService } from '../../app/service/api/books-management-apiservice.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-books',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-books.component.html',
  styleUrl: './edit-books.component.css'
})
export class EditBooksComponent implements OnInit {


  bookId!: string | null;
  bookDetails: any;
  bookForm: FormGroup;


  constructor( private route:ActivatedRoute,private service: BooksManagementApiserviceService){
    this.bookId = this.route.snapshot.paramMap.get('id') ?? '';
    // this.bookDetails = this.route.snapshot.paramMap.get('book')
    this.getData(this.bookId)
    console.log(this.bookId)
    console.log("adarsh", this.bookId,this.bookDetails)

    this.bookForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      publishYear: new FormControl(''),
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
console.log(this.bookDetails)

  }

  getData(id:any){
    console.log(id)
    this.service.getDataById(id).subscribe((response)=>{
      console.log(response)
      if(response.success){
        if (response.data && response.data.title) {
            this.bookForm.patchValue({
              title: response.data.title,
              author: response.data.author,
              price: response.data.price,
              publishYear:response.data.publishYear,
              description: response.data.description

            })
        }
      }
    })
  }

  onSubmit(){
    console.log(this.bookForm.value)
    this.service.addNewBooks(this.bookForm.value).subscribe((response) => {
      console.log(response)
      if (response.success === true) {
        console.log("working")
        // this.getBooksList()
      }
    })
  }

}
