import fs from 'fs';

// Precise delicate vector matching logo_alta_jeronimo_sem_fundo.png
const svgLight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 160" fill="none">
  <!-- Monogram Capsule -->
  <g transform="translate(16, 12)">
    <rect x="4" y="4" width="76" height="128" rx="38" stroke="#D06727" stroke-width="5" fill="none" />
    <g fill="#D06727">
      <!-- J Top Serif -->
      <path d="M30 26 H54 V30 C50 30 48 31 47 34 V102 C47 114 39 120 30 117 C25 115 23 110 26 106 C28 103 31 104 33 107 C35 110 39 109 40 102 V34 C39 31 36 30 30 30 Z" />
      <!-- B Lobes and structure -->
      <path d="M38 34 H55 C66 34 72 40 72 49 C72 56 67 61 58 62 C68 63 75 70 75 80 C75 91 66 98 52 98 H28 V93 H36 V39 H30 V34 H38 Z M44 40 V58 H54 C61 58 65 54 65 49 C65 43 61 40 53 40 Z M44 64 V92 H51 C60 92 65 87 65 80 C65 73 60 64 50 64 Z" fill-rule="evenodd" />
    </g>
  </g>

  <!-- Typography with Medium weight and refined serif kerning -->
  <text x="120" y="58" font-family="'Cormorant Garamond', 'Cinzel', 'Times New Roman', serif" font-size="36" font-weight="600" fill="#142642" letter-spacing="1.5">JERONIMO</text>
  <text x="120" y="98" font-family="'Cormorant Garamond', 'Cinzel', 'Times New Roman', serif" font-size="36" font-weight="600" fill="#142642" letter-spacing="1.5">BICHARELLI</text>
  <text x="122" y="126" font-family="'Cormorant Garamond', 'Cinzel', 'Times New Roman', serif" font-size="15" font-weight="500" fill="#142642" letter-spacing="6.5">ADVOGADOS</text>
</svg>`;

const svgDark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 160" fill="none">
  <!-- Monogram Capsule -->
  <g transform="translate(16, 12)">
    <rect x="4" y="4" width="76" height="128" rx="38" stroke="#D06727" stroke-width="5" fill="none" />
    <g fill="#D06727">
      <!-- J Top Serif -->
      <path d="M30 26 H54 V30 C50 30 48 31 47 34 V102 C47 114 39 120 30 117 C25 115 23 110 26 106 C28 103 31 104 33 107 C35 110 39 109 40 102 V34 C39 31 36 30 30 30 Z" />
      <!-- B Lobes and structure -->
      <path d="M38 34 H55 C66 34 72 40 72 49 C72 56 67 61 58 62 C68 63 75 70 75 80 C75 91 66 98 52 98 H28 V93 H36 V39 H30 V34 H38 Z M44 40 V58 H54 C61 58 65 54 65 49 C65 43 61 40 53 40 Z M44 64 V92 H51 C60 92 65 87 65 80 C65 73 60 64 50 64 Z" fill-rule="evenodd" />
    </g>
  </g>

  <!-- Typography in Crisp White with Delicate Kerning -->
  <text x="120" y="58" font-family="'Cormorant Garamond', 'Cinzel', 'Times New Roman', serif" font-size="36" font-weight="600" fill="#FFFFFF" letter-spacing="1.5">JERONIMO</text>
  <text x="120" y="98" font-family="'Cormorant Garamond', 'Cinzel', 'Times New Roman', serif" font-size="36" font-weight="600" fill="#FFFFFF" letter-spacing="1.5">BICHARELLI</text>
  <text x="122" y="126" font-family="'Cormorant Garamond', 'Cinzel', 'Times New Roman', serif" font-size="15" font-weight="500" fill="#CBD5E1" letter-spacing="6.5">ADVOGADOS</text>
</svg>`;

fs.mkdirSync('./public', { recursive: true });
fs.writeFileSync('./public/logo.svg', svgLight);
fs.writeFileSync('./public/logo-dark.svg', svgDark);
console.log('Delicate refined logos saved to public/');
