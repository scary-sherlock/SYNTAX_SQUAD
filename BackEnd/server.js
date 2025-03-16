const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// Print the current directory for debugging
console.log("Current Directory:", __dirname);

// Define the correct file path
const filePath = path.join(__dirname, "..", "synytax_sqaud_main", "GCETSS", "templates", "index.html");


// Check if the file exists before starting the server
if (!fs.existsSync(filePath)) {
  console.error("⚠️ ERROR: index.html does not exist at:", filePath);
} else {
  console.log("✅ index.html found at:", filePath);
}

// Serve static files
app.use(express.static(path.join(__dirname, "..", "synytax_sqaud_main", "GCETSS", "templates")));
app.use("/static", express.static(path.join(__dirname, "..", "synytax_sqaud_main", "GCETSS", "static")));
app.use("/images", express.static(path.join(__dirname, "..", "synytax_sqaud_main", "GCETSS", "images")));
app.use("/css", express.static(path.join(__dirname, "..", "synytax_sqaud_main", "GCETSS", "css")));
//for opd
app.use("/opd", express.static(path.join(__dirname, "..", "OPD")));
//user
app.use("/user", express.static(path.join(__dirname, "..", "user")));
//doctor
app.use("/Doctor", express.static(path.join(__dirname, "..", "doctor")));
//admin
app.use("/admin", express.static(path.join(__dirname, "..", "admin")));
app.get("/", (req, res) => {
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send("Internal Server Error");
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
