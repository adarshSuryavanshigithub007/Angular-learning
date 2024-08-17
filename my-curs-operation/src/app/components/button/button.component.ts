import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() btnText: string = '';
  @Input() btnClass: string = '';

  @Output() click = new EventEmitter<any>();

  onclick() {
    console.log(this.click.emit("hello from adarsh"))
    this.click.emit()
  }

}
