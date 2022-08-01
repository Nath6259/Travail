"use strict";
class Truc{
    /**
     * Attention les accesseurs en TS ne seront pas traduit en JS
     * Et un private TS ne peut être private JS
     * On utilisera soit "private" soit "#"
     */
    public prenom = "Maurice";
    protected nom = "Dupont";
    private age = 78;
    constructor(){
        // Ils sont tous accessible dans ma classe.
        this.prenom;
        this.nom;
        this.age;
    }
}
const t = new Truc();
t.prenom;
// Une fois ma classe instancié, je n'ai accès qu'aux propriétés publique.
// t.nom;
// t.age;
class Machin extends Truc{
    constructor(){
        super();
        this.prenom;
        this.nom;
        // Une fois hérité, j'ai accès aux propriétés public et protected mais private
        // this.age
    }
    faireUnTruc(this: HTMLElement){
        /**
         * Il est possible d'indiquer un type différent pour this,
         * en le typant entre les parnthèses de la fonction, comme pour un
         * argument classique.
         */
        console.log(this);
    }
}
// J'indique avec le générique, que ma classe va recevoir dans son constructeur
// un argument dont elle devra retenir le type.
class Collection<T>{
    // En indiquant à mon constructeur qu'elle recoit un argument avec un accesseur
    // (private, protected, public) la coompilation en js intégrera automatiquement
    // cet argument en tant que propriété de mon objet.
    constructor(private items: T[]){}
    addOne(arg: T){
        this.items.push(arg);
        return this
    }
    addMore(arg: T[]){
        this.items.push(...arg);
        return this
    }
}
// c1 sauvegarde que le type qui lui ai donné est nombre,
// il n'acceptera alors que des nombres pour ses méthodes addOne et addMore
const c1 = new Collection([2,1,5,4]);
c1.addOne(3);
// c1.addOne("truc");
/**
 * Petite Astuce de POO (non lié à TS)
 * En faisant retourner "this" aux méthodes qui n'ont rien à retourner
 * il est possible de faire du chaînage de méthode.
 * notre objet étant retourné à chaque fois on peut appeler à nouveau une de ses 
 * méthodes.
 */
c1.addOne(34).addOne(32).addMore([23,21,90]);

class Triangle{
    c1 = 4;
    c2 = 8;
    c3 = 12;
}
class Rectangle{
    c1 = 17;
    c2 = 32;
}
function getC1(arg: Rectangle){
    return arg.c1;
}
getC1(new Triangle);
/**
 * Pas d'erreur ici alors que je donne un triangle à une fonction qui demande un rectangle
 * TS ne compare pas le nom des classes, mais les propriétés qu'elles possèdent.
 * Quand je lui dit de n'accepter qu'un Rectangle, elle attend un objet avec les
 * propriétés c1 et c2.
 * Je lui donne un Triangle qui a ces deux propriétés, c'est donc valide.
 */

abstract class Polygone{
    sides: {[key: string]: number}= {};
    abstract surface(): number;
    countSide(): number{
        return this.sides.length
    }
}
/**
 * Une classe abstraite existe pour servir de modèle à d'autres classes.
 * Il est impossible d'instancier une classe abstraite.
 * Ici on fait hériter notre class Carre de la classe Surface.
 * Carre nous retournera une erreur tant qu'il ne corresondra pas à ce que demande
 * Polygone.
 * Polygone à une méthode abstraite. c'est à dire une méthode qui est déclaré
 * mais non défini. il faudra la définir dans ses héritiers (ici Carre)
 * pour que ceux ci soit valide.
 */
class Carre extends Polygone{
    constructor(c:number){
        super();
        this.sides.c = c;
    }
    surface(): number{
        return this.sides.c * this.sides.c;
    }
}

const square = new Carre(5);
console.log(square.surface());
console.log(square.countSide());
