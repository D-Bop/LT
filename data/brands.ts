interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface Brand {
  id: string;
  name: string;
  tagline: string;
  image: string;
  products: Product[];  // ← this tells TypeScript: products is always an array
}
export const brands = [
  // Audemars Piguet
  {
    id: "audemars-piguet",
    name: "Audemars Piguet",
    tagline: "The Mark of Excellence",
    image: "/brands/audemars-Piguet.jpg",
    products: [
      {
        id: "ap-1",
        name: "Royal Oak",
        description: "Chain Strap, Luxurious Italian stainless steel, Gold Chrome Bezel, Black Dial.",
        price: "contact for price",
        image: "/products/audemars-piguet/ap-1.jpeg"
      },
      {
        id: "ap-2",
        name: "Royal Oak",
        description: "Chain Strap, Luxurious italian stainless steel, Silver Bezel, Emerald Dial.",
        price: "contact for price",
        image: "/products/audemars-piguet/ap-2.jpeg"
      },
      {
        id: "ap-3",
        name: "Royal Oak",
        description: "Chain Strap, Luxurious italian stainless steel, Gold Bezel, White Dial.",
        price: "contact for price",
        image: "/products/audemars-piguet/ap-3.jpeg"
      },
      {
        id: "ap-4",
        name: "Royal Oak",
        description: "Chain Strap, Luxurious Italian stainless steel, Gold Bezel, Black Dial.",
        price: "contact for price",
        image: "/products/audemars-piguet/ap-4.jpeg"
      },
      {
        id: "ap-5",
        name: "Royal Oak",
        description: "Chain Strap, Luxurious Italian stainless steel, Gold Chrome Bezel, Gold Chrome Dial.",
        price: "contact for price",
        image: "/products/audemars-piguet/ap-5.jpeg"
      },
      {
        id: "ap-6",
        name: "Royal Oak",
        description: "Chain Strap, Luxurious Italian stainless steel, Blacked Out Bezel and Dial.",
        price: "contact for price",
        image: "/products/audemars-piguet/ap-6.jpeg"
      },
      {
        id: "ap-7",
        name: "Royal Oak",
        description: "Chain Strap, Luxurious Italian stainless steel, Silver Bezel, Black Dial.",
        price: "contact for price",
        image: "/products/audemars-piguet/ap-7.jpeg"
      },
      {
        id: "ap-8",
        name: "Royal Oak",
        description: "Chain Strap, Luxurious Italian stainless steel, Black Bezel, White Dial.",
        price: "contact for price",
        image: "/products/audemars-piguet/ap-8.jpeg"
      },
      {
        id: "ap-11",
        name: "Royal Oak Chronograph",
        description: "Chain Strap, Luxurious Italian stainless steel, Silver Bezel, White Dial.",
        price: "contact for price",
        image: "/products/audemars-piguet/ap-11.jpeg"
      },
      {
        id: "ap-12",
        name: "Royal Oak Chronograph",
        description: "Chain Strap, Luxurious Italian stainless steel, Gold Bezel, Black Dial.",
        price: "contact for price",
        image: "/products/audemars-piguet/ap-12.jpeg"
      },
      {
        id: "ap-13",
        name: "Royal Oak Chronograph",
        description: "Chain Strap, Luxurious Italian stainless steel, Silver Bezel, Black Dial.",
        price: "contact for price",
        image: "/products/audemars-piguet/ap-13.jpeg"
      },
      {
        id: "ap-14",
        name: "Royal Oak Chronograph",
        description: "Chain Strap, Luxurious Italian stainless steel, Golden Bezel, Gold Chrome Bezel.",
        price: "contact for price",
        image: "/products/audemars-piguet/ap-14.jpeg"
      },
      {
        id: "ap-15",
        name: "Royal Oak Chronograph",
        description: "Chain Strap, Luxurious Italian stainless steel, Blacked out Bezel and Dial.",
        price: "contact for price",
        image: "/products/audemars-piguet/ap-15.jpeg"
      },
    ]
  },


  // Patek Phillipe
  {
    id: "patek-philippe",
    name: "Patek Philippe",
    tagline: "You Never Actually Own One",
    image: "/brands/patek-philippe.webp",
    products: [
      {
        id: "pp-1",
        name: "Aquanaut",
        description: "Chain, italian stainless steel, navy blue dial, silver bezel",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-1.jpeg"
      },
      {
        id: "pp-2",
        name: "Aquanaut",
        description: "Chain, italian stainless steel, emerald dial, gold bezel",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-2.jpeg"
      },
      {
        id: "pp-3",
        name: "Aquanaut",
        description: "Chain, italian stainless steel, navy blue dial, gold bezel",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-3.jpeg"
      },
      {
        id: "pp-4",
        name: "Aquanaut",
        description: "Chain, italian stainless steel, dotted silver dial, silver bezel",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-4.jpeg"
      },
      {
        id: "pp-5",
        name: "Aquanaut",
        description: "Chain, italian stainless steel, black dial, silver bezel",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-5.jpeg"
      },
      {
        id: "pp-6",
        name: "Aquanaut",
        description: "Chain, italian stainless steel, black dial, gold bezel",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-6.jpeg"
      },
      {
        id: "pp-7",
        name: "Nautilus",
        description: "Luxurious brown rubber strap, gold chrome bezel, silver brown dial",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-7.jpeg"
      },
      {
        id: "pp-8",
        name: "Nautilus",
        description: "Luxurious brown rubber strap, black bezel, indigo dial",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-8.jpeg"
      },
      {
        id: "pp-9",
        name: "Nautilus",
        description: "Luxurious black rubber strap, gold bezel, silver black dial",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-9.jpeg"
      },
      {
        id: "pp-10",
        name: "Nautilus",
        description: "Black leather strap, Golden Bezel, Black Dial.",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-10.jpeg"
      },
      {
        id: "pp-11",
        name: "Nautilus",
        description: "Black leather strap, Gold Chrome Bezel, Gold Dial",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-11.jpeg"
      },
      {
        id: "pp-12",
        name: "Nautilus Chronograph",
        description: "Brown leather strap, Gold Bezel, White and Silver Skeleton Dial",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-12.jpeg"
      },
      {
        id: "pp-13",
        name: "Nautilus Chronograph",
        description: "Black Leather Strap, Gold Bezel, Gray and Black Skeleton Dial",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-13.jpeg"
      },
      {
        id: "pp-14",
        name: "Aquanaut Chronograph",
        description: "Chain, Italian stainless steel, Gold Bezel, Yellow and Gold Skeleton Dial",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-14.jpeg"
      },
      {
        id: "pp-15",
        name: "Nautilus Chronograph",
        description: "Green Rubber Strap, Gold Chrome Bezel, Black Dial",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-15.jpeg"
      },
      {
        id: "pp-16",
        name: "Nautilus Chronograph",
        description: "Black Leather Strap, Gold Chrome Bezel, Black Dial",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-16.jpeg"
      },
      {
        id: "pp-17",
        name: "Nautilus Chronograph",
        description: "Blue Rubber Strap, Silver Bezel, Black Dial.",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-17.jpeg"
      },
      {
        id: "pp-18",
        name: "Nautilus",
        description: "Blue Rubber Strap, Gold Bezel, Blueish Black Dial",
        price: "contact for price",
        image: "/products/patek-phillipe/pp-18.jpeg"
      },
      
    ]
  },


  //  Gshock
  {
    id: "g-shock",
    name: "G-Shock",
    tagline: "Built for Those Who Move Different",
    image: "/brands/g-shock.jpg",
    products: [
      {
        id: "GS-1",
        name: "Casio G-Shock GM-2100-1A",
        description: "Analogue/Digital Metal covered watch with Stainless Steel Bezel, Blacked out Dial and a Black Resin Band.",
        price: "contact for price",
        image: "/products/g-shock/G-shock1.jpeg"
      },
      {
        id: "GS-2",
        name: "Casio G-Shock GA-900A-1A9",
        description: "Analogue/Digital Black Resin Bezel with a Vibrant Yellow Strap",
        price: "contact for price",
        image: "/products/g-shock/G-shock2.jpeg"
      },
      {
        id: "GS-3",
        name: "Casio G-Shock GA-900-HC",
        description: "Digital/Analogue Watch in Matte Green Bezel and Strap",
        price: "contact for price",
        image: "/products/g-shock/G-shock3.jpeg"
      },
      {
        id: "GS-4",
        name: "Casio G-Shock GA-900 Series",
        description: "Blacked Out Analogue/Digital Watch with Leather Strap",
        price: "contact for price",
        image: "/products/g-shock/G-shock4.jpeg"
      },
      {
        id: "GS-5",
        name: "Casio G-Shock GA-900 Series",
        description: "Analogue/Digital Watch with a Black Resin Case with Blue Accents and A Matching Blue Resin Rubber Strap",
        price: "contact for price",
        image: "/products/g-shock/G-shock5.jpeg"
      },
      {
        id: "GS-6",
        name: "Casio G-Shock GA-900C-1A4",
        description: "Analogue/Digital Watch with a Black Bezel with Red Accents and A Black Rubber Strap",
        price: "contact for price",
        image: "/products/g-shock/G-shock6.jpeg"
      },
      {
        id: "GS-7",
        name: "Casio G-Shock GA-900-GC-7A Frozen Forest",
        description: "Analogue/Digital Watch with A White Bezel and Strap.",
        price: "contact for price",
        image: "/products/g-shock/G-shock7.jpeg"
      },
      {
        id: "GS-8",
        name: "Casio G-Shock GM-2100B-4A",
        description: "Analogue/Digital Watch with Dark gray ion-plated Stainless Steel Bezel and a Striking Red Dial.",
        price: "contact for price",
        image: "/products/g-shock/G-shock8.jpeg"
      },
      {
        id: "GS-9",
        name: "Casio G-Shock GM-2100N-2A",
        description: "Analogue/Digital Watch with an Octaonal Blue Metal Bezel and Rubber Strap",
        price: "contact for price",
        image: "/products/g-shock/G-shock9.jpeg"
      },
    ]
  },

  //  Cartier
  {
    id: "cartier",
    name: "Cartier",
    tagline: "Never Imitate, Always Innovate",
    image: "/brands/Cartier.jpg",
  },

  //  Poedagar
  {
    id: "poedagar",
    name: "Poedagar",
    tagline: "Sharp Wrists. Sharper Minds.",
    image: "/brands/Poedagar.jpeg",
    products: [
      {
        id: "p-1",
        name: "Poedagar Rhinemaster Chronograph",
        description: "Blacked out Analogue Watch with Luxurious Stainless Steel Chain Strap and Red Accents",
        price: "contact for price",
        image: "/products/poedagar/p-1.jpeg"
      },
      {
        id: "p-2",
        name: "Poedagar Rhinemaster Chronograph",
        description: "Blacked out Analogue Watch with Luxurious Stainless Steel Chain Strap and Yellow Accents",
        price: "contact for price",
        image: "/products/poedagar/p-2.jpeg"
      },
      {
        id: "p-3",
        name: "Poedagar Rhinemaster Chronograph",
        description: "Blacked out Analogue Watch with Luxurious Stainless Steel Chain Strap and Gold Accents",
        price: "contact for price",
        image: "/products/poedagar/p-3.jpeg"
      },
      {
        id: "p-4",
        name: "Poedagar Trace Classic",
        description: "Luxurious Stainless Italian Steel with Chain Strap, Silver Bezel and Black Dial",
        price: "contact for price",
        image: "/products/poedagar/p-4.jpeg"
      },
      {
        id: "p-5",
        name: "Poedagar Trace Classic",
        description: "Luxurious Stainless Italian Steel with Chain Strap, Silver Bezel and Blue Dial",
        price: "contact for price",
        image: "/products/poedagar/p-3.jpeg"
      },
      {
        id: "p-6",
        name: "Poedagar Trace Classic - Gold Edition",
        description: "Luxurious Stainless Italian Steel with Chain Strap, Gold Bezel and Gold Dial",
        price: "contact for price",
        image: "/products/poedagar/p-6.jpeg"
      },
      {
        id: "p-7",
        name: "Poedagar Corsair",
        description: "Luxurious Stainless Italian Steel with Chain Strap, Silver Bezel and Black Dial",
        price: "contact for price",
        image: "/products/poedagar/p-7.jpeg"
      },
      {
        id: "p-8",
        name: "Poedagar Corsair",
        description: "Luxurious Stainless Italian Steel with Chain Strap, Silver Bezel and Azurite Blue Dial",
        price: "contact for price",
        image: "/products/poedagar/p-8.jpeg"
      },
      {
        id: "p-9",
        name: "Poedagar Corsair",
        description: "Luxurious Stainless Italian Steel with Chain Strap, Silver Bezel and White Dial",
        price: "contact for price",
        image: "/products/poedagar/p-9.jpeg"
      },
      {
        id: "p-10",
        name: "Poedagar Corsair - Provence Edition",
        description: "Luxurious Stainless Italian Steel with Chain Strap, Rose Gold Bezel and Black Dial",
        price: "contact for price",
        image: "/products/poedagar/p-10.jpeg"
      },
      {
        id: "p-11",
        name: "Poedagar Corsair - Provence Edition",
        description: "Luxurious Stainless Italian Steel with Chain Strap, Rose Gold Bezel and Azurite Blue Dial",
        price: "contact for price",
        image: "/products/poedagar/p-11.jpeg"
      },
      {
        id: "p-12",
        name: "Poedagar Intrepid Chronograph",
        description: "Crystal Lens, Leather Strap, Black Dial and Bezel Watch",
        price: "contact for price",
        image: "/products/poedagar/p-12.jpeg"
      },
      {
        id: "p-13",
        name: "Poedagar Intrepid Chronograph",
        description: "Crystal Lens, Leather Strap, Silver Bezel and Gold Dial Watch",
        price: "contact for price",
        image: "/products/poedagar/p-13.jpeg"
      },
      {
        id: "p-14",
        name: "POEDAGAR 857 Top Rectangle",
        description: "Luxurious Stainless Steel, Dark Blue Mirror Dial, Quartz Movement.",
        price: "contact for price",
        image: "/products/poedagar/p-14.jpeg"
      },
      {
        id: "p-15",
        name: "POEDAGAR 857 Top Rectangle",
        description: "Luxurious Stainless Steel, Silver Gold Mirror Dial, Quartz Movement.",
        price: "contact for price",
        image: "/products/poedagar/p-15.jpeg"
      },
      {
        id: "p-16",
        name: "POEDAGAR 857 Top Rectangle",
        description: "Luxurious Stainless Steel, Black Gold Mirror Dial, Quartz Movement.",
        price: "contact for price",
        image: "/products/poedagar/p-16.jpeg"
      },
      {
        id: "p-17",
        name: "POEDAGAR 857 Top Rectangle",
        description: "Luxurious Stainless Steel, Silver Black Mirror Dial, Quartz Movement.",
        price: "contact for price",
        image: "/products/poedagar/p-17.jpeg"
      },
      {
        id: "p-18",
        name: "POEDAGAR Low Rider - Black Edition",
        description: "Luxurious Stainless Steel,  Black Bezel and Dial, Precision Quartz Movement.",
        price: "contact for price",
        image: "/products/poedagar/p-18.jpeg"
      },
      {
        id: "p-19",
        name: "POEDAGAR Low Rider",
        description: "Luxurious Stainless Steel, Silver Bezel and Black Dial,Precision Quartz Movement.",
        price: "contact for price",
        image: "/products/poedagar/p-19.jpeg"
      },
      {
        id: "p-20",
        name: "POEDAGAR Low Rider",
        description: "Luxurious Stainless Steel, Black Bezel and Dial with Gold Accents,Precision Quartz Movement.",
        price: "contact for price",
        image: "/products/poedagar/p-20.jpeg"
      },
    ]
  },

  // Rolex
  {
    id: "rolex",
    name: "Rolex",
    tagline: "Every Rolex tells a story",
    image: "/brands/Rolex.jpg",
    products: [
      {
        id: "r-1",
        name: "Rolex Day-Date 40",
        description: "Ref. 228235 featuring an Everose gold case and a unique Eisenkiesel dial.",
        price: "Contact for price",
        image: "/products/rolex/r-1.jpeg"
      },
      {
        id: "r-2",
        name: "Rolex Sky Dweller",
        description: "distinct sunburst blue dial, a fluted bezel made of white gold, and a Jubilee bracelet.",
        price: "Contact for price",
        image: "/products/rolex/r-2.jpeg"
      },
      {
        id: "r-3",
        name: "Rolex Day-Date 40",
        description: "crafted in 18 ct Everose gold with a slate ombré dial..",
        price: "Contact for price",
        image: "/products/rolex/r-3.jpeg"
      },
      {
        id: "r-4",
        name: "Rolex Datejust 36",
        description: "Crafted in 18kt yellow gold with a champagne Roman numeral dial and a Jubilee bracelet.",
        price: "Contact for price",
        image: "/products/rolex/r-4.jpeg"
      },
      {
        id: "r-5",
        name: "Rolex Lady-Datejust 28",
        description: "two-tone steel and rose gold design, featuring a white dial with diamond markers.",
        price: "Contact for price",
        image: "/products/rolex/r-5.jpeg"
      },
      {
        id: "r-6",
        name: "Rolex Lady-Datejust",
        description: "Yellow Gold with a silver Roman numeral dial and a Jubilee bracelet.",
        price: "Contact for price",
        image: "/products/rolex/r-6.jpeg"
      },
      {
        id: "r-7",
        name: "Rolex Datejust 28",
        description: "chocolate dial and diamond hour markers",
        price: "Contact for price",
        image: "/products/rolex/r-7.jpeg"
      },
      {
        id: "r-8",
        name: "Rolex Datejust 41",
        description: "two-tone rose gold and stainless steel design with a slate Wimbledon dial and Jubilee bracelet.",
        price: "Contact for price",
        image: "/products/rolex/r-8.jpeg"
      },
      {
        id: "r-9",
        name: "Rolex Datejust 41mm",
        description: " It is constructed from Oystersteel (stainless steel) and 18k white gold, The watch features a distinctive mint green sunray dial and a fluted white gold bezel.",
        price: "Contact for price",
        image: "/products/rolex/r-9.jpeg"
      },
      {
        id: "r-10",
        name: "Rolex Datejust",
        description: "yellow gold finish with a grey dial and diamond hour markers.",
        price: "Contact for price",
        image: "/products/rolex/r-10.jpeg"
      },
      {
        id: "r-11",
        name: "Rolex Datejust 41",
        description: "The watch features a Wimbledon dial with a rose gold and stainless steel bracelet.",
        price: "Contact for price",
        image: "/products/rolex/r-11.jpeg"
      },
      {
        id: "r-13",
        name: "Rolex Sky-Dweller 326934",
        description: "stainless steel watch with a blue dial and Jubilee bracelet.",
        price: "Contact for price",
        image: "/products/rolex/r-13.jpeg"
      },
      {
        id: "r-14",
        name: "Rolex Datejust 41",
        description: "Two Tone Everose Gold Wimbledon 126331.",
        price: "Contact for price",
        image: "/products/rolex/r-14.jpeg"
      },
      {
        id: "r-15",
        name: "Rolex Sky-Dweller 336934",
        description: "featuring a 42mm case made of Oystersteel and 18kt white gold, distinctive fluted bezel, a mint green sunburst dial, and a second time zone display via an off-center 24-hour disc.",
        price: "Contact for price",
        image: "/products/rolex/r-15.jpeg"
      },
      {
        id: "r-16",
        name: "Rolex Day-Date 40",
        description: "features an 18kt yellow gold case, bezel, and 'President' bracelet.",
        price: "Contact for price",
        image: "/products/rolex/r-16.jpeg"
      },
    ]
  },

  // Tissot
  {
    id: "tissot",
    name: "Tissot",
    tagline: "Innovators by tradition",
    image: "/brands/Tissot.jpg",
    products: [
      {
        id: "t-3",
        name: "Tissot PRX",
        description: "Luxurious Stainless Steel with Silver Bezel and White Dial",
        price: "Contact for price",
        image: "/products/tissot/t-3.jpeg"
      },
      {
        id: "t-2",
        name: "Tissot PRX Quartz watch",
        description: "Luxurious Stainless Steel with Gold Bezel and Black Dial",
        price: "Contact for price",
        image: "/products/tissot/t-2.jpeg"
      },
      {
        id: "t-4",
        name: "Tissot PRX Quartz watch",
        description: "Luxurious Stainless Steel with Gold Bezel and Gold Chrome Dial",
        price: "Contact for price",
        image: "/products/tissot/t-4.jpeg"
      },
      {
        id: "t-5",
        name: "Tissot PRX Quartz watch",
        description: "Luxurious Stainless Steel with Silver Bezel and Azurite Blue Dial",
        price: "Contact for price",
        image: "/products/tissot/t-5.jpeg"
      },
      {
        id: "t-6",
        name: "Tissot PRX Quartz watch",
        description: "featuring a green waffle-textured dial and matching green rubber strap.",
        price: "Contact for price",
        image: "/products/tissot/t-6.jpeg"
      },
      {
        id: "t-7",
        name: "Tissot PRX Quartz watch",
        description: "Textured black dial and a blue rubber strap",
        price: "Contact for price",
        image: "/products/tissot/t-7.jpeg"
      },
      {
        id: "t-8",
        name: "Tissot PRX Quartz watch",
        description: "Black forged carbon case and a black rubber strap.",
        price: "Contact for price",
        image: "/products/tissot/t-8.jpeg"
      },
      {
        id: "t-9",
        name: "Tissot PRX Powermatic 80",
        description: "gold-colored dial, stainless steel case, and an orange rubber strap.",
        price: "Contact for price",
        image: "/products/tissot/t-9.jpeg"
      },
      {
        id: "t-10",
        name: "Tissot PRX Powermatic 80",
        description: "featuring a black waffle dial, a gold-plated bezel, and a black rubber strap",
        price: "Contact for price",
        image: "/products/tissot/t-10.jpeg"
      },
    ]
  },

  // Hislon 
  {
    id: "hislon",
    name: "Hislon",
    tagline: "Crafted with Accuracy and Class",
    image: "/brands/hislon-saatini-kaydet-2.jpg",
    products: [
      {
        id: "h-1",
        name: "Hislon 1928",
        description: "featuring a silver dial and stainless steel band.",
        price: "contact for price",
        image: "/products/hislon/h-1.jpeg"
      },
      {
        id: "h-2",
        name: "Hislon 1928",
        description: "two-tone stainless steel and gold strap with a green textured dial.",
        price: "contact for price",
        image: "/products/hislon/h-2.jpeg"
      },
      {
        id: "h-3",
        name: "Hislon 1928",
        description: "luxury men's wristwatch in a two-tone silver and rose gold finish.",
        price: "contact for price",
        image: "/products/hislon/h-3.jpeg"
      },
      {
        id: "h-4",
        name: "Hislon Classic Collection ultra-flat quartz wristwatch",
        description: "gold-tone stainless steel chain bracelet.",
        price: "contact for price",
        image: "/products/hislon/h-4.jpeg"
      },
      {
        id: "h-5",
        name: "Hislon 1928",
        description: "Luxurious stainless steel men's wristwatches with a gray dial and sapphire crystal.",
        price: "contact for price",
        image: "/products/hislon/h-5.jpeg"
      },
      {
        id: "h-6",
        name: "Hislon 1928",
        description: "Sapphire Ultra Slim men's wristwatch with a blue dial.",
        price: "contact for price",
        image: "/products/hislon/h-6.jpeg"
      },
      {
        id: "h-7",
        name: "Hislon 1928 Sapphire Ultra Slim",
        description: "featuring a black leather strap with a crocodile pattern and a gold-toned clasp.",
        price: "contact for price",
        image: "/products/hislon/h-7.jpeg"
      },
      {
        id: "h-8",
        name: "Hislon 1928 Sapphire Ultra Slim",
        description: "featuring a black dial and a leather strap",
        price: "contact for price",
        image: "/products/hislon/h-8.jpeg"
      },
      {
        id: "h-9",
        name: "Hislon CL127T-14SF",
        description: "sapphire ultra-slim wristwatch with a black textured dial and a black leather strap.",
        price: "contact for price",
        image: "/products/hislon/h-9.jpeg"
      },
      {
        id: "h-10",
        name: "Hislon Ultra Slim watch",
        description: "featuring a green striped dial and a matching green leather strap.",
        price: "contact for price",
        image: "/products/hislon/h-10.jpeg"
      },
      {
        id: "h-11",
        name: "Hislon Sapphire Ultra Slim",
        description: "Men's Watch with a white dial, two-tone silver and rose gold case, and a black leather strap.",
        price: "contact for price",
        image: "/products/hislon/h-11.jpeg"
      },
      {
        id: "h-12",
        name: "Hislon Sapphire Ultra Slim",
        description: "featuring a silver striped dial and a black leather strap.",
        price: "contact for price",
        image: "/products/hislon/h-12.jpeg"
      },
      {
        id: "h-13",
        name: "Hislon Sapphire Ultra Slim",
        description: "featuring a silver-tone octagonal case, a white dial with horizontal lines, and a brown leather strap.",
        price: "contact for price",
        image: "/products/hislon/h-13.jpeg"
      },
      {
        id: "h-14",
        name: "Hislon Ultra Slim",
        description: "featuring a two-tone octagonal bezel and a textured white dial.",
        price: "contact for price",
        image: "/products/hislon/h-14.jpeg"
      },
      {
        id: "h-15",
        name: "Hislon Ultra Slim CL127N Series",
        description: "Japanese quartz movement, a sapphire crystal face, and is water-resistant up to 3 ATM, blue dial and Blue Silicone Rubber Strap",
        price: "contact for price",
        image: "/products/hislon/h-15.jpeg"
      },
      {
        id: "h-16",
        name: "Hislon Ultra Slim CL127N Series",
        description: "Japanese quartz movement, a sapphire crystal face, and is water-resistant up to 3 ATM, Green dial and Green Silicone Rubber Strap",
        price: "contact for price",
        image: "/products/hislon/h-16.jpeg"
      },
    ]
  },
  {
    id: "valenzo",
    name: "Valenzo",
    tagline: "Time flies, But Shadows Always Prevail",
    image: "/brands/valenzo.jpeg",
    products: [
      {
        id: "v-1",
        name: "Engraved Arabic",
        description: "Plastic Chain, Blacked out Bezel and Dial",
        price: "contact for price",
        image: "/products/valenzo/v-1.jpeg"
      },
      {
        id: "v-2",
        name: "Engraved Arabic",
        description: "Plastic Chain, White Bezel and Dial",
        price: "contact for price",
        image: "/products/valenzo/v-2.jpeg"
      },
      {
        id: "v-3",
        name: "Arabic Continent",
        description: "Plastic Chain, Black Bezel and Blue Dial",
        price: "contact for price",
        image: "/products/valenzo/v-3.jpeg"
      },
      {
        id: "v-4",
        name: "Arabic Continent",
        description: "Plastic Chain, Black Bezel and Dial",
        price: "contact for price",
        image: "/products/valenzo/v-4.jpeg"
      },
      {
        id: "v-5",
        name: "Valenzo's Trident Arabic",
        description: "Plastic Chain, Matte Black Bezel and Dial",
        price: "contact for price",
        image: "/products/valenzo/v-5.jpeg"
      },
      {
        id: "v-6",
        name: "Engraved Arabic",
        description: "Plastic Chain, Matte Black Bezel and Dial",
        price: "contact for price",
        image: "/products/valenzo/v-6.jpeg"
      },
    ]
  },

];