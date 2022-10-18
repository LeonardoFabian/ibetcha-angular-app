import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { courtDTO } from 'src/app/courts/courts';
import { teamsDTO } from '../teams';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-teams-index',
  templateUrl: './teams-index.component.html',
  styleUrls: ['./teams-index.component.css']
})
export class TeamsIndexComponent implements OnInit {

  constructor(private teamsService: TeamsService) { }

  teams: teamsDTO[];

  tableColumns = ['logo', 'name', 'shortName', 'options'];
  totalRegistersQuantity;
  currentPage = 1;
  itemsToDisplay = 10;

  ngOnInit(): void {
    this.loadItems(this.currentPage, this.itemsToDisplay);
  }

  title = 'Teams';

  loadItems(page: number, itemsPerPage) {
    this.teamsService.getAll(page, itemsPerPage)
    .subscribe((result: HttpResponse<teamsDTO[]>) => {
      this.teams = result.body;
      this.totalRegistersQuantity = result.headers.get("totalRegistersQuantity");
    }, error => console.error(error));
  }

  updatePagination(data: PageEvent) {
    this.currentPage = data.pageIndex + 1;
    this.itemsToDisplay = data.pageSize;
    this.loadItems(this.currentPage, this.itemsToDisplay);
  }

  delete(id: number) {
    this.teamsService.delete(id)
    .subscribe(() => {
      this.loadItems(this.currentPage, this.itemsToDisplay);
    }, error => console.error(error));
  }

}
