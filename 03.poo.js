function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function() {
        return this.prenom+" "+this.nom+" "+this.pseudo;
    }
    this.getInitiales = function() {
        return ''+this.prenom.charAt(0)+this.nom.charAt(0);
    }
}

var jules = new Personne('LEMARIE', 'Jules', 'jules77');
var paul = new Personne('LEMAIRE', 'Paul', 'paul44');

console.log(jules.nom, jules.prenom, jules.pseudo, '('+jules.getNomComplet()+')');

afficherPersonne = function(personne) {
    console.log(personne.nom, personne.prenom, personne.pseudo, '('+personne.getNomComplet()+')');
}

afficherPersonne(paul);

jules.pseudo = 'jules44';
console.log(jules.getNomComplet());

console.log(jules.age);
Personne.prototype.age = "NON RENSIGNE";
console.log(jules.age);

jules.age = 30;
console.log("Age de Jules = "+jules.age);

console.log(jules.getInitiales());

var robert = {
    prenom : "Robert",
    nom : "LEPREFET",
    pseudo : "robert77",
    getNomComplet : function() {
        return this.prenom+" "+this.nom+" "+this.pseudo;
    },
}

afficherPersonne(robert);

function Client(nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient
    this.getInfos = function() {
        return "("+this.numeroClient+" "+this.prenom+" "+this.nom+")";
    }
}

var steve = new Client('LUCAS', 'Steve', 'steve44', 'A01');
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());