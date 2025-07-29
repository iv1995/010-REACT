import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title:string = "Mia prima app";
  nomeAutore: string = "Dario Mennillo";
  mieiStudenti = [
    {
      id: "s1",
      nome: "Laura",
      cognome: "Verdi",
      materie: ["materia", "Java"]
    },
    {
      id: "s2",
      nome: "Luca",
      cognome: "Rossi",
      materie: ["materia"]
    }
  ] 
}
