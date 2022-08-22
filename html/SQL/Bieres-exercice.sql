--  1. Quels sont les tickets qui comportent l’article d’ID 500, afficher le numéro de  ticket uniquement ?
SELECT * FROM `ventes` WHERE `ID_ARTICLE` = 500;
SELECT `NUMERO_TICKET` FROM `ventes` WHERE `ID_ARTICLE` = 500; 
--  2. Afficher les tickets du 15/01/2014.
SELECT * FROM `ticket` WHERE `DATE_VENTE` = '2014-01-15'; 

--  3. Afficher les tickets émis du 15/01/2014 au 17/01/2014.
SELECT * FROM `ticket` WHERE `DATE_VENTE` BETWEEN '2014-01-15' AND '2014-01-17'; 

--  4. Afficher la liste des articles apparaissant à 50 et plus exemplaires sur un ticket.
SELECT * FROM `ventes` WHERE `QUANTITE` >= 50; 

--  5. Quelles sont les tickets émis au mois de mars 2014.
SELECT * FROM `ticket` WHERE MONTH (DATE_VENTE)=3 AND YEAR (DATE_VENTE) =2014; 

--  6. Quelles sont les tickets émis entre les mois de mars et avril 2014 ?
SELECT * FROM `ticket` WHERE MONTH (DATE_VENTE) BETWEEN 3 AND 4 AND YEAR (DATE_VENTE) =2014;

--  7. Quelles sont les tickets émis au mois de mars et juin 2014 ?
SELECT * FROM ticket WHERE DATE_VENTE  LIKE "%2014-03%" OR DATE_VENTE LIKE "%2014-06%";

Corection: select * from ticket where (month(DATE_VENTE) = '03' or month(DATE_VENTE) = '06') 
and annee = 2014;

--  8. Afficher la liste des bières classée par couleur. (afficher l’id et le nom)
SELECT `ID_Couleur`, `NOM_ARTICLE` FROM article ORDER BY article.`ID_Couleur`; 


--  9. Afficher la liste des bières n’ayant pas de couleur. (afficher l’id et le nom)
SELECT * FROM `article` WHERE `ID_Couleur` IS NULL;


--  10. Lister pour chaque ticket la quantité totale d’articles vendus. (classer par quantité décroissante)
SELECT `NUMERO_TICKET`, SUM(`QUANTITE`) AS `QUANTITE` FROM ventes GROUP BY `NUMERO_TICKET` ORDER BY `QUANTITE` DESC;

--  11. Lister chaque ticket pour lequel la quantité totale d’articles vendus est supérieure
--  à 500. (classer par quantité décroissante)
SELECT `NUMERO_TICKET`, SUM(`QUANTITE`) AS `QUANTITE` FROM ventes GROUP BY `NUMERO_TICKET` 
HAVING `QUANTITE` >= 500 ORDER BY `QUANTITE` DESC;

--  12. Lister chaque ticket pour lequel la quantité totale d’articles vendus est supérieure
--  à 500. On exclura du total, les ventes ayant une quantité supérieure à 50 (classer
--  par quantité décroissante)
Correction : select annee, numero_ticket, sum(quantite) as total
from ventes where quantite <= 50 group by numero_ticket having total > 500
order by total desc;

--  13. Lister les bières de type ‘Trappiste’. (id, nom de la bière, volume et titrage)
SELECT `ID_ARTICLE`,`NOM_ARTICLE`,`VOLUME`,`TITRAGE`, `ID_TYPE` FROM `article` WHERE `ID_TYPE` = 13;

--  14. Lister les marques de bières du continent ‘Afrique’
SELECT m.NOM_MARQUE, c.NOM_CONTINENT from continent c 
INNER JOIN pays p ON p.ID_CONTINENT = c.ID_CONTINENT 
INNER JOIN marque m ON m.ID_PAYS = p.ID_PAYS WHERE c.ID_CONTINENT = 1;

--  15. Lister les bières du continent ‘Afrique’
SELECT a.NOM_ARTICLE, m.NOM_MARQUE, c.NOM_CONTINENT from continent c 
INNER JOIN pays p ON p.ID_CONTINENT = c.ID_CONTINENT 
INNER JOIN marque m ON m.ID_PAYS = p.ID_PAYS
INNER JOIN article a ON a.ID_MARQUE = m.ID_MARQUE WHERE c.ID_CONTINENT = 1;

--  16. Lister les tickets (année, numéro de ticket, montant total payé). En sachant que le
--  prix de vente est égal au prix d’achat augmenté de 15% et que l’on n’est pas
--  assujetti à la TVA.
SELECT v.ANNEE, v.NUMERO_TICKET, v.ID_ARTICLE, SUM(v.QUANTITE*(a.PRIX_ACHAT*1.15)) as montantTotal 
FROM article a INNER JOIN ventes v ON v.ID_ARTICLE = a.ID_ARTICLE 
GROUP BY v.NUMERO_TICKET ORDER BY v.NUMERO_TICKET;

Avec Round: SELECT v.ANNEE, v.NUMERO_TICKET, v.ID_ARTICLE, ROUND(SUM(v.QUANTITE*(a.PRIX_ACHAT*1.15))) as montantTotal 
FROM article a INNER JOIN ventes v ON v.ID_ARTICLE = a.ID_ARTICLE
GROUP BY v.NUMERO_TICKET ORDER BY v.NUMERO_TICKET;

Correction : select v.annee, v.numero_ticket, round(sum((v.quantite * a.prix-achat)) * 1.15, 2) as
total from ventes v
left join article a on a.id_article = v.id_article
group by v.numero_ticket;

--  17. Donner le C.A. par année.
Correction : select v.annee, v.numero_ticket, round(sum((v.quantite * a.prix-achat)) * 1.15, 2) as
total from ventes v
left join article a on a.id_article = v.id_article
group by v.annee;

--  18. Lister les quantités vendues de chaque article pour l’année 2016.
Correction : select nom_article, sum(quantite) as total from ventes v
left join article a on a.id_article = v.id_article
where annee = 2016
group by a.id_article
order by nom_article;

--  19. Lister les quantités vendues de chaque article pour les années 2014,2015 ,2016.
Correction : select nom_article, annee, sum(quantite) as total from ventes v
left join article a on a.id_article = v.id_article
where annee in (2014, 2015, 2016)
group by a.id_article, annee
order by nom_article, annee;

--  20. Lister les articles qui n’ont fait l’objet d’aucune vente en 2014.
Correction : select a.id_article, a.nom_article, from article a right join ventes v
on a.id_article = v.ad_article
where a.id_article
not in (select is_article from ventes where v.annee = 2014)
group by id_article;

--  21. Coder de 3 manières différentes la requête suivante :
--  Lister les pays qui fabriquent des bières de type ‘Trappiste’.
Correction : select ,nom_pays from pays p
left join marque m on p.id_pays = m.id_pays
left join article a on m.id_marque = a.id_marque

--  22. Lister les tickets sur lesquels apparaissent un des articles apparaissant aussi sur
--  le ticket 2014-856.
Correction : 

--  23. Lister les articles ayant un degré d’alcool plus élevé que la plus forte des
--  trappistes.
Correction : select nom_article, titrage, volume from article 
where titrage > (select max(titrage) from article left join type t on t.id_type = article.id_type
where nom_type = 'Trappiste')
order by titrage desc;

--  24. Afficher les quantités vendues pour chaque couleur en 2014.
Correction : select c.nom_couleur, sum(v.quantite) as total
from ventes v
left join article a on a.id_article = v.id_article
left join couleur c on c.id_couleur = a.id_couleur
where annee = 2014
group by c.nom_couleur
order by total desc;

seconde version : select c.nom_couleur, sum(v.quantite) as total
from ventes v
natural join article a
natural join couleur c
where annee = 2014
group by c.nom_couleur
order by total desc;
--  25. Donner pour chaque fabricant, le nombre de tickets sur lesquels apparait un de
--  ses produits en 2014.
Correction : select count(t.numero_ticket) as total, f.nom_fabricant
from ticket t
left join ventes v on t.annee = v.annee and t.numero_ticket = v.numero_ticket
left join article a on a.id_article = v.id_article
left join marque m on m.id_marque = a.id_marque
left join fabricant f on f.id_fabricant = m.id_fabricant
where t.annee = 2014
group by f.nom_fabricant
order by f.nom_fabricant;

-- 26. Donner l’ID, le nom, le volume et la quantité vendue des 20 articles les plus  vendus en 2016.
Correction : select a.id_article, a.nom_ article, a.volume, sum(v.quantite) total
from article a
left join ventes v on a.id_article = v.id_article
where v.annee = 2016
group by a.id_article, a.nom_article, a.volume
order by total desc
limit 20;

--  27. Donner l’ID, le nom, le volume et la quantité vendue des 5 ‘Trappistes’ les plus vendus en 2016.
Correction : select a.id_article, a.nom_ article, a.volume, sum(v.quantite) total
from article a
left join ventes v on a.id_article = v.id_article
natural join type t 
where v.annee = 2016 and t.nom_type = 'Trappiste'
group by a.id_article, a.nom_article, a.volume
order by total desc
limit 5;

--  28. Donner l’ID, le nom, le volume et les quantité vendues en 2015 et 2016, des
--  bières dont les ventes ont été stables. (moins de 1% de variation)
Correction : select id_article, nom_article, volume,
(select sum(quantite) from ventes where id_article = a.id_article and annee = 2015) as '2015',
(select sum(quantite) from ventes where id_article = a.id_article and annee = 2016) as '2016',
from article as a
where cast ((select sum(quantite) from ventes where id_article = a.id_article and annee = 2016) -
(select sum(quantite) from ventes where id_article = a.id_article and annee = 2015) as float) /
(select sum(quantite) from ventes where id_article = a.id_article and annee = 2015) * 100 between
-1 and 1
order by a.id_article;

--  29. Lister les types de bières suivant l’évolution de leurs ventes entre 2015 et 2016.
--  Classer le résultat par ordre décroissant des performances.
Correction :

--  30. Existe-t-il des tickets sans vente ?
Correction : 

--  31. Lister les produits vendus en 2016 dans des quantités jusqu’à -15% des quantités
--  de l’article le plus vendu.
Correction : select a.id_article, nom_article,
(select sum(quantite) from ventes where annee = 2016 and id_article = a.id_article)
as qte
from article a
where (select sum(quantite) from ventes where annee= 2016 and id_article = a.id_article)
>=
(select sum(quantite) as q from ventes where annee = 2016 group by id-article order by
q desc limit 1) * 0.85
order by qte desc;

--  IV LES BESOINS DE MISE A JOUR
--  32. Appliquer une augmentation de tarif de 10% pour toutes les bières ‘Trappistes’ de couleur ‘Blonde’
Correction : update article
set prix_achat = prix_achat * 1.1
where id_couleur = (select id_couleur from couleur where nom_couleur = 'Blonde')
and id_type = (select type.id_type from type where nom_type = 'Trappistes')

--  33. Mettre à jour le degré d’alcool des toutes les bières n’ayant pas cette information.
--  On y mettra le degré d’alcool de la moins forte des bières du même type et de même couleur.
Correction : 

--  34. Suppression des bières qui ne sont pas des bières ! (type ‘Bière Aromatisée’)
Correction :

--  35. Supprimer les tickets qui n’ont pas de ventes.
Correction : 
