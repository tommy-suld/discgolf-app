const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000; // använd miljövariabeln eller fallback

// Statisk mapp
app.use(express.static(path.join(__dirname, "public")));

// Läs in JSON-filen med kategoriserade bilder och text
const imagesPath = path.join(__dirname, "challenges.json");
let imagesData = {};
try {
  imagesData = JSON.parse(fs.readFileSync(imagesPath, "utf8"));
} catch (err) {
  console.error("Kunde inte läsa challenges.json:", err);
  process.exit(1); // stoppa så vi inte kör utan data
}

// Slå ihop alla kategorier till en enda lista för slumpning
const allCards = [];
Object.values(imagesData).forEach(categoryArray => {
  allCards.push(...categoryArray);
});

// Startsidan
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Slumpa fram ett kort från alla kategorier
app.get("/draw", (req, res) => {
  const randomIndex = Math.floor(Math.random() * allCards.length);
  const selected = allCards[randomIndex];
  res.json(selected);
});

// Slumpa fram ett kort från en viss kategori
app.get("/drawCategory", (req, res) => {
  const category = req.query.category;
  if (!category || !imagesData[category]) {
    return res.status(400).json({ error: "Ogiltig kategori" });
  }
  const cards = imagesData[category];
  const randomIndex = Math.floor(Math.random() * cards.length);
  const selected = cards[randomIndex];
  res.json(selected);
});

// Starta servern på alla nätverksadresser
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servern kör på port ${PORT}`);
});
