/* =====================================================================
   KONFIGURATION – diese Datei kannst du selbst bearbeiten (Texteditor genügt)
   ===================================================================== */
const CONFIG = {
  // Firebase-Konfiguration einfügen (Firebase Console → Projekteinstellungen → Web-App).
  // Solange null, läuft die Seite im DEMO-MODUS (Stimmen nur auf diesem Gerät).
  firebase: {
    apiKey: "AIzaSyB3ryjt6FEP0LeK-h26-xrvU4UBbKP5a0s",
    authDomain: "weihnachtsfeier-f2664.firebaseapp.com",
    projectId: "weihnachtsfeier-f2664",
    storageBucket: "weihnachtsfeier-f2664.firebasestorage.app",
    messagingSenderId: "604710120979",
    appId: "1:604710120979:web:76201ace1a1d37606299e6"
  },
  /* Beispiel:
  firebase: { apiKey:"...", authDomain:"...", projectId:"...", appId:"..." },
  */
  collection: "xmasVotes",
  playersCollection: "xmasPlayers", // hier landen die Spieler, die du unter #admin einträgst
  adminPin: "1234",                 // PIN für die Ergebnis-Seite (#ergebnis)
  title: "Weihnachtsfeier-Awards",
  club: "TuS Haren 2",

  // Spieler: Im Demo-Modus und als Startliste. Mit Firebase pflegst du die Spieler unter #admin.
  // id eindeutig, photo optional (z. B. "fotos/max.jpg" oder eine URL)
  players: [
    { id: "p1",  name: "Spieler 1",  photo: "" },
    { id: "p2",  name: "Spieler 2",  photo: "" },
    { id: "p3",  name: "Spieler 3",  photo: "" },
    { id: "p4",  name: "Spieler 4",  photo: "" },
    { id: "p5",  name: "Spieler 5",  photo: "" },
    { id: "p6",  name: "Spieler 6",  photo: "" },
    { id: "p7",  name: "Spieler 7",  photo: "" },
    { id: "p8",  name: "Spieler 8",  photo: "" }
  ],

  categories: [
    { id: "c1", title: "Wer kommt am wahrscheinlichsten zu spät zum Training?", sub: "" },
    { id: "c2", title: "Wer bekommt am wahrscheinlichsten eine rote Karte?", sub: "" },
    { id: "c3", title: "Wer schießt am wahrscheinlichsten ein Eigentor?", sub: "" },
    { id: "c4", title: "Angenommen unser Torwart verletzt sich und wir haben keinen Ersatz. Wen würdest du ins Tor stellen?", sub: "" },
    { id: "c5", title: "Wer vergisst am wahrscheinlichsten sein Handtuch beim Duschen?", sub: "" },
    { id: "c6", title: "Wer duscht am längsten?", sub: "" },
    { id: "c7", title: "Wer hat die Taktikbesprechung am wenigsten verstanden?", sub: "" },
    { id: "c8", title: "Wer wird niemals ein Tor schießen?", sub: "" },
    { id: "c9", title: "Wer hat heute das beste Outfit an?", sub: "" }
  ]
};
