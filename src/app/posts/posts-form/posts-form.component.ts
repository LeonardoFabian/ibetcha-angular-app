import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from 'src/app/utils/validators/firstLetterUppercase';
import { postCreateDTO, postDTO } from '../posts';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css']
})
export class PostsFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  postStatus = [
    {id: 1, name: 'Draft'},
    {id: 2, name: 'Revision'},
    {id: 3, name: 'Publish'},
  ];

  @Input()
  model: postDTO;

  @Output()
  OnSubmit: EventEmitter<postCreateDTO> = new EventEmitter<postCreateDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {
        validators: [Validators.required, firstLetterUppercase()]
      }],
      slug: '',
      content: '',
      featuredImage: '',
      postDate: new Date,
      statusId: 1
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  title = 'Posts Form';

  selectedImage(file) {
    this.form.get('featuredImage').setValue(file);
  }

  handleChange(content: string) {
    this.form.get('content').setValue(content);
  }

  onSubmit() {
    this.OnSubmit.emit(this.form.value);
  }

  getTitleFieldError() {
    var field = this.form.get('title');

    if (field.hasError('required')) {
      return 'The title field is required';
    }

    if (field.hasError('firstLetterUppercase')) {
      return field.getError('firstLetterUppercase').message;
    }

    return '';
  }

}
