<div align="center">
  <a href="https://github.com/Liberchat/Liberchat">
    <img src="assets/icon.ico" alt="Liberchat Logo" width="96" height="96" style="margin-bottom: 10px;" />
  </a>
  
  <h1 style="margin-top: 0;">Liberchat Desktop 2.0.1 - Windows</h1>
  
  <a href="https://github.com/Liberchat/Liberchat">Main project on GitHub</a>
  
  <br/>
  
  <img src="https://img.shields.io/badge/Version-2.0.1-brightgreen"/>
  <img src="https://img.shields.io/badge/Electron-22.x-blue?logo=electron"/>
  <img src="https://img.shields.io/badge/Windows-10/11-blue?logo=windows"/>
  <img src="https://img.shields.io/badge/UI-Modern-red"/>
  <img src="https://img.shields.io/badge/license-MIT-green"/>
  
  <br/>
  
  <em>Modern messaging application for Windows with server history and customizable themes.</em>
</div>

##  What's New in Version 2.0.1

###  Server History
- **Smart Dropdown Menu**: Automatically remembers your last 5 used servers.
- **Quick Selection**: Click on a server from the history to select it instantly.
- **Easy Management**: Remove unwanted servers with a single click.
- **No Duplicates**: Automatically prevents duplicate entries.

###  Theme System
- **Dark/Light Mode**: Switch between themes according to your preferences.
- **Automatic Mode**: Automatically follows your system theme.
- **Persistence**: Your preferences are saved between sessions.
- **Complete Interface**: All elements adapt to the chosen theme.

###  Smart Save
- **Persistent Configuration**: History and theme are saved automatically.
- **Local File**: Data stored in `%USERPROFILE%\.liberchat\config.json`.
- **Error Recovery**: Robust management of corrupted data.

## Main Features
- **Styled Splash Screen** with server selection.
- **Microphone Compatibility** (automatic permissions).
- **Security**: contextIsolation, secure preload.
- **Maximized Main Window**, no menu bar.
- **System Icon**: Correct display in the taskbar.
- **Windows Build**: MSI installer and portable EXE.

## Installation & Launch

```bash
# Install dependencies
npm install

# Launch in development mode
npm start

# Generate Windows packages (MSI, portable)
npm run build
```

Generated files are located in the `dist/` folder.

## Installation on Windows

After compilation (`npm run build`), you will find in the `dist/` folder:

- **MSI Installer** (`.msi`): Full system installation.
  - Double-click on `Liberchat Setup *.msi`.
  - Follow the installation wizard.
  - The application will be accessible from the Start menu.

## Server Configuration
At startup, enter the URL of the Liberchat server of your choice in the splash screen.

## Main Dependencies
- [Electron](https://www.electronjs.org/) ^22.x
- [electron-builder](https://www.electron.build/)

## License
MIT

---
Modern project, optimized for Windows 10 and 11 with a native and high-performance interface.

## Usage

### Server Configuration
1. **First Launch**: Enter the Liberchat server URL in the splash screen.
2. **Subsequent Servers**: Click in the URL field to see your server history.
3. **Quick Selection**: Choose a server from the dropdown list.

### Customization
- **Change Theme**: Click on the 🌙/☀️ icon in the top right.
- **Manage History**: Use the ✕ button to remove servers from the history.

### Default Server
The application connects by default to: `https://liberchat.cnt-ait-contact.noho.st/liberchat`

##  Changelog v2.0.1
-  Added server history with dropdown menu.
-  Dark/light/automatic theme system.
-  Persistent saving of user preferences.
-  Fixed icon display in the taskbar.
-  Improved and more intu
