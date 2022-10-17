import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-players-autocomplete',
  templateUrl: './players-autocomplete.component.html',
  styleUrls: ['./players-autocomplete.component.css']
})
export class PlayersAutocompleteComponent implements OnInit {

  constructor() { }

  control: FormControl = new FormControl();

  players = [
    {id: 1, name: 'Kobe Bryant', number: '24', position: ['SG'], photo: 'https://hoopshype.com/wp-content/uploads/sites/92/2021/11/i_fa_e8_03_kobe-bryant.png?w=1000&h=600&crop=1'},
    {id: 2, name: 'LeBron James', number: '6', position: ['SF', 'PF'], photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png'},
    {id: 3, name: 'Anthony Davis', number: '3', position: ['PF', 'C'], photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png'},
    {id: 4, name: 'Ja Morant', number: '12', position: ['PG'], photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4279888.png'},
    {id: 5, name: 'Stephen Curry', number: '30', position: ['PG'], photo: 'https://cdn.nba.com/teams/uploads/sites/1610612744/2022/09/2022_Media_Day_Portraits_Stephen_Curry.jpg?imwidth=2750&imheight=4125'},
    {id: 6, name: 'Austin Reaves', number: '15', position: ['SF'], photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066457.png&w=350&h=254'},
    {id: 7, name: 'Russell Westbrook', number: '0', position: ['PG'], photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png'},
    {id: 8, name: 'Max Christie', number: '10', position: ['SG'], photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631108.png'},
    {id: 9, name: 'Scotty Pippen Jr', number: '1', position: ['PG'], photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630590.png'},
    {id: 10, name: 'Kawhi Leonard', number: '2', position: ['SF'], photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6450.png&w=350&h=254'},
  ]

  playersList = this.players;

  selectedPlayers = [];

  tableColumns = ['photo', 'name', 'position', 'number', 'options'];

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.players = this.playersList;
      this.players = this.players.filter(player => player.name.indexOf(value) !== -1);
    })
  }

  title = 'Add players';

  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    this.selectedPlayers.push(event.option.value);
    this.control.patchValue('');

    // renderize the table
    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }

  dropListDropped(event: CdkDragDrop<any[]>) {
    const prevIndex = this.selectedPlayers.findIndex(player => player === event.item.data)

    moveItemInArray(this.selectedPlayers, prevIndex, event.currentIndex);
    this.table.renderRows();
  }

  delete(player) {
    const index = this.selectedPlayers.findIndex(p => p.name === player.name);
    this.selectedPlayers.splice(index, 1);
    this.table.renderRows();
  }

}
