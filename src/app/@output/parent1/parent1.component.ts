import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {

  public childData:any;

  constructor(){

  }

  fetchFromChild(evt:any){
    this.childData = evt;
    console.log(this.childData)
  }
}
