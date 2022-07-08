import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @Input() courseList: any = [];
  @Input() isEditable = false;
  @Output() editCourse = new EventEmitter();
  @Output() deleteCourse = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
