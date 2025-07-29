var nome = "Dario";
var cognome = "Mennillo";
var eta;
eta = 36;
var interruttore = true;
var sportPre = ["volley", "calcio", "basket", "nuoto"];
//Creo un oggetto il cui tipo viene costruito al volo
var studente;
studente = {
    nome: "Anna",
    cognome: "Rossi",
    email: "a.rossi@gmail.com",
    eta: 30,
    presenza: true
};
console.log(studente);
function saluta(persona) {
    console.log("Ciao ".concat(persona.nome, " ").concat(persona.cognome));
}
//Esistono le classi
var Docente = /** @class */ (function () {
    function Docente(nome, cognome, eta, corsi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corsi = corsi;
    }
    //Metodo
    Docente.prototype.insegna = function (nomeCorso) {
        this.corsi.push(nomeCorso);
    };
    Docente.prototype.getCorsi = function () {
        return this.corsi;
    };
    Docente.prototype.saluta = function () {
        return "Ciao, io sono ".concat(this.nome, " ").concat(this.cognome);
    };
    return Docente;
}());
var doc = new Docente("Oscar", "Vecchione", 45, ["Html", "Css", "Db"]);
doc.insegna("JavaScript");
console.log(doc.saluta());
