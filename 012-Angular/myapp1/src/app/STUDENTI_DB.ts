import {Studente} from "./studente/studente.model"

//L'export mi serve per poterlo leggerlo negli altri file
export const STUDENTI_DB: Studente[] = [
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
    },
    {
      id : "s3",
      nome: "Maria",
      cognome: "Gialli",
      materie: []
    }
]