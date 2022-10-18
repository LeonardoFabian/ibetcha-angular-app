import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { playersDTO } from '../players';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-players-index',
  templateUrl: './players-index.component.html',
  styleUrls: ['./players-index.component.css']
})
export class PlayersIndexComponent implements OnInit {

  constructor(private playersService: PlayersService) { }

  players: playersDTO[];

  tableColumns = ['photo', 'id', 'name', 'number', 'options'];
  totalRegistersQuantity;
  currentPage = 1;
  itemsToDisplay = 10;

  ngOnInit(): void {
    this.loadItems(this.currentPage, this.itemsToDisplay);
  }

  title = 'Players';

  loadItems(page: number, itemsPerPage) {
    this.playersService.getAll(page, itemsPerPage)
    .subscribe((result: HttpResponse<playersDTO[]>) => {
      this.players = result.body;
      this.totalRegistersQuantity = result.headers.get("totalRegistersQuantity");
    }, error => console.error(error));
  }

  updatePagination(data: PageEvent) {
    this.currentPage = data.pageIndex + 1;
    this.itemsToDisplay = data.pageSize;
    this.loadItems(this.currentPage, this.itemsToDisplay);
  }

  delete(id: number) {
    this.playersService.delete(id)
    .subscribe(() => {
      this.loadItems(this.currentPage, this.itemsToDisplay);
    }, error => console.error(error));
  }

}
