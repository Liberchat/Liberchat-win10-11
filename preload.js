const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  requestMicrophone: () => ipcRenderer.invoke('request-microphone'),
  selectServer: (server) => ipcRenderer.send('server-selected', server),
  getConfig: () => ipcRenderer.invoke('get-config'),
  updateTheme: (theme) => ipcRenderer.invoke('update-theme', theme),
  removeFromHistory: (serverUrl) => ipcRenderer.invoke('remove-from-history', serverUrl)
});
