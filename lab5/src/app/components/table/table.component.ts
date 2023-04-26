import { Component,OnInit } from '@angular/core';
import { Lab4Service } from 'src/app/Services/lab4.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  students:any;

  constructor(private lab4Service: Lab4Service) { }

  ngOnInit(): void {
    this.lab4Service.GetAllUsers().subscribe(
      {
        next: (data) => {
          this.students = data;
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

  onDeleteUser(id: number) {
    this.lab4Service.deleteUser(id).subscribe(() => {
      this.students = this.students.filter((s: any) => s.id !== id);
    });
  }


}
