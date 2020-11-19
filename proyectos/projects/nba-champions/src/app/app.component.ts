import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nba-champions';

Championships = [

  {
    year: 2015,
    champion: 'Clevelands Cavaliers',
    champion_url: '../assets/Cleveland.png',
    best_players: [
      'Lebron James',
      'Kyrie Irving',
      'Kevin Love',
      'J.R. Smith',
      'Anderson Varejao',
    ],
  },
  {
    year: 2014,
    champion: 'Golden State Warriors',
    champion_url: '../assets/GoldenState.png',
    best_players: [
      'Stephen curry',
      'Klay Thompson',
      'Draymong Green',
      'Andrew Bogut',
      'Gestus Ezeli',
    ],
  },
  {
    year: 2013,
    champion: 'San Antonio Spurs',
    champion_url: '../assets/SanAntonioSpurs.png',
    best_players: [
      'Tim Duncan',
      'Tony Parker',
      'Manu Ginóbili',
      'Kawhi Leonard',
      'Tiago Splitter',
    ],
  },
];
}
