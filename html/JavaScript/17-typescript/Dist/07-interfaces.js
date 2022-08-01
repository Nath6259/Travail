"use strict";
document.banane;
/**
 * Pour être valide, une classe qui implement une interface, devra bien possèder
 * toute les propriétés et méthodes déclaré dans l'interface.
 */
class Point3D {
    x = 0;
    y = 0;
    z = 0;
    get() { return this.x; }
}
/**
 * On limite l'accès à la fonction show à des objets respectant
 * donc Point3D est un argument valide.
 */
function show(p) { }
show(new Point3D);
