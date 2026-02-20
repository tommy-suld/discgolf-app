# 🔊 Ljudfiler för Gambler Slot Machine

## 📁 Mappstruktur

```
sounds/
├── effects/          # Ljudeffekter (korta ljud)
│   ├── spin.mp3         - När hjulet börjar snurra
│   ├── reel_stop.mp3    - När ett hjul stannar
│   ├── bonus.mp3        - När ⭐ bonus dyker upp
│   ├── unlock.mp3       - När reel 4/5 låses upp
│   ├── ace.mp3          - När PERFECT ACE träffas
│   ├── ten_bonus.mp3    - När 10 bonusar uppnås
│   ├── click.mp3        - Knappklick (SPIN, tillbaka)
│   └── win.mp3          - Valfritt "vinn"-ljud
│
└── music/            # Bakgrundsmusik (loopande)
    └── background.mp3   - Ambient casino/slot machine musik
```

## 🎵 Filspecifikationer

### **Ljudeffekter (effects/)**
- **Format:** MP3 (eller OGG som fallback)
- **Längd:** 0.5-3 sekunder
- **Bitrate:** 96-128 kbps
- **Filstorlek:** 10-50 KB per fil
- **Volym:** Normaliserad (inte för högt)

### **Bakgrundsmusik (music/)**
- **Format:** MP3
- **Längd:** 1-3 minuter (loopas automatiskt)
- **Bitrate:** 128 kbps
- **Filstorlek:** Max 3 MB
- **Stil:** Ambient, soft, inte distraktions
- **Volym:** Låg (30-40% default)

## 🎯 Rekommenderade ljud

### **1. spin.mp3**
- Typ: Mekaniskt snurrande ljud
- Känsla: Klassiskt slot machine "whirr"
- Längd: ~1 sekund

### **2. reel_stop.mp3**
- Typ: Snabb "klick" eller "thunk"
- Känsla: Hjul som låses på plats
- Längd: ~0.3 sekunder

### **3. bonus.mp3**
- Typ: Positiv "ding", "chime" eller "sparkle"
- Känsla: Glädje, bonus, stjärna
- Längd: ~0.5-1 sekund

### **4. unlock.mp3**
- Typ: "Unlock" ljud, positiv progression
- Känsla: Uppnåelse, låser upp ny funktion
- Längd: ~1 sekund

### **5. ace.mp3**
- Typ: Fanfar, celebration
- Känsla: STORT firande, jackpot!
- Längd: ~2-3 sekunder

### **6. click.mp3**
- Typ: Subtil knappklick
- Känsla: UI feedback
- Längd: ~0.1 sekunder

### **7. background.mp3**
- Typ: Ambient, loopbar musik
- Känsla: Casino/modern slot machine vibe
- Stil: Repetitiv men inte irriterande
- Längd: 1-3 minuter (seamless loop)

## 🌐 Var hittar du ljud?

### **Gratis ljudeffekter:**
- **Freesound.org** - Största biblioteket
- **Zapsplat.com** - Professionella ljud
- **Mixkit.co/free-sound-effects/** - Royalty-free
- **Pixabay.com/sound-effects/** - Helt gratis

### **Gratis musik:**
- **Incompetech.com** - Kevin MacLeod
- **YouTube Audio Library**
- **Free Music Archive**

### **Sökord att använda:**
- "slot machine spin"
- "casino reel stop"
- "bonus chime"
- "unlock achievement"
- "jackpot fanfare"
- "ui click button"
- "ambient casino music"

## 📝 Notering

När du lägger till filerna, behåll exakt dessa filnamn för att koden ska fungera direkt:
- `effects/spin.mp3`
- `effects/reel_stop.mp3`
- `effects/bonus.mp3`
- `effects/unlock.mp3`
- `effects/ace.mp3`
- `effects/click.mp3`
- `music/background.mp3`

Om du vill använda andra namn, berätta så uppdaterar jag koden!
