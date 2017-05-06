# Semantique de kidsplayground
Voici une brève explication qui a pour objectif de compiler l'ensemble des règles qui doivent être suivies par un programme au sein de l'interpréteur. 

## Exécution de plusieurs chaînes de blocks
Une chaîne de blocks est simplement une séquence de blocks qui sont alignés et commençant par un block `start`. Une application kidsplayground peut comporter plusieurs de ces listes et ainsi le comportement qui doit être défini par une telle configuration est une exécution en parallèle des blocks. 

Afin d'implémenter un tel mécanisme, chaque pile de blocks seront des files, une par séquence, d'instructions dans le but d'exécuter de manière parallèle, donc aléatoire, les éléments des différentes séquences.

## Les mouvements
Les mouvements sont représentés par un ensemble de 4 blocks (haut, bas, gauche, droite) et le comportement prédéfini pour de tels blocks est de s'exécuter séquentiellement entre eux, mais pas uniquement car il faut également que l'exécution soit séquencées par rapport aux autres blocks.

## Le son
Le block sont a pour objectif de choisir un ensemble de pistes audios, qui pourront être récupérées sur le pc utilisateur si il choisit de l'importer, ou alors depuis une liste dont prédispose le site. Le block son doit être lu en arrière plan, ce qui signifie que pendant qu'une piste est jouée les autres blocks sont effectifs, par exemple ceux de mouvements.

Plusieurs blocks de son peuvent être joués simultanément.  

