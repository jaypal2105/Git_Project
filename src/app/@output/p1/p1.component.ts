import { Component } from '@angular/core';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component {
public childData:any;
  constructor(){

  }

  fetchDataFromChild(evt:any){
    console.log(evt)
    this.childData =evt;
  }
}
