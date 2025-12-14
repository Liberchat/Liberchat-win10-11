<div align="center">
  <a href="https://github.com/Liberchat/Liberchat">
    <img src="assets/icon.ico" alt="Liberchat Logo" width="96" height="96" style="margin-bottom: 10px;" />
  </a>
  
  <h1 style="margin-top: 0;">Liberchat Desktop 2.0.1 - Windows</h1>
  
  <a href="https://github.com/Liberchat/Liberchat">Projet principal sur GitHub</a>
  
  <br/>
  
  <img src="https://img.shields.io/badge/Version-2.0.1-brightgreen"/>
  <img src="https://img.shields.io/badge/Electron-22.x-blue?logo=electron"/>
  <img src="https://img.shields.io/badge/Windows-10/11-blue?logo=windows"/>
  <img src="https://img.shields.io/badge/UI-Modern-red"/>
  <img src="https://img.shields.io/badge/license-MIT-green"/>
  
  <br/>
  <em>Application de messagerie moderne pour Windows avec historique des serveurs et thèmes personnalisables.</em>
</div>

## ✨ Nouveautés version 2.0.1

### 🕒 Historique des serveurs
- **Menu déroulant intelligent** : Mémorise automatiquement vos 5 derniers serveurs utilisés
- **Sélection rapide** : Cliquez sur un serveur de l'historique pour le sélectionner instantanément
- **Gestion facile** : Supprimez les serveurs indésirables d'un simple clic
- **Pas de doublons** : Évite automatiquement les entrées en double

### 🎨 Système de thèmes
- **Mode sombre/clair** : Basculez entre les thèmes selon vos préférences
- **Mode automatique** : Suit automatiquement le thème de votre système
- **Persistance** : Vos préférences sont sauvegardées entre les sessions
- **Interface complète** : Tous les éléments s'adaptent au thème choisi

### 💾 Sauvegarde intelligente
- **Configuration persistante** : Historique et thème sauvegardés automatiquement
- **Fichier local** : Données stockées dans `%USERPROFILE%\.liberchat\config.json`
- **Récupération d'erreur** : Gestion robuste des données corrompues

## Fonctionnalités principales
- **Splash screen** stylisé avec choix du serveur
- **Compatibilité micro** (permissions automatiques)
- **Sécurité** : contextIsolation, preload sécurisé
- **Fenêtre principale maximisée, sans barre de menu**
- **Icône système** : Affichage correct dans la barre des tâches
- **Build Windows** : Installateur MSI et portable EXE

## Installation & Lancement

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm start

# Générer les paquets pour Windows (MSI, portable)
npm run build
```

Les fichiers générés se trouvent dans le dossier `dist/`.

## Installation sur Windows

Après compilation (`npm run build`), vous trouverez dans le dossier `dist/`:

- **Installateur MSI** (`.msi`): Installation système complète
  - Double-cliquez sur `Liberchat Setup *.msi`
  - Suivez l'assistant d'installation
  - L'application sera accessible depuis le menu Démarrer



## Configuration du serveur
Au démarrage, saisissez l'URL du serveur Liberchat de votre choix dans le splash screen.

## Dépendances principales
- [Electron](https://www.electronjs.org/) ^22.x
- [electron-builder](https://www.electron.build/)

## Licence
MIT

---
Projet moderne, optimisé pour Windows 10 et 11 avec une interface native et performante.

##  Utilisation

### Configuration du serveur
1. **Premier lancement** : Saisissez l'URL du serveur Liberchat dans le splash screen
2. **Serveurs suivants** : Cliquez dans le champ URL pour voir l'historique de vos serveurs
3. **Sélection rapide** : Choisissez un serveur dans la liste déroulante

### Personnalisation
- **Changer de thème** : Cliquez sur l'icône 🌙/☀️ en haut à droite
- **Gérer l'historique** : Utilisez le bouton ✕ pour supprimer des serveurs de l'historique

### Serveur par défaut
L'application se connecte par défaut à : `https://liberchat.cnt-ait-contact.noho.st/liberchat`

## 📋 Changelog v2.0.1
- ✅ Ajout de l'historique des serveurs avec menu déroulant
- ✅ Système de thèmes sombre/clair/automatique
- ✅ Sauvegarde persistante des préférences utilisateur
- ✅ Correction de l'affichage de l'icône dans la barre des tâches
- ✅ Interface utilisateur améliorée et plus intuitive
