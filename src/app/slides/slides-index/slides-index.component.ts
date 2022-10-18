import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { slideDTO } from '../slides';
import { SlidesService } from '../slides.service';

@Component({
  selector: 'app-slides-index',
  templateUrl: './slides-index.component.html',
  styleUrls: ['./slides-index.component.css']
})
export class SlidesIndexComponent implements OnInit {

  constructor(private slidesService: SlidesService) { }

  slides: slideDTO[];

  tableColumns = ['image', 'id', 'title', 'link', 'styleId', 'options'];
  totalRegistersQuantity;
  currentPage = 1;
  itemsToDisplay = 10;

  ngOnInit(): void {
    this.loadItems(this.currentPage, this.itemsToDisplay);
  }

  title = 'Slides';

  loadItems(page: number, itemsPerPage) {
    this.slidesService.getAll(page, itemsPerPage)
    .subscribe((result: HttpResponse<slideDTO[]>) => {
      this.slides = result.body;
      this.totalRegistersQuantity = result.headers.get("totalRegistersQuantity");
    }, error => console.error(error));
  }

  updatePagination(data: PageEvent) {
    this.currentPage = data.pageIndex + 1;
    this.itemsToDisplay = data.pageSize;
    this.loadItems(this.currentPage, this.itemsToDisplay);
  }

  delete(id: number) {
    this.slidesService.delete(id)
    .subscribe(() => {
      this.loadItems(this.currentPage, this.itemsToDisplay);
    }, error => console.error(error));
  }

}
