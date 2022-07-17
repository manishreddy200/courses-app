import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-edit-form',
  templateUrl: './course-edit-form.component.html',
  styleUrls: ['./course-edit-form.component.css']
})
export class CourseEditFormComponent implements OnInit {
  courseForm!: FormGroup;
  authors = ['author1', 'author2'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      authorForm: this.formBuilder.group({
        authorName: [''],
        duration: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]]
      }),
      authorArray: this.formBuilder.array(this.authors.map((author) => this.newAuthor(author))),
    });
  }

  get authorArray(): FormArray {
    return this.courseForm.get('authorArray') as FormArray;
  }

  get description() {
    return this.courseForm.get('description');
  }

  get duration() {
    return this.courseForm.get('authorForm')?.get('duration');
  }

  get title() {
    return this.courseForm.get('title');
  }

  get authorName() {
    return this.courseForm.get('authorForm')?.get('authorName');
  }

  newAuthor(authorName: string) {
    return new FormControl(authorName);
  }

  addAuthor(authorName: string) {
    if (!authorName) { return }
    this.authorArray.push(this.newAuthor(authorName));
  }
}
