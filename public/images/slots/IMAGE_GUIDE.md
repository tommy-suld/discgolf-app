# 🎰 Bildguide för Gambler Slot Machine

## 📐 Bildspecifikationer (ALLA BILDER)

```
Dimension: 800px × 500px (@2x retina)
eller:     400px × 250px (@1x standard)

Aspect Ratio: 1.6:1 (16:10) - LANDSCAPE
Format: PNG med transparent bakgrund
Filstorlek: < 100KB per bild
Färgrymd: RGB
```

## 📁 Bildlista per kategori

### 1️⃣ KAST (images/slots/kast/)
- `backhand_left.png` - ⬅️ Backhand
- `backhand_right.png` - ➡️ Backhand
- `forehand_left.png` - ⬅️ Forehand
- `forehand_right.png` - ➡️ Forehand
- `fritt_val.png` - Fritt val (bonus)

**Färgtema:** Cyan (rgba(0, 212, 255))

---

### 2️⃣ VINKEL (images/slots/vinkel/)
- `hyzer.png` - Hyzer
- `anhyzer.png` - Anhyzer
- `platt.png` - Platt
- `roller.png` - Rollervinkel
- `fritt_val.png` - Fritt val (bonus)

**Färgtema:** Purple (rgba(179, 102, 255))

---

### 3️⃣ SPEED (images/slots/speed/)
- `low.png` - Speed 1-7 (låg hastighet)
- `high.png` - Speed 8-15 (hög hastighet)
- `fritt_val.png` - Fritt val (bonus)

**Färgtema:** Green (rgba(0, 255, 136))

**OBS:** För speed kan du döpa om dina nuvarande:
- `1.png` → `low.png`
- `2.png` → `high.png`

---

### 4️⃣ POSITION (images/slots/position/)
- `standstill.png` - Standstill
- `vanlig.png` - Vanlig
- `360.png` - 360°
- `hoger_ben.png` - Höger ben
- `vanster_ben.png` - Vänster ben
- `fritt_val.png` - Fritt val (bonus)

**Färgtema:** Orange (rgba(255, 153, 51))

---

### 5️⃣ MOD (images/slots/mod/)
- `blunda.png` - Blunda
- `motstandardens_disc.png` - Motståndarens disc
- `minimarker.png` - Minimarker
- `dubbla_kast.png` - Dubbla kast
- ~~Ingen fritt val~~ (ingen bonus på Mod)

**Färgtema:** Red (rgba(255, 68, 68))

---

## 🎨 Design-riktlinjer

### Komposition (800×500px layout):
```
┌────────────────────────────────────────────┐
│  MARGIN     MAIN CONTENT      MARGIN       │
│   10%     (Icon + Text)         10%        │
│          Centered 80%                      │
└────────────────────────────────────────────┘
```

### Stilguide:
- **Ikonisk stil** - simpel, tydlig, lätt att känna igen
- **Centrerad komposition** - viktigt innehåll i mitten
- **Färgkodning** - använd respektive kategori's färg
- **Transparent bakgrund** - låt slot-bakgrunden synas
- **Tydlig kontrast** - ska synas mot mörk bakgrund (#142e2a)
- **Drop-shadow** - läggs till automatiskt i CSS

### Exempel-layout för en bild:
```
┌────────────────────────────────────────────┐
│                                            │
│        [ICON]      TEXT                    │
│       (40-50%)   (Namnet)                  │
│                                            │
└────────────────────────────────────────────┘
```

---

## 🔄 Namnkonvention

**Använd små bokstäver och understreck:**
- ✅ `backhand_left.png`
- ✅ `fritt_val.png`
- ❌ `BackhandLeft.png`
- ❌ `Fritt Val.png`

**För "Fritt val" - samma bild kan användas i alla kategorier, eller unikt per kategori.**

---

## 📊 Totalt antal bilder

- Kast: 5 bilder
- Vinkel: 5 bilder
- Speed: 3 bilder
- Position: 6 bilder
- Mod: 4 bilder

**TOTALT: 23 bilder**

---

## ✅ Checklista innan export

- [ ] Dimension: 800×500px eller 400×250px
- [ ] Aspect ratio: 1.6:1 (16:10)
- [ ] Format: PNG med transparency
- [ ] Filstorlek: < 100KB (komprimera med TinyPNG)
- [ ] Transparent bakgrund
- [ ] Färgkodad enligt kategori
- [ ] Tydlig mot mörk bakgrund
- [ ] Centrerad komposition
- [ ] Safe area: 80% av bredden och höjden
- [ ] Rätt filnamn (små bokstäver, understreck)

---

## 🎯 Quick Start

1. Börja med de viktigaste:
   - Speed (3 bilder) - du har redan 2!
   - Kast (5 bilder)
   - Vinkel (5 bilder)

2. Sedan:
   - Position (6 bilder)
   - Mod (4 bilder)

3. Sist:
   - Fritt val-varianter (kan vara samma bild överallt)

---

När du lägger till bilder, berätta så uppdaterar jag `renderValue()` funktionen för att mappa alla värden till rätt bildpaths! 🎨
