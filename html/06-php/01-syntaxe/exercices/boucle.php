<!-- 
    ----------------------------Exercice B1------------------------------ 
    Soit x un chiffre donné, écrire un algorythme qui affiche les 10 chiffres suivants.
-->
<!-- 
    ----------------------------Exercice B2------------------------------ 
    Soit y un chiffre donné, écrire un algorythme qui affiche les tables de multiplication jusqu'à 10
    de ce chiffre.
-->
<!-- 
    ----------------------------Exercice B3------------------------------ 
    Soit z un chiffre donné, écrire un algorythme qui affiche la factoriel de z.
-->
<!-- 
----------------------------Exercice B3------------------------------ 
Soit a un tableau de dix nombres, écrire un algorythme qui affiche le plus grand nombre dans ce tableau.
ainsi que la position de ce dit nombre.
-->
<?php
// ----------------------------Exercice B1------------------------------
echo "<h1> Exercice B1 </h1><hr>";
$x = 5;
for($y=$x+1; $y<=$x+10; $y++){
    echo $y, "<br>";
}
// ----------------------------Exercice B2------------------------------
echo "<h1> Exercice B2 </h1><hr>";
$y = 73;
for($i = 1; $i<=10; $i++){
    echo "$y * $i = ". $y*$i."<br>";
}
// ----------------------------Exercice B3------------------------------
echo "<h1> Exercice B3 </h1><hr>";
$z = 4;
$total = 1;
for($i = 1; $i<=$z; $i++){
    $total *= $i;
}
echo "La factoriel de $z vaut $total . <br>";
// ----------------------------Exercice B4------------------------------
echo "<h1> Exercice B4 </h1><hr>";
$a = [58, 96, 42, 82, 73, 65, 14, 91, 84, 35];
$b = [];
for($i = 0; $i<10; $i++){
    $b[] = rand(0, 100);
}
$max = $pos = 0;
foreach($a as $k => $v){
    if($k == 0 || $max < $v){
        $max = $v;
        $pos = $k;
    }
}
echo "Le plus grand nombre est $max et se trouve à la position $pos <br>";

rsort($b);
echo "Le plus grand nombre est $b[0] et se trouve à la position 0. <br>";
?>