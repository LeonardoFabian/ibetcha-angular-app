import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { sportCreateDTO, sportDTO } from '../sports';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-sports-index',
  templateUrl: './sports-index.component.html',
  styleUrls: ['./sports-index.component.css']
})
export class SportsIndexComponent implements OnInit {

  constructor(private sportsService: SportsService) { }

  sports: sportDTO[];

  tableColumns = ['id', 'name', 'options'];
  totalRegistersQuantity;
  currentPage = 1;
  itemsToDisplay = 10;

  ngOnInit(): void {
    this.loadItems(this.currentPage, this.itemsToDisplay);
  }

  title = 'Sports';

  loadItems(page: number, itemsPerPage) {
    this.sportsService.getAll(page, itemsPerPage)
    .subscribe((result: HttpResponse<sportDTO[]>) => {
      this.sports = result.body;
      console.log(result.headers.get("totalRegistersQuantity"));
      this.totalRegistersQuantity = result.headers.get("totalRegistersQuantity");
    }, error => console.error(error));
  }

  updatePagination(data: PageEvent) {
    this.currentPage = data.pageIndex + 1;
    this.itemsToDisplay = data.pageSize;
    this.loadItems(this.currentPage, this.itemsToDisplay);
  }

  delete(id: number) {
    this.sportsService.delete(id)
      .subscribe(() => {
        this.loadItems(this.currentPage, this.itemsToDisplay);
      }, error => console.error(error));
  }

}
