## Contexte (Charly) ~ 1 page

* (Informatique + education => Scratch => ScratchJr)
* Les enjeux de ScratchJr

## Pourquoi ScratchJr (Charly) ~ 0,5 page

En quoi le projet a une utilité par rapport à l'application existante (seulement disponible sur tablette et ChromeOS)

## Fonctionnalités (Golda) ~ 1,5 - 2 pages

* Afin de pouvoir spécifier les fonctionnalités de l'application, il faut se baser sur l'application mobile/tablette et reprendre les mêmes fonctionnalités.
* Parsing code => block

## Bibliothèques (Golda) ~ 1 page

Recherche de bibliothèques : blockly 
* front-end
* open-source
* block => code 
scratch-flash
* open-source
* se baser sur le code original de Scratch
snap
* plus proche de scratch que blockly
* permet le dessin en 2D

## Comparatif des frameworks web

Pour permettre une intégration et une utlisation multi-plateforme la plus simple possible, le choix de réaliser un site web a été fait. D'autre part Scratch est plutôt une application web, ce qui explique un nombre de librairies plus conséquent qui sont conçus pour les navigateurs.

Les technologies disponibles pour réaliser un serveur web sont assez nombreuses et c'est pour cela que les plus connues et les plus maintenues ont été passées en revue afin de voir celle qui correspondrait le mieux aux besoins de l'application.

### Ruby On Rails

Ruby est un langage réputé pour sa facilité, sa beauté et son expressivité. Il s'agit d'un langage adapté, de manière générale, aux petits projets car il permet de générer une base de code rapidement.

Ruby on Rails est le framework web assimilé au langage Ruby. Il s'agit d'un framework fortement maintenu par la communauté Ruby, open-source et complet. Son paradigme "Convention over Configuration" est totalement en accord avec le langage et permet de mettre en place un site web très rapidement en un minimum d'étapes en évitant ainsi une longue configuration (base de données, etc...)

### Django

Python est facile de prise en main et est très complet, notamment grâce à son système de packaging (pip, virtualenv) et de modules qui permettent une réutilisation facile des librairies. Python est très réputé dans les domaines scientifiques mais aussi en tant qu'outil de scripting.

Django est le framework de référence pour Python. Unanimement adopté par la communauté Python, largement documenté, puissant et possédant un grand nombre de fonctionnalité. Un autre avantage est sa maturité et le côté professionnel du framework. Sa modulabilité et l'indépendance inter-modules, en fait un outil particulièrement adapté au travail en groupe et pour la répartition des tâches.

### Php et ses framework

Php est le langage le plus utilisé à travers car le développement web est l'essence même du langage. Cela se ressent par la présence d'un grand nombre de CMS (Drupal, EzPublish, Wordpress) et de framework (Symfony, Laravel, Zend, etc...) Cependant php natif n'est réellement pas adapté pour créer un site web, aussi bien de manière personnelle que professionnelle. Ceci est dû au fait que beaucoup de failles de sécurité existent et qu'un grand nombre de facteurs et de tests sont à prendre en compte. Par exemple pour les injections SQL le mieux est de vérifier avec un outil adapté (librairie PDO, etc...) Afin de ne pas avoir à se soucier d'un trop grand nombre de failles et de ne pas réinventer la roue (la gestion des utilisateurs, gestion du login, gestion de la base de données) il est conseillé, et même obligatoire pour un projet d'une durée de 8 mois, d'utiliser un framework. 

### Node.js (framework obligatoire, ex : Express.js)

Nodes.js est un outil très à la mode dans le domaine du développement. Il permet entre autres :
* de générer des applications mobiles à l'aide de Javascript (Meteor),
* bases de données NoSQL,
* générer des applications desktop en se basant sur les règles du développement web (Electron, framework de GitHub)

En Node.js, aucun utilitaire n'est fourni nativement, ou fortement assimilé, pour faciliter le développement web. Ainsi l'utilisation d'un framework est nécessaire et Express.js est facile d'utilisation, tout en se basant sur des middlewares par assurer la modularité.  

### Comparaison

Node.js est une technologie qui est encore jeune, tout du moins quand celle-ci est comparée aux autres langages du comparatif, et est prône a de nombreux changements, dans un court laps de temps. Ainsi pour notre projet peut être impactant, dans le mauvais sens du terme.

Php est un langage très peu adapté pour le développement applicatif ou l'exécution d'un code car en plus d'utiliser un système à classe non optimisée, Php n'est pas un langage très rapide à l'exécution. Ainsi dans le cas de la réalisation d'un parser, Php ne semble donc pas très adapté. De plus les frameworks Php ont tendance à être relativement complexe et sont souvent considérés comme des "usines à gaz", c'est-à-dire qu'il faut un long temps d'apprentissage, un long temps de configuration et un long temps de développement avant que la puissance du framework ne soit rentable, par exemple Symfony.

Ruby et Python sont deux langages très similaires dans leur fonctionnement, grande expressivité et prise en main facile. Il est donc légitime de se poser la question de l'utilisation d'un langage par rapport à l'autre. Une réponse courante est que Ruby est plus sympathique d'utilisation pour un projet personnel et Python devient plus pratique pour des projets de grande envergure. Comme notre projet est d'une durée somme toute conséquente il est préférable d'utiliser Django et Python. En plus de cela Python a déjà été utilisé par les différents membres du projet, a minima durant un projet de licence.

Ainsi Python fourni un bon compromis entre le temps d'apprentissage qui serait plus long pour les autres langages et la puissance du framework car Django est majoritairement adapté pour des projets de moyenne ampleur.

## Wireframing (Antoine) ~ selon Scratch + ScratchJr

Afin de représenter visuellement de manière plus concrète l'application, des outils de wireframing(mockup) peuvent être utilisés.

Prendre des images de ScratchJr + Scratch
Voir pour blockly ou snap(différence + possibilité d'implem)

## Outils de développement (Antoine) ~ 0,5 - 1,5 page

IDE, mise à disposition d'une VM, setup des outils, outils de versionning, etc...

## Gestion de projet (Golda) 2 pages

Méthode agile (explication + comment on compte appliquer la méthode)

### Outils de gestion de projets (Charly) 0,5 - 1 page

Explication détaillées de chacun des outils, avantages, inconvénients, comparaison, etc...
* Trello (outil simple de répartition de tâches permettant l'intégration de slack et github)
* Slack (outil dédié à la communication, forte personnalisation)
* GitHub (Possible pour la communication mais beaucoup moins adapté pour la gestion de projet (+ adapté pour des projets à grande échelle))
* Comparer avec d'autres outils (Trac, Redmine, ...) non utilisé (expliquer les choix)
* ...

## Bibliographie

[link text itself]: https://fr.wikipedia.org/wiki/Ruby_on_Rails