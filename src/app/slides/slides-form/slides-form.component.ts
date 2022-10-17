import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from 'src/app/utils/validators/firstLetterUppercase';
import { slideCreationDTO, slideDTO } from '../slides';

@Component({
  selector: 'app-slides-form',
  templateUrl: './slides-form.component.html',
  styleUrls: ['./slides-form.component.css']
})
export class SlidesFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  styles = [
    {id: 1, name: 'Style 1'},
    {id: 2, name: 'Style 2'},
    {id: 3, name: 'Style 3'}
  ];

  targets = [
    {id: 1, name: 'Self (Default)', value: '_self', description: 'Default. Opens the link in the same frame as it was clicked'},
    {id: 2, name: 'Blank', value: '_blank', description: 'Opens the link in a new window or tab'},
    {id: 3, name: 'Parent', value: '_parent', description: 'Opens the link in the parent frame'},
    {id: 4, name: 'Top', value: '_top', description: 'Opens the link in the full body of the window'},
  ]

  @Input()
  model: slideDTO;

  @Input()
  errors: string[] = [];

  @Output()
  onSubmit: EventEmitter<slideCreationDTO> = new EventEmitter<slideCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {
        validators: [Validators.required, firstLetterUppercase()]
      }],
      description: '',
      image: '',
      link: '',
      linkText: '',
      linkTargetId: 1,
      styleId: 0,
      // isActive: 0
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  title = 'Slides Form';

  selectedImage(file) {
    this.form.get('image').setValue(file);
  }

  handleChange(description: string) {
    this.form.get('description').setValue(description);
  }

  OnSubmit() {
    this.onSubmit.emit(this.form.value);
  }

  getTitleFieldError() {
    var field = this.form.get('title');

    if (field.hasError('required')) {
      return 'The title is required';
    }

    if (field.hasError('firstLetterUppercase')) {
      return field.getError('firstLetterUppercase').message;
    }

    return '';
  }

}
