import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild('text') textBox?:ElementRef;

  ngAfterViewInit(): void {
    const value = this.textBox?.nativeElement.value
    // debugger
    console.log(value)
    // throw new Error('Method not implemented.');
  }



}
