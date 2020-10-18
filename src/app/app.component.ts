import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'raad-het-getal';
  randomNumber: number = Math.floor(Math.random()*100);
  mededeling: string = '';
  beurtenResterend: number = 10;
  gok(jenNieuweGok: string) {
    var jenNieuweGokNummer: Number = Number(jenNieuweGok);
    if (this.randomNumber == jenNieuweGokNummer) {
      this.mededeling = 'Je hebt het getal geraden';
    }
    else if (this.randomNumber < jenNieuweGokNummer) {
      this.mededeling = 'Kies een lager nummer';
    }
    else {
      this.mededeling = 'Kies een hoger nummer';
    }
    this.beurtenResterend -= 1;
  }
}
