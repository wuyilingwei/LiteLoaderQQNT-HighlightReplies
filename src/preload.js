const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("LiteLoaderQQNT", {
  updateStyle: (callback) =>
    ipcRenderer.on("LiteLoaderQQNT.custom_css.updateStyle", callback),
  rendererReady: () =>
    ipcRenderer.send("LiteLoaderQQNT.custom_css.rendererReady"),
});
