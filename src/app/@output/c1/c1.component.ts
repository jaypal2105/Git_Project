import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {

  public dataFromChild:any = "Data from child to Parent"
  @Output() dataEvent =  new EventEmitter<any>()

  constructor(){

  }
  
  childToParent(){
    console.log("test")
    this.dataEvent.emit(this.dataFromChild);
  }
}
