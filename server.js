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

// Hjälpfunktion: normalisera kategori-param till nyckeln i challenges.json
function normalizeCategory(param) {
  if (!param) return null;
  const p = String(param).toLowerCase();
  if (p === "tee" || p === "utkast") return "utkast"; // UI: "tee" motsvarar "utkast"
  if (p === "inspel" || p === "approach") return "inspel";
  if (p === "putt" || p === "putts") return "putt";
  return p; // fallback till det som skickats in
}

// Startsidan
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Slumpa fram ett kort (alla kategorier eller specifik via query-param) 
app.get("/draw", (req, res) => {
  const normalized = normalizeCategory(req.query.category);

  if (normalized) {
    const cards = imagesData[normalized];
    if (!cards || !Array.isArray(cards) || cards.length === 0) {
      return res.status(400).json({ error: "Ogiltig kategori" });
    }
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selected = cards[randomIndex];
    return res.json(selected);
  }

  const randomIndex = Math.floor(Math.random() * allCards.length);
  const selected = allCards[randomIndex];
  return res.json(selected);
});

// Slumpa fram ett kort från en viss kategori
app.get("/drawCategory", (req, res) => {
  const normalized = normalizeCategory(req.query.category);
  if (!normalized || !imagesData[normalized]) {
    return res.status(400).json({ error: "Ogiltig kategori" });
  }
  const cards = imagesData[normalized];
  const randomIndex = Math.floor(Math.random() * cards.length);
  const selected = cards[randomIndex];
  res.json(selected);
});

// Starta servern på alla nätverksadresser
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servern kör på port ${PORT}`);
});
