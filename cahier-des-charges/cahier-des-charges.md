## Contexte

L'informatique prend une place de plus en plus importante dans notre société : on estime que 90% des emplois nécessiteront des compétences numériques d'ici 2020, l'accès à internet est considéré comme une composante de la liberté d'expression, les personnes nées ces dernières décennies sont qualifiées d'enfants du numérique (*digital native*), ... Pourtant, beaucoup de gens ignorent encore comment fonctionne un programme, ce qui limite l'usage qu'ils peuvent faire des outils numériques.

Scratch a été développé par le MIT Media Lab pour combler cette lacune dès l'âge de 7 ans. Disponible gratuitement sur internet, il permet de se familiariser de façon ludique avec les concepts informatiques de base, tout en exprimant sa créativité dans des projets partagés en communauté. L'apprentissage de la programmation développe en outre des compétences plus générales : résolution de problèmes, travail en équipe, approche constructive de l'erreur, recherche d'information, ... Aujourd'hui, Scratch compte plus de 10 millions d'utilisateurs, âgés majoritairement de 8 à 16 ans, et est préconisé en France dans le cadre de l'introduction de la programmation à l'école et au collège.

ScratchJr est né de la volonté de prolonger le succès de Scratch aux enfants de 5 à 7 ans : il en reprend les principes dans une interface simplifiée, basée entièrement sur des icônes, afin que des enfants ne sachant pas lire puissent l'utiliser même sans être accompagnés.

ScratchJr est conçu pour une utilisation tablette, et n'est donc porté que sur les systèmes d'exploitation Android, iOS et Chrome OS. Notre objectif est d'élargir son public en développant une version utilisable dans les navigateurs web.

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

## Outils de développement

Afin d'éviter un maximum les incohérences et les pertes de temps (installation défectueuse, problème de bibliothèque, problème lié à un mauvais formatage des fichiers suite à l'utilisation de système d'exploitation, etc...) la mise en place d'un environnement sera à réaliser. 

### IDE

Il est difficile de réaliser un IDE pour Python, ou tout autre langage dynamique, car cela requiert, dans la plupart des cas l'utilisation de la documentation du code afin de pouvoir proposer une auto-complétion ou une redirection de fichiers (se déplacer d'une instance d'objet à la définition de sa classe). Il est également souvent nécessaire d'installer un plugin spécialisé pour le framework en question. Donc les IDEs sont souvent long à paramétrer, surtout lors de la première utilisation, mais permettent cependant de repérer un certain nombre d'erreur statique, autrement impossible à trouver avec un langage tel que Python, ou alors d'accélérer le développement en utilisant l'auto-complétion. En Python, la référence au niveau IDE est PyCharm qui semble le plus adapté.

Malgré cela les éditeurs de texte sont souvent assez utilisés dans le développement web et sont suffisament puissants pour fournir les outils nécessaires. Sublime Text ou bien Vim sont également une alternative envisageable.

### Machine virtuelle

Pour éviter tout conflit au niveau de la plateforme de développement (incohérence entre Django sur Windows ou sur Linux, par exemple) une machine virtuelle sera a créer, à documenter et à fournir à tous les membres du groupe. L'avantage de ce système est qu'une seule personne du groupe a à se pencher sur l'installation des outils, du framework ou bien encore de la mise en place du serveur, et qu'ainsi les autres membres peuvent commencer à réfléchir à une telle solution.

La machine virtuelle devra donc contenir Python, son outil de packaging (pip, virtualenv, etc...), le framework Django, installation d'un serveur (Nginx), mise en place d'une base de données (Postgresql ou MySql), tous les outils qui sont nécessaires lors d'une connexion ssh (Vim, OpenSsh, autres). A l'aide de la connexion ssh les fichiers pourront donc être modifié depuis l'OS maître et envoyé sur la machine invitée. Le but étant de simuler un vrai serveur localement.

La machine virtuelle sera crée et fourni à l'aide de l'utilitaire VirtualBox qui permet de gérer des machines virtuelles simplement, de gérer une interface réseau entre le maître et l'invité et d'exporter la machine ainsi créée.

### Gestion des versions

Afin de gérer les versions et pouvoir en plus synchroniser les fichiers entre chacun des développeurs, la plateforme GitHub et l'utilisation du logiciel Git sera faite. Le lien du projet GitHub est le suivant [kids-playground].

### Documentation des outils

Une documentation des outils sera réalisé au fur et à mesure, et sera disponible sur GitHub. Elle contiendra les éléments d'installation, en plus d'une explication, de la machine virtuelle, les éléments d'installation de l'IDE ou de l'éditeur de texte en plus de la configuration des plugins. La documentation devra également contenir l'utilisation recommandée de GitHub.

## Gestion de projet (Golda) 2 pages

Méthode agile (explication + comment on compte appliquer la méthode)

### Outils de gestion de projets

*Trello est basé sur une organisation des projets en planches listant des cartes, chacune représentant des tâches, et permet ainsi de répartir des tâches de façon très simple. En outre, il peut être contrôlé depuis une conversation Slack et intégrer une branche GitHub.
*Slack est une plate-forme de collaboration en ligne fortement personnalisable. On peut y échanger des messages en privé ou dans des salons de discussion, et elle intègre de nombreux services, dont GitHub et une fonction recherche.
*GitHub est un service alliant l'hébergement de projets de développement avec le logiciel de gestion de versions Git. Fort d'une communauté de plus de 14 millions d'utilisateur, il est particulièrement adapté pour les projets à grande échelle de développement de logiciels libres.
* Trac est une application de gestion complète de projet par Internet, intégrant également le suivi de problèmes, cependant il ne permet pas facilement d'accéder à une communauté telle que celle de GitHub.
* Redmine est une application de gestion de projets presque complète, mais n'intègre pas les tests unitaires

### Outils retenus

GitHub peut être utilisé en tant qu'outil de gestion de projets grâce au système des issues qui permet la demande de fonctionnalités ou de correction de bug. Cependant ce système est adéquat lors d'un développement à échelle nationale voir internationale, tel que les systèmes open-source, mais pas pour un projet de cette taille, en plus de rajouter de complexité dans la gestion, car les issues ne présente pas le plan entier de développement.

Trac et Redmine sont deux outils de gestion de projets complets mais l'utilisation de ces outils sont inadaptés pour le travail, sur un seul projet, d'une petite équipe. Ces outils sont plutôt à l'usage des entreprises qui veulent pouvoir avoir une grande visibilité sur le projet, temps d'avancement, temps prévisionnel / temps requis pour tâche, etc... Ainsi l'outil est même trop complet pour notre utilisation.
Le bénéfice de travailler avec un outil de gestion de projet complet ne semble donc pas le plus adapté car pour une équipe de trois personnes, une répartition des tâche en utilisant Trello et une discussion Slack afin de se synchroniser sur les différents objectifs, est largement suffisant, en plus des meetings réguliers.

## Liens utiles

[kids-playground]: https://github.com/a-haas/kids-playground 
