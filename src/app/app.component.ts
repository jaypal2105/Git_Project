import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data_Communication';

  public age :number  = 18;

  constructor(private rout : Router){             // if we want to navigate from one comp to another then need to import "Router"

  }
  clickEvent(){
    console.log("Hello, this message from componenet.ts")
    if (this.age > 19){
      this.rout.navigate(['about'])             // if want to naviagate to multiple comp. by using business logic then we can use .navigate
    } else 
    {this.rout.navigateByUrl('contact')}
  }

}
 