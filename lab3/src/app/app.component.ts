import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3';
  parentData = "";
  DataFromRegister:{name:String,age:String}[]=[];
  getData(data:any){
    this.DataFromRegister.push(data);
  }
}
