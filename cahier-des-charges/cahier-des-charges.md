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

## Framework web (Antoine) ~ 1 page

Pour permettre une intégration et une utlisation multi-plateforme la plus facile possible, le choix de réaliser un site web a été fait. D'autre part Scratch est plutôt une application web, ce qui explique un nombre de librairies plus conséquent qui sont écrites en Javascript et pour les navigateurs.

Les technologies disponibles pour réaliser un serveur web sont assez nombreuses et c'est pour celà que les technologies les plus connues et les plus maintenues ont été passées en revue afin de voir celle qui correspondrait le mieux aux besoins de l'application.

### Ruby On Rails

Ruby est un langage réputé pour sa facilité, sa beauté et son expressivité. Il s'agit d'un langage adapté, de manière générale, aux petits projets car il permet de générer une base de code rapidement.

Ruby on Rails est le framework web qui au langage Ruby. Il s'agit d'un framework fortement documenté, maintenu par la communauté Ruby, open-source et complet. Son paradigme "Convention over Configuration" est totalement en accord avec le langage et permet de mettre en place un site web très rapidement en un minimum d'étapes en évitant ainsi une longue configuration (base de données, etc...)

### Django

Python est facile de prise en main et est très complet, notamment grâce à son système de packaging (pip) et de modules qui permettent une réutilisation facile d'une librairie. Python est très réputé dans les domaines scientifiques mais aussi en tant qu'outil de scripting.

Django est le framework de référence pour Python. Unaniment adopté par la communauté Python, largement documenté, puissant et possédant un grand nombre de fonctionnalité. Un autre avantage est sa maturité et le côté professionnel du framework. Sa modulabilité, indépendance inter-modules, en fait un outil particulièrement adapté au travail en groupe et pour la répartition des tâches.

### Php (framework obligatoire)

### Node.js (framework obligatoire, ex : Express.js)

Nodes.js est un outil très à la mode dans le domaine du développement. Il permet entre autre :
* de générer des applications mobiles à l'aide de Javascript (Meteor),
* NoSQL,
* générer des applications desktop en se basant sur les règles du développement web (Electron, framework de GitHub)

En Node.js, aucun utilitaire n'est fourni nativement, ou fortement assimilé, pour faciliter le développement web. Ainsi l'utilisation d'un framework est nécessaire et Express.js est facile d'utilisation, tout en se basant sur des middlewares par assurer la modularité.  

### Comparaison

* Python > Ruby
* php natif => php framework trop compliqué
* node.js trop immature et pas adapté (trop de changement)

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
