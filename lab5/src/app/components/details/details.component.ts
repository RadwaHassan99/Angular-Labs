import { Component,OnInit } from '@angular/core';
import { Lab4Service } from 'src/app/Services/lab4.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  ID:any;
  student: any;
  constructor(myRoute:ActivatedRoute,public myService: Lab4Service){
    this.ID = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.GetUserByID(this.ID).subscribe(
      {
        next: (data) => {
          this.student = data;
        },
        error:(err)=>{console.log(err)}
      }
    );
  }

}
