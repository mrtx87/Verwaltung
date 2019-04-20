import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/entity/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Array<any>;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getAll().subscribe(data => {
      this.students = data;
      console.log(this.students); we
    });
  }

}
