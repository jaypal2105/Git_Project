import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  
  @Input() dataFromParent:any;        //@Input send the data from parent to child with the help of attribute binding

  constructor(){
    console.log(this.dataFromParent)
  }

  // ngOnInit(){                          
  //   console.log(this.dataFromParent)
  // }
}


//we will get the "undefined" value till the angular lifecycle methods didn"t call/invoke 