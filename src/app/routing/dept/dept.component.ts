import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent {
  public deptName :any ;
  // there are two ways to read or fetch data 1] Rout params 2] ParamMap

  constructor(private actRout:ActivatedRoute){    // Activated rout gives the info related to current rout
    
    //1. Rout param

    // console.log(this.actRout)
    // console.log(this.actRout.snapshot.params);
    // this.deptName = this.actRout.snapshot.params['name'];
    // console.log(this.deptName)


    // 2] ParamMap

    // console.log(this.actRout.paramMap);                   // this data will get in the form observables 
    // this.actRout.paramMap.subscribe((resp:any)=> {
    //   console.log(resp);

    //   this.deptName = resp.params.id;
    //   console.log(this.deptName)
    // })
  }
}
