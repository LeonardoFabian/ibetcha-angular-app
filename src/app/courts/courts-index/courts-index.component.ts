import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { courtDTO } from '../courts';
import { CourtsService } from '../courts.service';

@Component({
  selector: 'app-courts-index',
  templateUrl: './courts-index.component.html',
  styleUrls: ['./courts-index.component.css']
})
export class CourtsIndexComponent implements OnInit {

  constructor(private courtsService: CourtsService) { }

  courts: courtDTO[];

  tableColumns = ['photo', 'id', 'name', 'options'];
  totalRegistersQuantity;
  currentPage = 1;
  itemsToDisplay = 10;

  ngOnInit(): void {
    this.loadItems(this.currentPage, this.itemsToDisplay);
  }

  title = 'Courts';

  loadItems(page: number, itemsPerPage) {
    this.courtsService.getAll(page, itemsPerPage)
    .subscribe((result: HttpResponse<courtDTO[]>) => {
      this.courts = result.body;
      this.totalRegistersQuantity = result.headers.get("totalRegistersQuantity");
    }, error => console.error(error));
  }

  updatePagination(data: PageEvent) {
    this.currentPage = data.pageIndex + 1;
    this.itemsToDisplay = data.pageSize;
    this.loadItems(this.currentPage, this.itemsToDisplay);
  }

  delete(id: number) {
    this.courtsService.delete(id)
    .subscribe(() => {
      this.loadItems(this.currentPage, this.itemsToDisplay);
    }, error => console.error(error));
  }

}
