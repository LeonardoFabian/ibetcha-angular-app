import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-bet',
  templateUrl: './make-bet.component.html',
  styleUrls: ['./make-bet.component.css']
})
export class MakeBetComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      team: '',
      type: '',
      pointSpreadValue: '',
      amount: ['', {
        validators: [Validators.required, Validators.minLength(2)]
      }],
      category: ''
    });
  }

  title = 'Make Bet';

  make() {
    // ... save bet made
    this.router.navigate(['/bets'])
  }

  getErrorAmountField() {
    var field = this.form.get('amount');

    if (field.hasError('required')) {
      return 'The amount field is required';
    }
    if (field.hasError('minlength')) {
      return 'The minimun bet amount is ten (10)';
    }
    return '';
  }

}
