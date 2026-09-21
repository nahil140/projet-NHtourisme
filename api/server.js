const express = require("express");
const app = express();
let villes = [
  { id: 1, nom: "Lyon", visiter: "venissieux", manger: "tasty crousty" },
  { id: 2, nom: "Marseille", visiter: "felix pyat", manger: "tasty crousty" },
  { id: 3, nom: "Paris", visiter: "barbes", manger: "tasty crousty" }
];

// GET /villes -> renvoie tout le tableau
app.get("/villes", (req, res) => {
  res.json(villes);
}); 

// Route de test : GET /
app.get("/", (req, res) => {
  res.json({ message: "Mon API fonctionne" });
});

// On demarre le serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});