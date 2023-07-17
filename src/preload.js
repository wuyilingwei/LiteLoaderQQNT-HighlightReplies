const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("HighlightReplies", {
  updateStyle: (callback) =>
    ipcRenderer.on("LiteLoaderQQNT.HighlightReplies.updateStyle", callback),
  rendererReady: () =>
    ipcRenderer.send("LiteLoaderQQNT.HighlightReplies.rendererReady"),
});
