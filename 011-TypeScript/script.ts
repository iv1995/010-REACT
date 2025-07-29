let nome = "Dario";
let cognome:string = "Mennillo";

let eta:number;
eta = 36;

let interruttore: boolean = true;

let sportPre: string[] = ["volley", "calcio", "basket", "nuoto"];

//Creo un oggetto il cui tipo viene costruito al volo
let studente:{
    nome: string,
    cognome: string,
    email : string,
    eta: number,
    presenza: boolean
}

studente = {
    nome:"Anna",
    cognome: "Rossi",
    email: "a.rossi@gmail.com",
    eta: 30,
    presenza: true
}

console.log(studente);

type Persona = {
    nome:string,
    cognome:string
}

function saluta(persona:Persona){
    console.log(`Ciao ${persona.nome} ${persona.cognome}`)
}

//Esistono le classi
class Docente{
    nome: String;
    cognome: String;
    eta: number;
    private corsi: string[]

    constructor(nome:string, cognome: string, eta: number, corsi:string[]){
        this.nome=nome;
        this.cognome=cognome;
        this.eta = eta;
        this.corsi= corsi;
    }

    //Metodo
    insegna(nomeCorso: string){
        this.corsi.push(nomeCorso);
    }

    getCorsi(){
        return this.corsi;
    }

    saluta(): string{
        return `Ciao, io sono ${this.nome} ${this.cognome}`
    }
}

let doc = new Docente("Oscar", "Vecchione", 45, ["Html", "Css", "Db"]);
doc.insegna("JavaScript");
console.log(doc.saluta());

//Esiste anche un altro modo per dichiarare una classe
//Praticamente non dichiaro le prop di classe ma dichiaro direttamente tutto nel costruttore
class Utente{

    //Posso evitare di specificare le prop di classe ma nel costruttore devo utilizzare i modificatori d'accesso
    constructor(public nome:string, public cognome:string, private matricola:number){

    }

    estraiMatricola():number{
        return this.matricola;
    }
}

let user = new Utente("Laura", "Verdi", 5);

