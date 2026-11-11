import fs from 'node:fs';

const ORG = 'https://bykineks.com/#organization';
const PERSON = 'https://bykineks.com/about.html#dede-kurniawan';
const WEBSITE = 'https://bykineks.com/#website';

function jsonLd(data) {
  return `<script type="application/ld+json">\n${JSON.stringify(data, null, 2)}\n</script>`;
}

function insertBeforeHeadEnd(file, marker, block) {
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes(marker)) {
    console.log(`skip ${file}: marker already present`);
    return;
  }
  if (!html.includes('</head>')) throw new Error(`${file}: missing </head>`);
  html = html.replace('</head>', `${marker}\n${block}\n</head>`);
  fs.writeFileSync(file, html);
  console.log(`updated ${file}`);
}

function ensureHome() {
  const file = 'index.html';
  let html = fs.readFileSync(file, 'utf8');

  if (!html.includes('<link rel="canonical"')) {
    html = html.replace(
      '<meta name="robots" content="index, follow">',
      '<meta name="robots" content="index, follow">\n<link rel="canonical" href="https://bykineks.com/">'
    );
  }

  if (!html.includes('<meta property="og:url"')) {
    html = html.replace(
      '<meta property="og:site_name" content="Bykineks">',
      '<meta property="og:site_name" content="Bykineks">\n<meta property="og:url" content="https://bykineks.com/">'
    );
  }

  const marker = '<!-- GEO:HOME-SCHEMA -->';
  if (!html.includes(marker)) {
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': ORG,
          name: 'Bykineks',
          url: 'https://bykineks.com/',
          logo: 'https://bykineks.com/assets/logo/bykineks.svg',
          description: 'Bykineks is an independent Indonesian type foundry developing typographic systems for branding, editorial, and digital experiences.',
          foundingDate: '2021',
          founder: { '@id': PERSON },
          sameAs: [
            'https://www.instagram.com/bykineks/',
            'https://www.linkedin.com/company/bykineks/',
            'https://id.pinterest.com/bykineks/'
          ]
        },
        {
          '@type': 'WebSite',
          '@id': WEBSITE,
          url: 'https://bykineks.com/',
          name: 'Bykineks',
          publisher: { '@id': ORG }
        },
        {
          '@type': 'WebPage',
          '@id': 'https://bykineks.com/#webpage',
          url: 'https://bykineks.com/',
          name: 'Bykineks — Independent Indonesian Type Foundry',
          isPartOf: { '@id': WEBSITE },
          about: { '@id': ORG }
        }
      ]
    };
    html = html.replace('</head>', `${marker}\n${jsonLd(schema)}\n</head>`);
  }

  fs.writeFileSync(file, html);
  console.log(`updated ${file}`);
}

const products = [
  {
    file: 'kineks-text.html',
    name: 'Kineks Text',
    title: 'Kineks Text — Neo-Grotesque Variable Typeface | Bykineks',
    url: 'https://bykineks.com/kineks-text.html',
    image: 'https://bykineks.com/assets/images/kineks-text-type-system-10-styles.webp',
    description: 'Kineks Text is a neo-grotesque text typeface designed for readability, extended reading, editorial typography, and digital publications.',
    category: 'Typeface family',
    releaseDate: '2026',
    props: {
      Styles: '10', Glyphs: '389', Classification: 'Neo-Grotesque',
      'Language support': '90 languages', 'Variable axes': 'Weight, Oblique', Version: '1.000'
    }
  },
  {
    file: 'kineks-compact.html', name: 'Kineks Compact',
    title: 'Kineks Compact — Space-Efficient Neo-Grotesque Typeface | Bykineks',
    url: 'https://bykineks.com/kineks-compact.html',
    image: 'https://bykineks.com/assets/images/kineks-compact-type-system-10-styles.webp',
    description: 'Kineks Compact is a neo-grotesque sans typeface designed for space-efficient digital interfaces, compact displays, and information-dense environments.',
    category: 'Typeface family', releaseDate: '2026',
    props: { Styles: '10', Glyphs: '388', Classification: 'Neo-Grotesque', 'Primary use': 'UI, dashboards, navigation, notifications, wearable and automotive displays' }
  },
  {
    file: 'kineks-symbol/index.html', name: 'Kineks Symbols',
    title: 'Kineks Symbols — Symbol Typeface | Bykineks',
    url: 'https://bykineks.com/kineks-symbol/',
    image: 'https://bykineks.com/assets/images/kineks-symbols-geometric-symbol-typeface-icons-visual-language.webp',
    description: 'Kineks Symbols is a curated collection of functional symbols for digital and physical spaces, including directional signs, interface elements, wayfinding, transportation, facilities, safety markers, geometric forms, and everyday visual signs.',
    category: 'Symbol typeface', releaseDate: '2026',
    props: { Styles: 'Bold', Version: '1.0', Classification: 'Symbol Typeface', Glyphs: '356', 'Visible glyphs in specimen': '351', Content: 'Arrows, geometric forms, pictograms and symbols' }
  },
  {
    file: 'bia/index.html', name: 'Bia', title: 'Bia — 200-Style Transitional Typeface | Bykineks',
    url: 'https://bykineks.com/bia/', image: 'https://bykineks.com/assets/images/bia-type-system-200-styles-serif-sans.webp',
    description: 'Bia is a transitional type system with 200 styles across Serif Low, Serif High, Sans Low, and Sans High, unified by a shared typographic structure.',
    category: 'Typeface superfamily', releaseDate: '2023',
    props: { Styles: '200', Glyphs: '1,037', Classification: 'Transitional', 'Language support': '102 languages', 'Variable axes': 'Serif, Contrast, Slant, Weight, Width', Version: '2.100' }
  },
  {
    file: 'caelia.html', name: 'Caelia', title: 'Caelia — Gothic Sans Typeface | Bykineks',
    url: 'https://bykineks.com/caelia.html', image: 'https://bykineks.com/assets/images/caelia-gothic-sans-typeface-bykineks.webp',
    description: 'Caelia is a Gothic Sans typeface shaped by sharp architectural character, pointed geometry, strong verticality, and sculptural proportions.',
    category: 'Typeface family', releaseDate: '2024',
    props: { Styles: '5', Glyphs: '1,932', Classification: 'Gothic Sans', Version: '1.0', 'Script coverage': 'Latin, IPA, Cyrillic and Greek' }
  },
  {
    file: 'dareva.html', name: 'Dareva', title: 'Dareva — Neo-Humanist Sans Serif | Bykineks',
    url: 'https://bykineks.com/dareva.html', image: 'https://bykineks.com/assets/images/dareva-neo-humanist-sans-optical-size-typeface-digital-reading.webp',
    description: 'Dareva is a neo-humanist sans serif designed for screen reading, with Micro, Text, and Display optical sizes and matching obliques.',
    category: 'Typeface family', releaseDate: '2026',
    props: { Styles: '36', Classification: 'Neo-Humanist Sans', 'Optical sizes': 'Micro, Text, Display', Weights: '6 per optical size', 'Glyphs in Regular Text': '361' }
  },
  {
    file: 'arshila.html', name: 'Arshila', title: 'Arshila — Modern Serif Typeface | Bykineks',
    url: 'https://bykineks.com/arshila.html', image: 'https://bykineks.com/assets/images/arshila-modern-serif-54-styles-swash-ligatures.webp',
    description: 'Arshila is a modern serif typeface combining classical proportions, high contrast, crisp terminals, fluid curves, and extensive OpenType features.',
    category: 'Typeface family', releaseDate: '2023',
    props: { Styles: '54', Glyphs: '2,500', Classification: 'Modern Serif', 'Language support': '110 languages', 'Variable axes': 'Weight, Width, Slant', Version: '2.0' }
  },
  {
    file: 'avita/index.html', name: 'Avita', title: 'Avita — Geometric Sans Serif | Bykineks',
    url: 'https://bykineks.com/avita/', image: 'https://bykineks.com/assets/images/avita-geometric-sans-typeface-54-styles-103-languages.webp',
    description: 'Avita is a geometric sans serif with 54 styles across nine weights, three widths, and matching obliques, with Latin, Greek, and Cyrillic support.',
    category: 'Typeface family', releaseDate: '2022',
    props: { Styles: '54', 'Glyphs in Regular': '737', Languages: '103', Classification: 'Geometric Sans', Weights: '9', Widths: '3', 'Script coverage': 'Latin, Greek and Cyrillic' }
  },
  {
    file: 'bilgen.html', name: 'Bilgen', title: 'Bilgen — Geometric Sans Serif | Bykineks',
    url: 'https://bykineks.com/bilgen.html', image: 'https://bykineks.com/assets/images/bilgen-geometric-sans-variable-font-27-styles-interlock-ligatures.webp',
    description: 'Bilgen is a condensed geometric sans with interlocking capitals and 27 styles spanning nine weights with upright, left-leaning, and right-leaning variants.',
    category: 'Typeface family', releaseDate: '2024',
    props: { Styles: '27', 'Glyphs in Regular': '1,737', Languages: '66+', Classification: 'Geometric Sans', Weights: '9', 'Slant variants': 'Upright, Left, Right', 'OpenType feature': 'Interlocking capitals' }
  },
  {
    file: 'gin.html', name: 'GIN', title: 'GIN — Calligraffiti Script | Bykineks',
    url: 'https://bykineks.com/gin.html', image: 'https://bykineks.com/assets/images/gin-calligraffiti-script-font-decorative-lettering-typeface.webp',
    description: 'GIN is a calligraffiti-inspired display script with expressive directional strokes and standard fi and fl ligatures.',
    category: 'Display script typeface', releaseDate: '2022',
    props: { Styles: '1', Glyphs: '232', Classification: 'Calligraffiti Script', 'Standard ligatures': 'fi, fl' }
  },
  {
    file: 'neela.html', name: 'Neela', title: 'Neela — Art Nouveau Serif | Bykineks',
    url: 'https://bykineks.com/neela.html', image: 'https://bykineks.com/assets/images/neela-serif-nouveau-typeface-27-styles-62-languages.webp',
    description: 'Neela is an Art Nouveau serif family with 27 styles, combining nine weights with Normal, Condensed, and Expanded widths.',
    category: 'Typeface family', releaseDate: '2023',
    props: { Styles: '27', 'Glyphs in Regular': '206', Classification: 'Art Nouveau Serif', Weights: '9', Widths: 'Normal, Condensed, Expanded' }
  },
  {
    file: 'wakaba.html', name: 'Wakaba', title: 'Wakaba — Handwritten Display | Bykineks',
    url: 'https://bykineks.com/wakaba.html', image: 'https://bykineks.com/assets/images/wakaba-playful-display-font-handwritten-organic-lettering.webp',
    description: 'Wakaba is a playful handwritten display typeface with rounded strokes, irregular rhythm, and standard ffi, fi, and fl ligatures.',
    category: 'Handwritten display typeface', releaseDate: '2022',
    props: { Styles: '1', Glyphs: '303', Classification: 'Handwritten Display', 'Standard ligatures': 'ffi, fi, fl' }
  },
  {
    file: 'alvera/index.html', name: 'Alvera', title: 'Alvera — Modular Dot Matrix Sans Variable Typeface | Bykineks',
    url: 'https://bykineks.com/alvera/', image: 'https://bykineks.com/assets/images/alvera-dot-matrix-display-typeface-1134-glyphs-circle-square.webp',
    description: 'Alvera is a modular Dot Matrix Sans variable typeface with retro-futuristic character, Circle and Square configurations, and a grid-based visual system.',
    category: 'Variable typeface family', releaseDate: '2025',
    props: { Styles: '4', Glyphs: '1060', Classification: 'Dot Matrix Sans', 'Preview entries': '971', 'Weight range': '400–700', 'Grade range': '64–100', Version: '1.0' }
  }
];

function productSchema(p) {
  const product = {
    '@type': 'Product',
    '@id': `${p.url}#product`,
    name: p.name,
    url: p.url,
    image: p.image,
    description: p.description,
    category: p.category,
    brand: { '@id': ORG },
    manufacturer: { '@id': ORG },
    creator: { '@id': PERSON },
    additionalProperty: Object.entries(p.props).map(([name, value]) => ({ '@type': 'PropertyValue', name, value }))
  };
  if (p.releaseDate) product.releaseDate = p.releaseDate;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      product,
      {
        '@type': 'WebPage',
        '@id': `${p.url}#webpage`,
        url: p.url,
        name: p.title,
        mainEntity: { '@id': `${p.url}#product` },
        isPartOf: { '@id': WEBSITE },
        publisher: { '@id': ORG }
      }
    ]
  };
}

ensureHome();
for (const product of products) {
  if (!fs.existsSync(product.file)) throw new Error(`missing ${product.file}`);
  const html = fs.readFileSync(product.file, 'utf8');
  if (html.includes(`${product.url}#product`)) {
    console.log(`skip ${product.file}: product schema already present`);
    continue;
  }
  insertBeforeHeadEnd(product.file, '<!-- GEO:PRODUCT-SCHEMA -->', jsonLd(productSchema(product)));
}
