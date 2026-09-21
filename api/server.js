const express = require("express");
const app = express();
let villes = [
  { id: 1, nom: "Lyon", visiter: "venissieux", manger: "tasty crousty", température: "il fait chaud" },
  { id: 2, nom: "Marseille", visiter: "felix pyat", manger: "tasty crousty", température: "il fait trop chaud" },
  { id: 3, nom: "Paris", visiter: "barbes", manger: "tasty crousty", température: "il fait froid" }
];

// GET /villess/2 -> renvoie le produit dont l id vaut 2
app.get("/villes/:id", (req, res) => {
  const id = Number(req.params.id);            // ":id" arrive en texte -> on convertit
  const ville = villes.find((p) => p.id === id);
  if (!ville) {                              // rien trouve
    return res.status(404).json({ erreur: "ville introuvable" });
  }
  res.json(ville);
});

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