// ======================================================================
// File System Module in Node
// ======================================================================

// const fs = require("fs");

// console.log(fs);

// // writeFile
// fs.writeFile("example.txt", "This is an example text.", (err) => {
//   if (err) throw err;
//   console.log("File has been saved!");
// });

// writeFile
// fs.appendFile("example.txt", " This is an updated text.", (err) => {
//   if (err) throw err;
//   console.log("File has been updated!");
// });

// rename
// fs.rename("example.txt", "example_renamed.txt", (err) => {
// if (err) throw err;
// console.log("File has been renamed!");
// });

// copyfile
// fs.copyFile("example.txt", "./copy/copy.txt", (err) => {
//   if (err) throw err;
//   console.log("File has been copied!");
// });

// unlink
// fs.unlink("./copy/copy.txt", (err) => {
//   if (err) throw err;
//   console.log("File has been deleted!");
// });

// remove directory
// Only removes empty directories by default
// fs.rm("./copy", { recursive: true }, (err) => {
//   if (err) throw err;
//   console.log("Directory has been removed!");
// });

// Task
// how to create folder
// how to read file
// how to read folder

// ======================================================================
// HTTP Module in Node
// ======================================================================

// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end("Hello from the server");
// });

// server.listen(8000, () => {
//     console.log("Server is listening on port 8000");
// });


// ======================================================================
// Web Server Using Express
// ======================================================================

const express = require("express");

const app = express();

// Built-in middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});

app.use((req, res, next) => {
  console.log("Second Middleware executed.");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.get("/about", (req, res) => {
  res.send("About Express");
});

// Test error handling middleware
app.get("/error", (req, res, next) => {
  return next(new Error("Something went wrong"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

app.listen(5000);
