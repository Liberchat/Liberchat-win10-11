<div align="center">
  <a href="https://github.com/Liberchat/Liberchat">
    <img src="assets/icon.ico" alt="Liberchat Logo" width="96" height="96" style="margin-bottom: 10px;" />
  </a>
  
  <h1 style="margin-top: 0;">Liberchat Desktop 2.0.1</h1>
  
  <a href="https://github.com/Liberchat/Liberchat">Projet principal sur GitHub</a>
  
  <br/>
  
  <img src="https://img.shields.io/badge/Version-2.0.1-brightgreen"/>
  <img src="https://img.shields.io/badge/Electron-22.x-blue?logo=electron"/>
  <img src="https://img.shields.io/badge/Linux-compatible-success?logo=linux"/>
  <img src="https://img.shields.io/badge/UI-Modern-red"/>
  <img src="https://img.shields.io/badge/license-MIT-green"/>
  
  <br/>
  <em>Application de messagerie moderne avec historique des serveurs et thèmes personnalisables.</em>
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
- **Fichier local** : Données stockées dans `~/.liberchat/config.json`
- **Récupération d'erreur** : Gestion robuste des données corrompues

## Fonctionnalités principales
- **Splash screen** stylisé avec choix du serveur
- **Compatibilité micro** (permissions automatiques)
- **Sécurité** : contextIsolation, preload sécurisé
- **Fenêtre principale maximisée, sans barre de menu**
- **Icône système** : Affichage correct dans la barre des tâches
- **Build universel Linux** : AppImage, deb, rpm, snap

## Installation & Lancement

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm start

# Générer les paquets pour Linux (AppImage, deb, rpm, snap)
npm run build
```

Les fichiers générés se trouvent dans le dossier `dist/`.

## Installation sur Linux

Après compilation (`npm run build`), vous trouverez dans le dossier `dist/` :

- **AppImage** (`.AppImage`) : universel, exécutable sur la plupart des distributions.
  - Rendez le fichier exécutable : `chmod +x Liberchat-*.AppImage`
  - Lancez-le : `./Liberchat-*.AppImage`

- **Debian/Ubuntu** (`.deb`) :
  - Installez avec : `sudo dpkg -i Liberchat-*.deb`
  - Ou double-cliquez sur le fichier dans votre gestionnaire de fichiers.

- **Fedora/RedHat** (`.rpm`) :
  - Installez avec : `sudo rpm -i Liberchat-*.rpm`

- **Snap** (`.snap`) :
  - Installez avec : `sudo snap install --dangerous Liberchat-*.snap`

> **Astuce** : AppImage fonctionne sur la plupart des distributions sans installation système.

## Configuration du serveur
Au démarrage, saisissez l’URL du serveur Liberchat de votre choix dans le splash screen.

## Dépendances principales
- [Electron](https://www.electronjs.org/) ^22.x
- [electron-builder](https://www.electron.build/)

## Licence
MIT

---
Projet moderne, pensé pour la compatibilité et la simplicité d’utilisation sur toutes les distributions Linux.


## 🚀 Utilisation

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