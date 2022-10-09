import { Component, OnInit } from '@angular/core';
import { categoriesCreateDTO } from '../categories';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor() { }

  model: categoriesCreateDTO = {
    name: 'Open Bets'
  };

  ngOnInit(): void {
  }

  title = 'Edit Category';

  store(category: categoriesCreateDTO) {
    console.log(category);
  }

}
