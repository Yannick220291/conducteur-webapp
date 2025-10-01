# 🚗 Conducteur WebApp

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)

## Description du projet

Conducteur WebApp est une application web moderne développée avec Next.js et TypeScript, conçue pour offrir une expérience utilisateur fluide et réactive. Ce projet permet de gérer des informations relatives aux conducteurs, avec une interface utilisateur intuitive et des performances optimisées.

### Fonctionnalités clés
- Interface utilisateur réactive et moderne.
- Utilisation de TypeScript pour une meilleure sécurité des types.
- Architecture basée sur des composants pour une maintenance facilitée.

## Stack Technologique

| Technologie  | Description |
|--------------|-------------|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white) | Framework React pour le rendu côté serveur. |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | Langage de programmation basé sur JavaScript avec typage statique. |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | Environnement d'exécution JavaScript pour le développement côté serveur. |

## Instructions d'installation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm (ou yarn)

### Étapes d'installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Yannick220291/conducteur-webapp.git
   cd conducteur-webapp
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Configurez les variables d'environnement si nécessaire. (Aucune variable d'environnement spécifique n'a été détectée dans le code.)

## Utilisation

Pour démarrer le projet, utilisez la commande suivante :
```bash
npm run dev
```
Cela lancera l'application en mode développement. Vous pouvez accéder à l'application à l'adresse `http://localhost:3000`.

## Structure du projet

Voici un aperçu de la structure du projet :

```
conducteur-webapp/
├── public/                # Contient les fichiers statiques accessibles au public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/                   # Contient le code source de l'application
│   └── app/               # Dossier principal de l'application
│       ├── conducteur/     # Composant spécifique pour la gestion des conducteurs
│       │   ├── conducteur.css  # Styles spécifiques au composant conducteur
│       │   └── page.tsx       # Page principale du composant conducteur
│       ├── favicon.ico      # Icône de l'application
│       ├── globals.css      # Styles globaux
│       ├── layout.tsx       # Mise en page générale de l'application
│       ├── page.module.css   # Styles pour la page principale
│       └── page.tsx         # Page principale de l'application
├── .gitignore              # Fichiers à ignorer par Git
├── eslint.config.mjs       # Configuration ESLint
├── next.config.ts          # Configuration de Next.js
├── package-lock.json       # Fichier de verrouillage des dépendances
├── package.json            # Dépendances et scripts du projet
├── README.md               # Documentation du projet
├── server.js               # Serveur pour l'application
└── tsconfig.json           # Configuration TypeScript
```

### Explication des fichiers principaux
- **public/** : Contient les ressources statiques comme les images et les icônes.
- **src/app/** : Contient le code source de l'application, y compris les composants et les styles.
- **server.js** : Fichier principal pour démarrer le serveur.
- **package.json** : Liste des dépendances et scripts du projet.

## Contribuer

Les contributions sont les bienvenues ! Pour contribuer, veuillez suivre ces étapes :
1. Forkez le dépôt.
2. Créez une nouvelle branche (`git checkout -b feature/nouvelle-fonctionnalité`).
3. Apportez vos modifications et validez-les (`git commit -m 'Ajout d\'une nouvelle fonctionnalité'`).
4. Poussez vos changements (`git push origin feature/nouvelle-fonctionnalité`).
5. Ouvrez une Pull Request.

Nous vous remercions de votre intérêt pour le projet !
