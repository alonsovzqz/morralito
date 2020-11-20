const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const url = require("url");
const Datastore = require("nedb");

let userData = app.getAppPath("userData");
let dbExchange = path.join(userData, "data.db");
let dbUsers = path.join(userData, "users.db");
let db = new Datastore({
  filename: dbExchange,
  autoload: true,
  onload: (err) => {
    if (err) {
      console.error("Error loading the database: ", err);
    }
  },
  timestampData: true,
});

// Insert data into the the sell/buy database
ipcMain.handle("insert-data", (e, args) => {
  db.insert(args, (err, doc) => {
    if (err) console.error("ERROR: ", err);

    e.returnValue = `Added ${doc.operationId}`;
  });
});

// Get the last invoice ID
// TO-DO: Improve retrieving the data with larger number IDs
ipcMain.on("getLastInvoiceID", (e, args) => {
  db.findOne({})
    .sort({ operationId: -1 })
    .exec((err, doc) => {
      if (err) console.error("ERROR: ", err);

      e.returnValue = doc;
    });
});

const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
} = require("electron-devtools-installer");

let dev = false;
if (
  process.defaultApp ||
  /[\\/]electron-prebuilt[\\/]/.test(process.execPath) ||
  /[\\/]electron[\\/]/.test(process.execPath)
) {
  dev = true;
}

if (process.platform === "win32") {
  app.commandLine.appendSwitch("high-dpi-support", "true");
  app.commandLine.appendSwitch("force-device-scale-factor", "1");
}
const createWindow = () => {
  let indexPath = null;
  const win = new BrowserWindow({
    width: 1400,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (dev && process.argv.indexOf("--noDevServer") === -1) {
    indexPath = url.format({
      protocol: "http",
      host: "localhost:8080",
      pathname: "index.html",
      slashes: true,
    });
  } else {
    indexPath = url.format({
      protocol: "file:",
      pathname: path.join(__dirname, "dist", "index.html"),
      slashes: true,
    });
  }

  if (dev) {
    installExtension(REACT_DEVELOPER_TOOLS).catch((err) =>
      console.log("Error loading React DevTools: ", err)
    );
  }

  win.loadURL(indexPath);
};

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
