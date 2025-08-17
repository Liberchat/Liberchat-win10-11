const { app, BrowserWindow, ipcMain, session } = require('electron');
const path = require('path');
const fs = require('fs');
const os = require('os');

let mainWindow;
let splash;
let selectedServer = 'https://liberchat.cnt-ait-contact.noho.st/liberchat';

// Configuration et données utilisateur
const userDataPath = path.join(os.homedir(), '.liberchat');
const configFile = path.join(userDataPath, 'config.json');

let userConfig = {
    serverHistory: ['https://liberchat.cnt-ait-contact.noho.st/liberchat'],
    theme: 'auto', // 'light', 'dark', 'auto'
    lastServer: 'https://liberchat.cnt-ait-contact.noho.st/liberchat'
};

// Charger la configuration
function loadConfig() {
    try {
        if (!fs.existsSync(userDataPath)) {
            fs.mkdirSync(userDataPath, { recursive: true });
        }
        if (fs.existsSync(configFile)) {
            const data = fs.readFileSync(configFile, 'utf8');
            userConfig = { ...userConfig, ...JSON.parse(data) };
        }
        selectedServer = userConfig.lastServer;
    } catch (error) {
        console.log('Erreur lors du chargement de la config:', error);
    }
}

// Sauvegarder la configuration
function saveConfig() {
    try {
        fs.writeFileSync(configFile, JSON.stringify(userConfig, null, 2));
    } catch (error) {
        console.log('Erreur lors de la sauvegarde:', error);
    }
}

// Ajouter un serveur à l'historique
function addToHistory(serverUrl) {
    const history = userConfig.serverHistory.filter(url => url !== serverUrl);
    history.unshift(serverUrl);
    userConfig.serverHistory = history.slice(0, 5); // Garder seulement les 5 derniers
    userConfig.lastServer = serverUrl;
    saveConfig();
}

function createSplash() {
    splash = new BrowserWindow({
        width: 520,
        height: 340,
        frame: false,
        alwaysOnTop: true,
        resizable: false,
        roundedCorners: true,
        hasShadow: true,
        show: false,
        titleBarStyle: 'hidden',
        icon: path.join(__dirname, 'assets', process.platform === 'win32' ? 'icon.ico' : 'icon.png'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    splash.loadFile('index.html');
    splash.once('ready-to-show', () => splash.show());
}

function createWindow() {
    if (splash) {
        splash.close();
        splash = null;
    }
    mainWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 900,
        minHeight: 600,
        center: true,
        show: false,
        autoHideMenuBar: true,
        icon: path.join(__dirname, 'assets', process.platform === 'win32' ? 'icon.ico' : 'icon.png'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    mainWindow.loadURL(selectedServer);
    mainWindow.once('ready-to-show', () => {
        mainWindow.maximize();
        mainWindow.show();
    });
}

app.whenReady().then(() => {
    session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
        if (permission === 'media') {
            callback(true); // Autorise micro/caméra
        } else {
            callback(false);
        }
    });

    ipcMain.handle('request-microphone', async () => {
        return true;
    });

    // Charger la configuration au démarrage
    loadConfig();

    ipcMain.handle('get-config', () => {
        return userConfig;
    });

    ipcMain.handle('update-theme', (event, theme) => {
        userConfig.theme = theme;
        saveConfig();
        return theme;
    });

    ipcMain.handle('remove-from-history', (event, serverUrl) => {
        userConfig.serverHistory = userConfig.serverHistory.filter(url => url !== serverUrl);
        saveConfig();
        return userConfig.serverHistory;
    });

    ipcMain.on('server-selected', (event, server) => {
        selectedServer = server;
        addToHistory(server);
        if (splash) splash.close();
        createWindow();
    });

    createSplash();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createSplash();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
