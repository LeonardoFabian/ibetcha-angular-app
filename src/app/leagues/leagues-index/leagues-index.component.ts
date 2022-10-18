import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { leagueDTO } from '../leagues';
import { LeaguesService } from '../leagues.service';

@Component({
  selector: 'app-leagues-index',
  templateUrl: './leagues-index.component.html',
  styleUrls: ['./leagues-index.component.css']
})
export class LeaguesIndexComponent implements OnInit {

  constructor(private leaguesService: LeaguesService) { }

  leagues: leagueDTO[];

  tableColumns = ['logo', 'id', 'name', 'shortName', 'options'];
  totalRegistersQuantity;
  currentPage = 1;
  itemsToDisplay = 10;

  ngOnInit(): void {
    this.loadItems(this.currentPage, this.itemsToDisplay);
  }

  title = 'Leagues';

  loadItems(page: number, itemsPerPage) {
    this.leaguesService.getAll(page, itemsPerPage)
    .subscribe((result: HttpResponse<leagueDTO[]>) => {
      this.leagues = result.body;
      this.totalRegistersQuantity = result.headers.get("totalRegistersQuantity");
    }, error => console.error(error));
  }

  updatePagination(data: PageEvent) {
    this.currentPage = data.pageIndex + 1;
    this.itemsToDisplay = data.pageSize;
    this.loadItems(this.currentPage, this.itemsToDisplay);
  }

  delete(id: number) {
    this.leaguesService.delete(id)
    .subscribe(() => {
      this.loadItems(this.currentPage, this.itemsToDisplay);
    }, error => console.error(error));
  }

}
