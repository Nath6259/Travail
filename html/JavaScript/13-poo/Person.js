"use strict";
/**
 * La programmation orienté objet consiste à développer toute notre logique et nos fonctions à 
 * l'interieur d'objets. La plupart des langages gérant l'orienté objet demandent de passer par 
 * des classes et des constructeurs, ce que l'on va voir par la suite. Mais JS gère la création
 * d'objet manuellement. Ce qui va nous permettre de voir pas à pas comment cela fonctionne. 
 */
const Person = {
    name: {
        prenom: "Maurice",
        nom: "DUPONT"
    },
    age: 54,
    /** 
     * Dans un objet on ne parlera pas de variable et de fonction, mais de propriété et de méthode.
    */
    salutation: function(){
        /**
         * Avec l'utilisation du mot clef this, je fais appel à l'objet lui même
         * et donc j'ai accès à ses propriétés et méthodes.
         */
        console.log(`Bonjour ! Je m'appelle ${this.fullName} et J'ai ${this.age} ans`);
    },
    anniversaire: function(){
        this.age++;
        this.salutation();
    },
    /**
     * Les setters servent à paramètrer une propriété de notre objet, en le modifiant légèrement
     * avant de le sauvegarder.
     * Leur syntaxe est à mit chemin entre la propriété et la méthode.
     * leur déclaration se fait avec le mot clef "set" suivi d'un nom et de parenthèse pour 
     * prendre un argument. (on ne retrouve pas les habituelles ":")
     * Pour leur appel, c'est le même que pour une propriété.
     * par exemple objet.nom = "truc".
     */
    set nom(n){
        this.name.nom = n.toUpperCase();
    },
    set prenom(p){
        this.name.prenom = p[0].toUpperCase()+p.slice(1).toLowerCase();
    },
    set Age(a){
        this.age = parseInt(a);
    },
    /**
     * le getter utilise la même syntaxe que le setter, mais à le rôle inverse,
     * il permet de récupérer une ou plusieurs propriété quelque peu modifié.
     */
    get fullName(){
        return this.name.prenom + " " + this.name.nom;
    }

};
/**
 * Notre second objet a les même propriétés et méthodes mais avec des valeurs différente.
 */
export const Person2 = {
    name: {
        prenom: "Charli",
        nom: "Leborgne"
    },
    age: 34,
    /** 
     * Dans un objet on ne parlera pas de variable et de fonction, mais de propriété et de méthode.
    */
    salutation: function(){
        /**
         * Avec l'utilisation du mot clef this, je fais appel à l'objet lui même
         * et donc j'ai accès à ses propriétés et méthodes.
         */
        console.log(`Bonjour ! Je m'appelle ${this.fullName} et J'ai ${this.age} ans`);
    },
    anniversaire: function(){
        this.age++;
        this.salutation();
    },
    /**
     * Les setters servent à paramètrer une propriété de notre objet, en le modifiant légèrement
     * avant de le sauvegarder.
     * Leur syntaxe est à mit chemin entre la propriété et la méthode.
     * leur déclaration se fait avec le mot clef "set" suivi d'un nom et de parenthèse pour 
     * prendre un argument. (on ne retrouve pas les habituelles ":")
     * Pour leur appel, c'est le même que pour une propriété.
     * par exemple objet.nom = "truc".
     */
    set nom(n){
        this.name.nom = n.toUpperCase();
    },
    set prenom(p){
        this.name.prenom = p[0].toUpperCase()+p.slice(1).toLowerCase();
    },
    set Age(a){
        this.age = parseInt(a);
    },
    /**
     * le getter utilise la même syntaxe que le setter, mais à le rôle inverse,
     * il permet de récupérer une ou plusieurs propriété quelque peu modifié.
     */
    get fullName(){
        return this.name.prenom + " " + this.name.nom;
    }

};
export default Person;