import { Component, OnInit } from '@angular/core';
import { categoriesCreateDTO } from '../categories';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Create Category';

  store(category: categoriesCreateDTO) {
    console.log(category);
  }

}
