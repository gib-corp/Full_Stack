# 🔥 Vite - React - Node.js - Express - MySQL

> Cette première étape consiste à structurer le projet avec une partie **client** (React) et une partie **serveur** (Express). Les dépendances sont installées, le serveur est configuré, et la connexion entre les deux est établie avec **CORS**.

### 🛠️ Détails des dossiers
- **client/** : Le dossier contenant la partie **client** générée par Vite. **React**
- **server/** : Le dossier contenant la partie **serveur**. Il contient le fichier **server.js** qui gérera l'API. **Express**

```bash
Project/
├── 📁 client/ # Généré avec Vite
└── 📁 server/ # À créer manuellement
    └── 📄 server.js
```

## 📂 Création du Client

> **Étape 1** : Générer un projet frontend avec Vite dans un dossier `client/`.

```bash
npm create vite@latest client
```


## 📂 Création du Server

> **Étape 2** : Créer un fichier `package.json` avec des valeurs par défaut pour gérer les dépendances dans un dossier `server/`.

```bash
npm init -y
```


## 📄 Création de `server.js`

> **Étape 3** : Créer un fichier server.js dans server/ et modifier "main" dans package.json en le remplaçant par "server.js".

```bash
└── server/
    └── server.js
```


## ⌨️ Installation des Dépendances

> **Étape 4** : Installer Express pour gérer le serveur backend et Nodemon pour recharger automatiquement le serveur à chaque modification et Cors qui permet d'activer le partage des ressources entre origines différentes ( Express & React ) dans le dir `server/`.

```bash
npm i express
```

```bash
npm i cors
```

```bash
npm i --save-dev nodemon
```


## 💾 Configuration des Scripts

> **Étape 5** : Ajouter des scripts dans le fichier `server/package.json` pour faciliter le démarrage du serveur.

```json
{
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  }
}
```


## ⌨️ Serveur Express

> **Étape 6** : Mettre en place un serveur Express `localhost:3000` et retournant un message JSON, dans le fichier `server/server.js`.

```js
import express from 'express';

const app = express();

app.get('/api', (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen(3000, () => console.log('✅ Server started: http://localhost:3000'));
```


## ⌨️ Configuration de Cors

> **Étape 7** : Configurer CORS pour restreindre l’accès à l’API uniquement à `localhost:5173` ( Server Vite par defaut ), dans le fichier `server/server.js`.

> CORS permet aux applications Web clientes chargées dans un domaine particulier d'interagir avec les ressources d'un autre domaine. Cela est utile, car les applications complexes font souvent référence à des API et à des ressources tierces dans leur code côté client.

```js
import cors from "cors"
const corsOptions = {
    origin: ["http://localhost:5173/"]
}

app.use(cors(corsOptions))
```
