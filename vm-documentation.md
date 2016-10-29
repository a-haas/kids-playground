# VM Documentation

Une VM de développement a pour objectif de fournir une plateforme commune à chacun des développeurs afin d'avoir le même environnement de travail, de minimiser les temps d'installations et aussi de pouvoir partager les bugs, problèmes et solutions trouvées sans avoir de phase de transition.

Ici la VM sera un serveur qui pourra être accessible depuis l'hôte afin de pouvoir conserver son environnement de développement habituel. Dans ce cas, il sera nécessaire de réaliser un partage de fichier entre les deux OS via FTP ou autre. L'invité sera accessible depuis une connexion SSH.<br/>
Le développement peut aussi être fait depuis l'invité.

Dans la suite, sera expliqué la méthode d'installation et d'utilisation de chacun des logiciels.

## Virtualbox

Le logiciel de virtualisation utilisé est Virtualbox dans sa version 5.1.6, de manière générale la version 5.1 sera préférable mais les différentes son compatibles entre elles.

Il est important de préciser que le réseau ajouté automatiquement par Virtualbox, "VirtualBox Host Only Network" doit être conservé, précisément dans le cas d'utilisation de la VM comme serveur.

## VM dev

L'ajout d'une machine virtuelle existante sur Virtualbox se fait de manière quasi automatique. Voici les marches à suivre

1. Machine > Ajouter > Sélectionner kids-playground.vbox
2. Fichier > Paramètres > Réseau > Réseau Hôte uniquement
	1. Sélectionner celui présent ou en créer un nouveau si besoin > clic droit > Editer le réseau privé hôte
	2. Dans l'onglet carte : adresse IPv4 : 192.168.56.1, masque réseau IPv4 : 255.255.255.0
	3. Dans l'onglet serveur DHCP : adresse du serveur : 192.168.56.100, Masque serveur : 255.255.255.0, limite inférieure : 192.168.56.101, limite supérieure : 192.168.56.254
3. Machine > Configuration > Réseau 
	1. Carte 1 : mode d'accès réseau NAT (présent par défaut)
	2. Carte 2 : activer la carte réseau > mode d'accès : Réseau privé hôte > choisir le réseau précedemment configuré
4. Test de la machine : ssh kidsplayground@192.168.56.101

## Python

La version de python utilisé sera la 3.5.1 qui est installé par défaut. Le problème étant qu'Ubuntu utilisé aussi python 2.7 et que celle-ci est la version par défaut. Afin de pallier à ce défaut nous allons utiliser un environnement virtuel qui prendra python 3.5.1 en tant que version de python par défaut. Afin de l'activer il suffit d'utiliser la commande `source /home/kidsplayground/kp-venv/bin/activate`. Une fois la commande exécutée `python --version` retourne bien le numéro 3.5.1.

## Django

La version de Django utilisée est la version 1.10.2. Le tutoriel utilisé pour se familiariser avec le framework Django est le suivant <https://www.gitbook.com/book/djangogirls/djangogirls-tutorial/details/fr>

psycopg2 est la librairie python qui se chargera de la liaison à la base de données Postgresql.

Le serveur Django est lancé automatiquement à l'aide de la commande suivante `/home/kidsplayground/kp-start.sh`.

## Postgresql

Une base de données kidsplayground a été créée pour l'utilisateur kidsplayground. L'application se basera sur cette utilisateur et la base associée.

## Nginx and uwsgi

Pour connecter Python, Django et Nginx il faut utiliser l'utilitaire uwsgi qui se charge de créer le serveur pour notre application Django. Pour le moment la liaison entre Django et Nginx n'est pas encore faite. Celle-ci sera réalisé de manière ultérieure, principalement pour un environnement de pré-production et de production.
