import { CommonModule } from '@angular/common';
import { Component, input, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnChanges {

  @Input() message :string = ''
  @Input() alertType : string =''

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
