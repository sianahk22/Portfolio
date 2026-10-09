// Génère le QR code de la carte de visite en SVG (fichier statique, net à l'impression).
// À relancer seulement si l'adresse change : npm run qr
// L'adresse vient de src/data/content.js pour qu'il n'y ait qu'une seule source.
import { writeFile } from "node:fs/promises";
import QRCode from "qrcode";
import { site } from "../src/data/content.js";

const output = new URL("../public/images/qr-anaisweb.svg", import.meta.url);

const svg = await QRCode.toString(site.url, {
  type: "svg",
  errorCorrectionLevel: "M", // tolère environ 15 % de dégâts (pli, tache)
  margin: 2, // zone blanche autour du code, nécessaire à la lecture
  color: { dark: "#1c1917", light: "#ffffff" }, // encre très foncée sur blanc : contraste maximal
});

await writeFile(output, svg);
console.log(`QR code généré vers ${site.url} → public/images/qr-anaisweb.svg`);
