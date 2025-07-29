import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  // nomeCard:string = "Card";
  // descrizione:string = "Si tratta di una prova";
  // imgPath:string = "https://media.istockphoto.com/id/511061090/it/foto/edificio-per-uffici-a-londra-in-inghilterra.jpg?s=1024x1024&w=is&k=20&c=ljQYO4DKNdV9XfbqdUA9Bh5p4ImbX1AIRTLPYNDWOU4=";

  //Con ! indico che non c'è un inizializzatore ma sicuramento te lo passo
  //Dobbiamo usare ! perché siamo in strict-mode
  //Passiamo i dati dal genitore al figlio
  @Input() id!: string;
  @Input() nome!: string;
  @Input() cognome!: string;
  @Input() materie!: string[];
}
