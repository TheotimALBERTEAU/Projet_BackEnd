# Projet BackEnd - Gestion d'Articles

Ce projet est une API REST développée avec **Node.js** et **Express**, structurée selon le pattern **DAO (Data Access Object)**. Elle permet la gestion d'articles via une base de données **MongoDB** (via Mongoose) ou un système de **Mock** pour les tests.

## 🚀 Technologies Utilisées

* **Runtime :** Node.js
* **Framework :** Express.js
* **Base de données :** MongoDB avec Mongoose / MySQL avec Sequelize
* **Logging :** Système de logs personnalisé (`app.log`) avec Winston

## 🛠️ Installation et Lancement

1. **Cloner le dépôt :**
```bash
git clone https://github.com/TheotimALBERTEAU/Projet_BackEnd.git
cd Projet_BackEnd

```


2. **Installer les dépendances :**
```bash
npm install

```


3. **Configuration :**
   Modifie le fichier `.env` à la racine pour y configurer tes variables (Port, URL de connexion MongoDB).

| Variable       | Valeur                                    |
|----------------|-------------------------------------------|
| DB_MODE        | "mongodb" ou "mysql"                      |
| MONGODB_URI    | "mongodb://IP:port/nom_de_la_db" en local |
| MYSQL_USER     | "nom_d'utilisateur_mysql"                 |
| MYSQL_PASSWORD | "mot_de_passe_mysql"                      |
| MYSQL_URI      | "nom_de_la_db_mysql"                      |
| MYSQL_HOST     | "host_de_la_db" en local : "localhost"    |
| MYSQL_DIALECT  | "dialect_de_la_db" ici : "mysql"          |


4. **Démarrer l'application :**
```bash
node app.js

```



## 📍 Endpoints de l'API

L'API est accessible sur les routes suivantes (préfixées par `/articles` selon ta structure de routes) :

| Méthode | Route | Description | Corps de la requête (Body) |
| --- | --- | --- | --- |
| **GET** | `/articles` | Récupère la liste de tous les articles. | Aucun |
| **POST** | `/save` | Ajoute un nouvel article en base. | Voir ci-dessous |

### Exemple de JSON pour `/save` :

```json
{
  "title": "Nom_de_l'article",
  "desc": "description_de_l'article.",
  "author": "Auteur_de_l'article",
  "imgPath": "url_de_l'image"
}

```

## 📂 Structure du Projet
```text
.
├── logs/
│   └── app.log              # Fichier de logs de l'application
├── src/
│   ├── dao/                 # Data Access Objects (Gestion des données)
│   │   ├── mock/            # Données de test (Simulacres)
│   │   │   └── daoarticle-mock.js
│   │   ├── mongoose/        # Implémentation MongoDB
│   │   │   ├── models/      # Schémas Mongoose
│   │   │   ├── connection.js
│   │   │   └── daoarticle-mongoose.js
│   │   ├── dao-factory.js   # Sélecteur de source de données
│   │   └── idaoarticle.js   # Interface ou classe de base pour les articles
│   ├── routes/              # Définition des routes de l'API
│   │   └── articles-routes.js
│   ├── services/            # Logique métier intermédiaire
│   │   ├── articles-service.js
│   │   └── service-helper.js
│   ├── app.js               # Point d'entrée principal (Serveur Express)
│   └── logger.js            # Configuration du système de logging
├── .env                     # Variables d'environnement (Port, Mongo URI...)
├── .gitignore               # Fichiers à exclure de Git (node_modules, .env...)
├── package.json             # Dépendances et scripts du projet
├── package-lock.json        # Verrouillage des versions des dépendances
└── README.md                # Documentation du projet
```

## 👤 Auteur

**Théotim ALBERTEAU**
