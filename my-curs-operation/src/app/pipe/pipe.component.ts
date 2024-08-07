import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../customPipe/pipes/na.pipe';

// import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, JsonPipe, AsyncPipe,NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName: string = 'this is requirment demo';

  currentDate = new Date()

  currentTime: Observable<Date> = new Observable<Date>
  student: any = {
    name: "John Doe",
    age: 25,
    dateOfBirth: new Date('1997-01-01'),
    state : ''
  }

  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date))
  }


}
