<h1>Introduction</h1><hr>
<!-- Le PHP commence par <?php ?> et ceci est la balise de fin.
Tous le code php se trouve entre ces balises. -->
<?php
// Commentaire sur une seule ligne.
# Autre commentaire sur une seule ligne.
/* 
    Commentaire sur plusieurs lignes.
*/
// PHP signifie "PHP Hypertext  Preprocessor"
// ou alors "Personnal Home Page"
// ! Chaque instruction de php, se termine par ";"
/* Ce qu'on écrit en PHP, n'est pas visisble pour l'utilisateur
en HTML. pour afficher des informations via PHP, on
utilisera une des fonctions suivantes :*/
echo "coucou";
# echo n'a pas besoin de parenthèse et peut prendre plusieurs paramètres
echo "hello" , "world", "!";
/* Une fois le code php interprété par le serveur, le fichier est retourné à
l'utilisateur sous forme de HTML */
print "<br> PHP !";
/* 
    echo et print la même utilité, à la différence que echo est légèrement plus rapide,
    et que print retourne une valeur de "1" si tout s'est bien passé. 
*/
echo "<br>";
var_dump("Coucou", 10);
echo "<br>";
// var_dump affichera le type et la taille de ce qui lui est donné.
var_export("Salutation");
/* var_export ne prendra qu'un seul argument alors que var_dump en prendra plusieurs
et il affichera le contenu comme du code php utilisable.*/
print_r("<br> test <br>");
// On verra print_r avec les tableaux.
# phpinfo() permet d'afficher toute la configuration de notre serveur et les info lié à la page
// phpinfo();
echo getenv("SERVER_NAME");
#---------------------------------------------------------------------------------------
echo "<h1> Déclaration des variables </h1><hr>";

$banane;
/* 
    En php, une variable commence par un "$", ensuite il est suivi d'au moins
    un caractère (lettre ou"_") puis des chiffres peuvent être utilisé.
    Tenter d'utiliser une variable déclaré déclaré mais non défini, entrainera un warning.
*/
// var_dump($banane);
$banane = "jaune";
echo "banane : ", $banane, "<br>";
/* Pour définir une constante, on utilisera la fonction "define()" avec en premier
argument, le nom de la constante, et en second, sa valeur.
pour une constante, pas besoin de "$" et par convention on les verra souvent
en majuscule */
define("AVOCAT", "vert");
echo "avocat : ", AVOCAT, "<br>";
// on parlera de la portée des variables dans le chapitre sur les fonctions.
#get_defined_vars permet de récupérer toute les variables actuellement défini.
var_dump(get_defined_vars());
// variable dynamique :
/* Les variables dynamiques permettent de donner un nom changeant à une variable
dépendant de la valeur d'une autre variable.*/
$fruit = "fraise";
$$fruit = "rouge";
echo "<br>", $$fruit, "<br>";
echo "<br>", $fraise, "<br>";

// Il est possible de supprimer des variables via unset();
unset($banane);
var_dump(get_defined_vars());
#---------------------------------------------------------------------------------------
echo "<h1> Types des variables </h1><hr>";
$num = 5;
$dec = 0.5;
$str = "coucou";
$arr = [];
$boo = true;
$nul = NULL;
$obj = (object)[];
// integer(nombre entier)
echo gettype($num), "<br>";
// double ou float (nombre à virgule)
echo gettype($dec), "<br>";
// string (chaîne de caractère)
echo gettype($str), "<br>";
// array (tableau)
echo gettype($arr), "<br>";
// bolean
echo gettype($boo), "<br>";
// NULL
echo gettype($nul), "<br>";
// Object
echo gettype($obj), "<br>";
// On verra les objets en POO uniquement.
// Il existe aussi le type ressource mais principalement utilisé pour le fonctionnement
// de php.
#---------------------------------------------------------------------------------------
echo "<h1> Chaînes de caractères </h1><hr>";
// Un string peut être représenté par ces 3 caractères :
echo "Bonjour ", 'Salut ', `Coucou`, "<br>";
/* 
    Cela on évitera d'utiliser `` les backticks, car selon les options activées ou pas
    de php, ils pourront être interprêtés différement.

    On peut écrire nos strings sur plusieurs lignes, mais on rappel que le HTML
    ne prend pas en compteles sauts à la ligne.
*/
echo "Ceci est un
    message si long 
    qu'il est sur plusieurs lignes <br>";
$nom = "Maurice";
$age = 54;
/* 
    L'interpolation fonctionne uniquement entre guillemet,
    et pour l'utiliser il suffit d'insérer nos variables dans le string
*/
echo "$nom a $age ans. <br>";
echo '$nom a $age ans. <br>';
// En PHP, la concaténation se fait avec un "."
echo $nom . " a " . $age . " ans. <br>";
// équivalent à $nom . " DUPONT";
$nom .= " DUPONT";
echo $nom, "<br>";

// Donne la longueur d'un string.
echo strlen($nom), "<br>";
// Compte le nombre de mot.
echo str_word_count($nom), "<br>";
// Inverse un string.
echo strrev($nom), "<br>";
// Donne la position du string donné en second paramètre.
echo strpos($nom, "DU"), "<br>";
// []suivant un string permet d'indiquer la position d'un caractère.
echo $nom[8], "<br>";
// Je change le caractère à la position 8 par "L";
$nom[8] = "L";
echo $nom, "<br>";
// remplace le premier string par le second dans le troisième.
echo str_replace("ce", "cette", $nom), "<br>";

#---------------------------------------------------------------------------------------
echo "<h1> Nombres </h1><hr>";
// Il est possible de préfixer les nombres pour indiquerleur base.
#"0b" pour binaire.
$bin = 0b10000;
echo "\$bin = $bin <br>";
#"0" pour octale.
$oct = 020;
echo "\$oct = $oct <br>";
#"rien" pour le décimal.
$oct = 16;
echo "\$dec = $dec <br>";
#"0x" pour l'hexadecimal.
$hexa = 0x10;
echo "\$hexa = $hexa <br>";

// Les nombres sont soit des INTEGER (pas de virgule) soit des floats (virgule);
var_dump("3.14 is int ?", is_int(3.14));
echo "<br>";
var_dump("3.14 is float ?", is_float(3.14));
// is_int() retourne un boolean indiquant si le paramètre est un INTEGER;
// is_float() retourne un boolean indiquant si le paramètre est un FLOAT;
// Rappel qu'en PHP float et double sont le même type.
echo PHP_INT_MAX, "<br>", PHP_INT_MIN, "<br>";
echo PHP_FLOAT_MAX, "<br>", PHP_FLOAT_MIN, "<br>";
// les valeurs maximum et minimum de INT et FLOAT
# is_numeric() retourne un boolean indiquant si le string ne contient que des chiffres.
var_dump("le string '0123456' est il un nombre ?", is_numeric("0123456"));
echo "<br>";
// (int) permet de convertir en Integer;
// echo (int)"42", "<br>", (int)3.14, "<br>";
var_dump((int)"42A", (int)3.14);
// En règle générale (type) permet la conversion en ce type.
// Evidemment, les opérateurs mathématique sont présent :
echo "1+1=", 1+1, "<br>";
echo "1-1=", 1-1, "<br>";
echo "2*2=", 2*2, "<br>";
echo "8/2=", 8/2, "<br>";
// Le modulo qui retourne le reste d'une division
echo "11%3=", 11%3, "<br>";
// les puissances.
echo "2**4=", 2**4, "<br>";
$x = 5;
$x += 2;  // équivalent à $x = $x + 2;
$x -= 3;
$x *= 4;
$x /= 2;
$x %= 3;
echo $x, "<br>";
// Incrémentation et décrémentation.
echo $x++, "-->", $x, "<br>";
echo ++$x, "-->", $x, "<br>";
echo $x--, "-->", $x, "<br>";
echo --$x, "-->", $x, "<br>";
#---------------------------------------------------------------------------------------
echo "<h1> Tableaux </h1><hr>";
// Originellement un tableau se créait ainsi:
$a = array("banane", "pizza", "avocat");
// Mais maintenant on peut tout simplement faire:
$b = ["banane", "pizza", "avocat"];
// echo ne fonctionnera pas sur un tableau.
// echo $a;
var_dump($a, $b);
// les balises "pre" permettent de garder la mise en forme
// mettre le second argument de print_r à true permet qu'il retourne le tableau.
echo "<pre>". print_r($b, 1). "</pre>";
echo "J'aime la $a[0], la $a[1] et l'$a[2] <br>";
// Connaître la taille d'un tableau.
echo count($a), "<br>";
$b[] = "fraise";
echo "<pre>". print_r($b, 1). "</pre>";
?>