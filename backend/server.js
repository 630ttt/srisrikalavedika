const path = require("path");
const { pathToFileURL } = require("url");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(__dirname, ".env") });

const appServerPath = path.join(__dirname, "..", "Kalavedika_HRAGROUPS", "server.js");

import(pathToFileURL(appServerPath).href).catch((error) => {
  console.error("Failed to start application server:", error);
  process.exit(1);
});
