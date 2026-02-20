# 📸 Bildguide för Gambler Slot Machine

## 🎯 Optimal Bildstorlek

### Rekommenderat format:
- **Bredd: 400 pixlar**
- **Höjd: 600 pixlar**
- **Aspect Ratio: 2:3 (portrait)**
- **Filformat: JPEG (85-90% kvalitet) eller PNG**

### För högupplösta skärmar (Retina):
- **Bredd: 800 pixlar**
- **Höjd: 1200 pixlar**
- Bilderna kommer automatiskt skalas ner för perfekt skärpa

---

## 🎨 Design Best Practices

### 1. Bakgrund
```
✅ GÖR:
- Använd enhetlig bakgrundsfärg: #0a1f1c (mörk grön som matchar appen)
- Alternativt: Mjuk gradient från #0a1f1c till #142e2a
- Ha 10-15% padding runt huvudmotivet

❌ UNDVIK:
- Transparent bakgrund (kommer visa svart på vissa enheter)
- Rörig/distraherande bakgrund
- Bilder utan padding (motivet kan klippas)
```

### 2. Huvudmotiv (Safe Zone)
```
┌────────────────────┐
│    60px margin     │ ← Topp-padding (10%)
│  ┌──────────────┐  │
│  │              │  │
│  │   VIKTIGT    │  │
│  │   INNEHÅLL   │  │ ← Huvudmotiv centrerat
│  │   (Person/   │  │   vertikalt & horisontellt
│  │    Objekt)   │  │
│  │              │  │
│  └──────────────┘  │
│    60px margin     │ ← Botten-padding (10%)
└────────────────────┘
    40px   40px
   margin margin
```

**Viktigt:**
- Håll huvudmotivet (t.ex. ansikten, text) inom 80% av bildens höjd
- Centrera vertikalt och horisontellt
- Lämna 10% margin på alla sidor

### 3. Färger & Kontrast
```
✅ GÖR:
- Hög kontrast mellan motiv och bakgrund
- Tänk på att bilderna visas dimmade (30% opacity) i vissa lägen
- Använd ljusa färger (#5ebaaa, #72c9bb, #ffd700) för viktiga detaljer

❌ UNDVIK:
- Låg kontrast (grått på grått)
- För mörka bilder (syns inte när dimmade)
```

### 4. Text på bilder
```
✅ GÖR:
- Använd stora, tydliga fonter (minst 60-80px vid 800×1200)
- Fetstil (bold) för bättre läsbarhet
- Ljus text på mörk bakgrund eller vice versa

❌ UNDVIK:
- Tunn text eller små fontstorlekar
- Text utan kontrast
```

---

## 📐 Exempel: Skapa en "Höger Backhand"-bild

### Photoshop/Figma/Canva:
```
1. Skapa ny canvas: 800×1200px
2. Fyll bakgrund: #0a1f1c
3. Lägg till bild av person som kastar backhand
   - Centrera bilden
   - Skala så personen tar upp ~70% av höjden
   - Lämna 60-80px margin på alla sidor
4. (Valfritt) Lägg till text: "HÖGER BACKHAND"
   - Font size: 70px
   - Färg: #5ebaaa
   - Position: Nederkant med 80px margin
5. Exportera som JPEG (85% kvalitet)
```

---

## 🔧 Tekniska krav

### Filnamn:
```
Kast:     rhbh.jpeg, rhfh.jpeg, lhbh.jpeg, lhfh.jpeg
Vinkel:   hyzer.jpeg, anhyzer.jpeg, flat.jpeg, roller.jpeg
Speed:    1.jpeg, 2.jpeg, ..., 15.jpeg
Position: standstill.jpeg, 360.jpeg, right_leg.jpeg, left_leg.jpeg
ACE:      ace.jpeg
```

### Filstorlek:
- Målstorlek: 50-150 KB per bild (JPEG 85% kvalitet)
- Max: 300 KB per bild
- Total: Alla bilder ~2-5 MB

### Optimering:
```bash
# Använd ImageOptim (macOS) eller TinyPNG för komprimering
# Eller med command line:
convert input.png -quality 85 -resize 800x1200 output.jpeg
```

---

## 📱 Test på olika enheter

### Viktiga testpunkter:
1. **iPhone SE (liten skärm)** - Är texten fortfarande läsbar?
2. **iPhone 15 Pro Max (stor skärm)** - Blir bilden pixlig?
3. **Dimmat läge** - Syns motivet när opacity är 30%?
4. **Highlighted läge** - Syns motivet bra när brightness är 130%?

### Console-test:
Öppna appen på din iPhone och kolla konsolen för exakta dimensioner.

---

## ✅ Checklista innan export:

- [ ] Bildstorlek: 800×1200px (eller 400×600px)
- [ ] Aspect ratio: Exakt 2:3
- [ ] Bakgrund: Enhetlig färg (#0a1f1c)
- [ ] Safe zone: 10% margin på alla sidor
- [ ] Motiv: Centrerat vertikalt & horisontellt
- [ ] Kontrast: Hög kontrast mellan motiv och bakgrund
- [ ] Text: Stor och tydlig (om använd)
- [ ] Filformat: JPEG (85-90% kvalitet)
- [ ] Filnamn: Korrekt enligt lista ovan
- [ ] Filstorlek: Under 300 KB

---

## 🎨 Färgpalett (för konsistens)

```
Bakgrund:        #0a1f1c (mörk grön)
Gradient till:   #142e2a
Primär accent:   #5ebaaa (turkos)
Sekundär accent: #72c9bb (ljusare turkos)
Guld (bonus):    #ffd700
Vit text:        #ffffff
```

---

## 💡 Pro Tips

1. **Använd mallar**: Skapa en Photoshop/Figma-mall med safe zones markerade
2. **Batch export**: Exportera alla bilder samtidigt med samma inställningar
3. **Versionshantering**: Spara .psd/.fig-filer separat från exporterade JPEG
4. **A/B test**: Testa olika varianter och se vad som fungerar bäst
5. **Feedback**: Testa med riktiga användare på olika telefoner

---

## 📞 Debug-info

Om bilderna ser konstiga ut:
1. Öppna appen på iPhone (landscape mode)
2. Öppna Safari Developer Tools (från Mac)
3. Kolla Console för exakta dimensioner:
   ```
   Width: Xxx px
   Height: Xxx px
   Aspect Ratio: X.XX
   ```
4. Justera dina bilder baserat på dessa värden

---

Lycka till! 🎯🥏
