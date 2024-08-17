import {  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-event',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-event.component.html',
  styleUrl: './life-cycle-event.component.css'
})
export class LifeCycleEventComponent implements OnInit, DoCheck, AfterContentInit , AfterViewChecked , AfterViewInit , AfterContentChecked ,OnDestroy ,OnChanges{

  firsName: string = 'adarsh'

  constructor() {
    console.log("initial load", "constructor1")
    this.firsName = ''
  }

  ngOnInit(): void {
    //like useEffect when components load
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('ngOnInit2')
  }

  ngDoCheck(): void {
    console.log("DoCheck3")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchange")
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("afterContentInit4")
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("afterContentChecked7")
  }
  ngAfterViewChecked(): void {
      console.log("AfterViewChecked 5")
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components
    //and directives (not pipes).
    console.log("afterViewInit6")
  }

ngOnDestroy(): void {
  //Called just before the component is destroyed.
  console.log("onDestroy8")
}

}
