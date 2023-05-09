import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  public dataFromChild:any = "This Data is Coming From Child"

  @Output() dataEvent = new EventEmitter<any>()          //@Output >> send the data from child to parent with the help of event binding

  constructor(){
    
  }

  childToParent(){
    console.log('this is testing')
    this.dataEvent.emit(this.dataFromChild);
  }
}
