export type TreasureCategory =
  | "Chests"
  | "Ashen Chests"
  | "Coral Chests"
  | "Skulls"
  | "Ashen Skulls"
  | "Coral Skulls"
  | "Crates"
  | "Cargo Runs"
  | "Fish"
  | "Meat"
  | "Gems"
  | "Siren Gems"
  | "Artifacts"
  | "Bounty"
  | "Vault"
  | "Other";

export type Company =
  | "Gold Hoarders"
  | "Order of Souls"
  | "Merchant Alliance"
  | "Reaper's Bones"
  | "Athena's Fortune"
  | "Hunter's Call"
  | "Bilge Rats"
  | "Any";

export interface TreasureItem {
  id: string;
  name: string;
  category: TreasureCategory;
  bestCompany: Company;
  minBase: number;
  maxBase: number | null;
  notes?: string;
  fixedValue?: boolean;
  doubloons?: boolean;
}

// Emissary Grade Multipliers
// Grade I: 1.0x | Grade II: 1.33x | Grade III: 1.66x | Grade IV: 2.0x | Grade V: 2.5x
export const EMISSARY_MULTIPLIERS = [1.0, 1.33, 1.66, 2.0, 2.5] as const;

export const treasureData: TreasureItem[] = [

  // ─── REGULAR CHESTS ───────────────────────────────────────────────────────
  { id: "c1",  name: "Castaway's Chest",            category: "Chests", bestCompany: "Gold Hoarders", minBase: 60,    maxBase: 130 },
  { id: "c2",  name: "Seafarer's Chest",             category: "Chests", bestCompany: "Gold Hoarders", minBase: 140,   maxBase: 260 },
  { id: "c3",  name: "Marauder's Chest",             category: "Chests", bestCompany: "Gold Hoarders", minBase: 280,   maxBase: 520 },
  { id: "c4",  name: "Captain's Chest",              category: "Chests", bestCompany: "Gold Hoarders", minBase: 560,   maxBase: 1100 },
  { id: "c5",  name: "Skeleton Captain's Chest",     category: "Chests", bestCompany: "Gold Hoarders", minBase: 1150,  maxBase: 1550, notes: "Dropped by Skeleton Captains" },
  { id: "c6",  name: "Stronghold Chest",             category: "Chests", bestCompany: "Gold Hoarders", minBase: 1500,  maxBase: 3000, notes: "Found in Fort Vaults" },
  { id: "c7",  name: "Chest of Ancient Tributes",    category: "Chests", bestCompany: "Gold Hoarders", minBase: 3000,  maxBase: 3400 },
  { id: "c8",  name: "Chest of Sorrow",              category: "Chests", bestCompany: "Gold Hoarders", minBase: 5200,  maxBase: 8800, notes: "Cursed - weeps water, flooding ship" },
  { id: "c9",  name: "Chest of a Thousand Grogs",    category: "Chests", bestCompany: "Gold Hoarders", minBase: 5200,  maxBase: 8800, notes: "Cursed - intoxicates carrier" },
  { id: "c10", name: "Chest of Rage",                category: "Chests", bestCompany: "Gold Hoarders", minBase: 5200,  maxBase: 8800, notes: "Cursed - heats up, ignites ship" },
  { id: "c11", name: "Chest of Legends",             category: "Chests", bestCompany: "Athena's Fortune", minBase: 8000, maxBase: 10000, notes: "Pirate Legend only — sell to Mysterious Stranger in any Tavern" },
  { id: "c12", name: "Collector's Chest",            category: "Chests", bestCompany: "Gold Hoarders", minBase: 800,   maxBase: 1600, notes: "Contains gems and artefacts inside" },
  { id: "c13", name: "Humble Gift",                  category: "Chests", bestCompany: "Reaper's Bones", minBase: 0, maxBase: null, fixedValue: true, doubloons: true, notes: "5 Doubloons — sell only to Reaper's Bones" },
  { id: "c14", name: "Generous Gift",                category: "Chests", bestCompany: "Reaper's Bones", minBase: 0, maxBase: null, fixedValue: true, doubloons: true, notes: "10 Doubloons — sell only to Reaper's Bones" },

  // ─── ASHEN CHESTS (Devil's Roar) ─────────────────────────────────────────
  { id: "ac1", name: "Ashen Castaway's Chest",       category: "Ashen Chests", bestCompany: "Gold Hoarders", minBase: 140,  maxBase: 260 },
  { id: "ac2", name: "Ashen Seafarer's Chest",        category: "Ashen Chests", bestCompany: "Gold Hoarders", minBase: 280,  maxBase: 520 },
  { id: "ac3", name: "Ashen Marauder's Chest",        category: "Ashen Chests", bestCompany: "Gold Hoarders", minBase: 560,  maxBase: 1100 },
  { id: "ac4", name: "Ashen Captain's Chest",         category: "Ashen Chests", bestCompany: "Gold Hoarders", minBase: 1100, maxBase: 2100, notes: "Rarest standard Ashen chest" },
  { id: "ac5", name: "Ashen Stronghold Chest",        category: "Ashen Chests", bestCompany: "Gold Hoarders", minBase: 3000, maxBase: 6000 },
  { id: "ac6", name: "Chest of the Ashen Winds",      category: "Ashen Chests", bestCompany: "Gold Hoarders", minBase: 2500, maxBase: 5000, notes: "World event drop — also usable as a fire weapon" },
  { id: "ac7", name: "Ashen Chest of Legends",        category: "Ashen Chests", bestCompany: "Athena's Fortune", minBase: 8600, maxBase: 11000, notes: "Devil's Roar variant of Chest of Legends" },

  // ─── CORAL CHESTS (Siren Shrines / Treasuries) ───────────────────────────
  { id: "cc1", name: "Coral Castaway's Chest",        category: "Coral Chests", bestCompany: "Gold Hoarders", minBase: 105,  maxBase: 228, notes: "Found in Siren Shrines and Siren Treasuries" },
  { id: "cc2", name: "Coral Seafarer's Chest",         category: "Coral Chests", bestCompany: "Gold Hoarders", minBase: 245,  maxBase: 455 },
  { id: "cc3", name: "Coral Treasure Chest",           category: "Coral Chests", bestCompany: "Gold Hoarders", minBase: 375,  maxBase: 780 },
  { id: "cc4", name: "Coral Marauder's Chest",         category: "Coral Chests", bestCompany: "Gold Hoarders", minBase: 490,  maxBase: 910 },
  { id: "cc5", name: "Coral Captain's Chest",          category: "Coral Chests", bestCompany: "Gold Hoarders", minBase: 980,  maxBase: 1925 },

  // ─── REGULAR SKULLS ───────────────────────────────────────────────────────
  { id: "s1",  name: "Foul Bounty Skull",             category: "Skulls", bestCompany: "Order of Souls", minBase: 90,   maxBase: 180 },
  { id: "s2",  name: "Disgraced Bounty Skull",        category: "Skulls", bestCompany: "Order of Souls", minBase: 180,  maxBase: 350 },
  { id: "s3",  name: "Hateful Bounty Skull",          category: "Skulls", bestCompany: "Order of Souls", minBase: 350,  maxBase: 750 },
  { id: "s4",  name: "Villainous Bounty Skull",       category: "Skulls", bestCompany: "Order of Souls", minBase: 750,  maxBase: 1450 },
  { id: "s5",  name: "Skeleton Captain's Skull",      category: "Skulls", bestCompany: "Order of Souls", minBase: 850,  maxBase: 2200, notes: "Dropped by Skeleton Captains during Bounty Map quests" },
  { id: "s6",  name: "Stronghold Skull",              category: "Skulls", bestCompany: "Order of Souls", minBase: 1800, maxBase: 4200, notes: "Dropped from Fort Vault Skeleton Captains" },
  { id: "s7",  name: "Skull of the Damned",           category: "Skulls", bestCompany: "Order of Souls", minBase: 1050, maxBase: 1250, notes: "Ghostly variant" },
  { id: "s8",  name: "Captain Skull of the Damned",   category: "Skulls", bestCompany: "Order of Souls", minBase: 1700, maxBase: 2950, notes: "Ghostly Captain variant" },
  { id: "s9",  name: "Gold Hoarder's Skull",          category: "Skulls", bestCompany: "Order of Souls", minBase: 10000, maxBase: null, fixedValue: true, notes: "Unique skull — fixed 10,000g, no emissary bonus" },

  // ─── ASHEN SKULLS (Devil's Roar — ~2x regular value) ─────────────────────
  { id: "as1", name: "Ashen Foul Bounty Skull",       category: "Ashen Skulls", bestCompany: "Order of Souls", minBase: 180,  maxBase: 350 },
  { id: "as2", name: "Ashen Disgraced Bounty Skull",  category: "Ashen Skulls", bestCompany: "Order of Souls", minBase: 350,  maxBase: 750 },
  { id: "as3", name: "Ashen Hateful Bounty Skull",    category: "Ashen Skulls", bestCompany: "Order of Souls", minBase: 750,  maxBase: 1450 },
  { id: "as4", name: "Ashen Villainous Bounty Skull", category: "Ashen Skulls", bestCompany: "Order of Souls", minBase: 1450, maxBase: 2800 },
  { id: "as5", name: "Ashen Winds Skull",             category: "Ashen Skulls", bestCompany: "Order of Souls", minBase: 4000, maxBase: 10000, notes: "Rare world event skull — value depends on remaining charge; also functions as a fire weapon" },

  // ─── CORAL SKULLS (Siren Shrines / Treasuries) ────────────────────────────
  { id: "cs1", name: "Coral Foul Skull",              category: "Coral Skulls", bestCompany: "Order of Souls", minBase: 158,  maxBase: 315, notes: "Found in Siren Shrines and Siren Treasuries" },
  { id: "cs2", name: "Coral Disgraced Skull",         category: "Coral Skulls", bestCompany: "Order of Souls", minBase: 315,  maxBase: 630 },
  { id: "cs3", name: "Coral Hateful Skull",           category: "Coral Skulls", bestCompany: "Order of Souls", minBase: 630,  maxBase: 1260 },
  { id: "cs4", name: "Coral Villainous Skull",        category: "Coral Skulls", bestCompany: "Order of Souls", minBase: 1260, maxBase: 2520 },

  // ─── TRADE GOOD CRATES ────────────────────────────────────────────────────
  { id: "cr1",  name: "Crate of Wood",                category: "Crates", bestCompany: "Merchant Alliance", minBase: 150, maxBase: 300 },
  { id: "cr2",  name: "Crate of Iron",                category: "Crates", bestCompany: "Merchant Alliance", minBase: 150, maxBase: 300 },
  { id: "cr3",  name: "Crate of Cannonballs",         category: "Crates", bestCompany: "Merchant Alliance", minBase: 150, maxBase: 300 },
  { id: "cr4",  name: "Crate of Rope",                category: "Crates", bestCompany: "Merchant Alliance", minBase: 150, maxBase: 300 },
  { id: "cr5",  name: "Crate of Tea",                 category: "Crates", bestCompany: "Merchant Alliance", minBase: 300, maxBase: 600 },
  { id: "cr6",  name: "Crate of Rum",                 category: "Crates", bestCompany: "Merchant Alliance", minBase: 300, maxBase: 600 },
  { id: "cr7",  name: "Crate of Coffee",              category: "Crates", bestCompany: "Merchant Alliance", minBase: 350, maxBase: 700 },
  { id: "cr8",  name: "Crate of Sugar",               category: "Crates", bestCompany: "Merchant Alliance", minBase: 150, maxBase: 300 },
  { id: "cr9",  name: "Crate of Cloth",               category: "Crates", bestCompany: "Merchant Alliance", minBase: 250, maxBase: 500 },
  { id: "cr10", name: "Crate of Spices",              category: "Crates", bestCompany: "Merchant Alliance", minBase: 400, maxBase: 800 },
  { id: "cr11", name: "Crate of Exotic Spices",       category: "Crates", bestCompany: "Merchant Alliance", minBase: 600, maxBase: 1200 },
  { id: "cr12", name: "Crate of Silk",                category: "Crates", bestCompany: "Merchant Alliance", minBase: 600, maxBase: 1200 },
  { id: "cr13", name: "Crate of Fine Sugar",          category: "Crates", bestCompany: "Merchant Alliance", minBase: 400, maxBase: 800 },
  { id: "cr14", name: "Crate of Explosives",          category: "Crates", bestCompany: "Merchant Alliance", minBase: 300, maxBase: 600 },
  { id: "cr15", name: "Chicken (White Feather)",      category: "Crates", bestCompany: "Merchant Alliance", minBase: 150, maxBase: null, fixedValue: true },
  { id: "cr16", name: "Chicken (Ashen)",              category: "Crates", bestCompany: "Merchant Alliance", minBase: 250, maxBase: null, fixedValue: true },
  { id: "cr17", name: "Snake (Splashtail)",           category: "Crates", bestCompany: "Merchant Alliance", minBase: 150, maxBase: null, fixedValue: true },
  { id: "cr18", name: "Snake (Ivory)",                category: "Crates", bestCompany: "Merchant Alliance", minBase: 300, maxBase: null, fixedValue: true },
  { id: "cr19", name: "Pig (Grunter)",                category: "Crates", bestCompany: "Merchant Alliance", minBase: 150, maxBase: null, fixedValue: true },
  { id: "cr20", name: "Pig (Ashen)",                  category: "Crates", bestCompany: "Merchant Alliance", minBase: 250, maxBase: null, fixedValue: true },

  // ─── CARGO RUN CRATES (condition-based) ───────────────────────────────────
  { id: "cg1", name: "Crate of Rum Bottles (Perfect)",          category: "Cargo Runs", bestCompany: "Merchant Alliance", minBase: 700,  maxBase: null, fixedValue: true, notes: "Degrades: Damaged 500g, Very Damaged 300g, Ruined 100g. Keep dry and avoid collisions." },
  { id: "cg2", name: "Crate of Exotic Plants (Perfect)",        category: "Cargo Runs", bestCompany: "Merchant Alliance", minBase: 700,  maxBase: null, fixedValue: true, notes: "Degrades: Damaged 500g, Very Damaged 300g, Ruined 100g. Keep out of water." },
  { id: "cg3", name: "Crate of Woven Cloth (Perfect)",          category: "Cargo Runs", bestCompany: "Merchant Alliance", minBase: 700,  maxBase: null, fixedValue: true, notes: "Degrades: Damaged 500g, Very Damaged 300g, Ruined 100g. Keep out of water." },
  { id: "cg4", name: "Ashen Crate of Rum Bottles (Perfect)",    category: "Cargo Runs", bestCompany: "Merchant Alliance", minBase: 1400, maxBase: null, fixedValue: true, notes: "Devil's Roar variant. Degrades: 1000g, 600g, 200g. Much riskier due to volcanic activity." },
  { id: "cg5", name: "Ashen Crate of Exotic Plants (Perfect)",  category: "Cargo Runs", bestCompany: "Merchant Alliance", minBase: 1400, maxBase: null, fixedValue: true, notes: "Devil's Roar variant. Degrades: 1000g, 600g, 200g." },
  { id: "cg6", name: "Ashen Crate of Woven Cloth (Perfect)",    category: "Cargo Runs", bestCompany: "Merchant Alliance", minBase: 1400, maxBase: null, fixedValue: true, notes: "Devil's Roar variant. Degrades: 1000g, 600g, 200g." },

  // ─── FISH (sold raw or cooked to Hunter's Call at Seaposts) ───────────────
  // Values shown: raw / cooked. Cooked always worth more. Trophy = ~3-5x regular.
  { id: "f1",  name: "Splashtail (Ruby) — Common",    category: "Fish", bestCompany: "Hunter's Call", minBase: 25,   maxBase: 40,   notes: "Raw: 25g | Cooked: 40g | Trophy Cooked: 100g | No bait, found anywhere" },
  { id: "f2",  name: "Splashtail (Umber) — Rare",     category: "Fish", bestCompany: "Hunter's Call", minBase: 250,  maxBase: 375,  notes: "Raw: 250g | Cooked: 375g | Trophy Cooked: 940g | No bait" },
  { id: "f3",  name: "Splashtail (Indigo)",            category: "Fish", bestCompany: "Hunter's Call", minBase: 75,   maxBase: 115,  notes: "Raw: 75g | Cooked: 115g | Trophy Cooked: 285g" },
  { id: "f4",  name: "Splashtail (Sunny / Seafoam)",  category: "Fish", bestCompany: "Hunter's Call", minBase: 50,   maxBase: 75,   notes: "Raw: 50g | Cooked: 75g | Trophy Cooked: 190g | Seafoam night only" },
  { id: "f5",  name: "Plentifin (Olive) — Common",    category: "Fish", bestCompany: "Hunter's Call", minBase: 100,  maxBase: 150,  notes: "Raw: 100g | Cooked: 150g | Earthworm bait | Shores of Plenty" },
  { id: "f6",  name: "Plentifin (Bright)",             category: "Fish", bestCompany: "Hunter's Call", minBase: 300,  maxBase: 450,  notes: "Raw: 300g | Cooked: 450g | Trophy Cooked: 1,125g" },
  { id: "f7",  name: "Plentifin (Bonedust) — Rare",   category: "Fish", bestCompany: "Hunter's Call", minBase: 1000, maxBase: 1500, notes: "Raw: 1,000g | Cooked: 1,500g | Trophy Cooked: 3,750g | Rarest Plentifin" },
  { id: "f8",  name: "Ancientscale (Almond) — Common",category: "Fish", bestCompany: "Hunter's Call", minBase: 100,  maxBase: 150,  notes: "Raw: 100g | Cooked: 150g | Leech bait | Ancient Isles" },
  { id: "f9",  name: "Ancientscale (Bone) — Rare",    category: "Fish", bestCompany: "Hunter's Call", minBase: 1000, maxBase: 1500, notes: "Raw: 1,000g | Cooked: 1,500g | Trophy Cooked: 3,750g" },
  { id: "f10", name: "Ancientscale (Starshine)",       category: "Fish", bestCompany: "Hunter's Call", minBase: 300,  maxBase: 450,  notes: "Raw: 300g | Cooked: 450g | Trophy Cooked: 1,125g" },
  { id: "f11", name: "Wildsplash (Shorestalker) — Common", category: "Fish", bestCompany: "Hunter's Call", minBase: 100, maxBase: 150, notes: "Raw: 100g | Cooked: 150g | Grub bait | The Wilds" },
  { id: "f12", name: "Wildsplash (Muddy) — Rare",     category: "Fish", bestCompany: "Hunter's Call", minBase: 1000, maxBase: 1500, notes: "Raw: 1,000g | Cooked: 1,500g | Trophy Cooked: 3,750g" },
  { id: "f13", name: "Devilfish (Ashen) — Common",    category: "Fish", bestCompany: "Hunter's Call", minBase: 100,  maxBase: 150,  notes: "Raw: 100g | Cooked: 150g | Leeches | Devil's Roar" },
  { id: "f14", name: "Devilfish (Forsaken) — Rare",   category: "Fish", bestCompany: "Hunter's Call", minBase: 1000, maxBase: 1500, notes: "Raw: 1,000g | Cooked: 1,500g | Trophy Cooked: 3,750g" },
  { id: "f15", name: "Battlegill (Jade) — Common",    category: "Fish", bestCompany: "Hunter's Call", minBase: 300,  maxBase: 450,  notes: "Raw: 300g | Cooked: 450g | Grubs | Near active Forts or Skeleton Ships" },
  { id: "f16", name: "Battlegill (Sky) — Rare",       category: "Fish", bestCompany: "Hunter's Call", minBase: 1000, maxBase: 1500, notes: "Raw: 1,000g | Cooked: 1,500g | Trophy Cooked: 3,750g" },
  { id: "f17", name: "Wrecker (Rose) — Common",       category: "Fish", bestCompany: "Hunter's Call", minBase: 300,  maxBase: 450,  notes: "Raw: 300g | Cooked: 450g | Earthworms | Near shipwrecks" },
  { id: "f18", name: "Wrecker (Raven) — Rare",        category: "Fish", bestCompany: "Hunter's Call", minBase: 1000, maxBase: 1500, notes: "Raw: 1,000g | Cooked: 1,500g | Trophy Cooked: 3,750g" },
  { id: "f19", name: "Stormfish (Ancient) — Common",  category: "Fish", bestCompany: "Hunter's Call", minBase: 500,  maxBase: 750,  notes: "Raw: 500g | Cooked: 750g | Leeches | During active storms" },
  { id: "f20", name: "Stormfish (Twilight) — Rare",   category: "Fish", bestCompany: "Hunter's Call", minBase: 1500, maxBase: 2250, notes: "Raw: 1,500g | Cooked: 2,250g | Trophy Cooked: 5,625g | Most valuable fish" },
  { id: "f21", name: "Islehopper (Stone) — Common",   category: "Fish", bestCompany: "Hunter's Call", minBase: 50,   maxBase: 75,   notes: "Raw: 50g | Cooked: 75g | No bait | Near large island shores" },
  { id: "f22", name: "Islehopper (Amethyst) — Rare",  category: "Fish", bestCompany: "Hunter's Call", minBase: 1000, maxBase: 1500, notes: "Raw: 1,000g | Cooked: 1,500g | Trophy Cooked: 3,750g" },
  { id: "f23", name: "Pondie (Charcoal) — Common",    category: "Fish", bestCompany: "Hunter's Call", minBase: 50,   maxBase: 75,   notes: "Raw: 50g | Cooked: 75g | Earthworms | Freshwater ponds only" },
  { id: "f24", name: "Pondie (Moonsky) — Rare",       category: "Fish", bestCompany: "Hunter's Call", minBase: 1000, maxBase: 1500, notes: "Raw: 1,000g | Cooked: 1,500g | Trophy Cooked: 3,750g | Night only" },

  // ─── MEAT (Hunter's Call) ─────────────────────────────────────────────────
  // Note: Meat cannot be sold raw. All values are for cooked meat.
  { id: "m1", name: "Chicken Meat (Cooked)",      category: "Meat", bestCompany: "Hunter's Call", minBase: 10,  maxBase: null, fixedValue: true, notes: "Cooked only. Kill chickens on islands." },
  { id: "m2", name: "Pork (Cooked)",              category: "Meat", bestCompany: "Hunter's Call", minBase: 10,  maxBase: null, fixedValue: true, notes: "Cooked only. Kill pigs on islands." },
  { id: "m3", name: "Snake Meat (Cooked)",        category: "Meat", bestCompany: "Hunter's Call", minBase: 10,  maxBase: null, fixedValue: true, notes: "Cooked only. Kill snakes on islands." },
  { id: "m4", name: "Shark Meat (Cooked)",        category: "Meat", bestCompany: "Hunter's Call", minBase: 25,  maxBase: null, fixedValue: true, notes: "Cooked only. Kill sharks at sea." },
  { id: "m5", name: "Megalodon Meat (Cooked)",    category: "Meat", bestCompany: "Hunter's Call", minBase: 150, maxBase: null, fixedValue: true, notes: "Cooked only. Kill any Megalodon. Equivalent to Trophy Fish value." },
  { id: "m6", name: "Kraken Meat (Cooked)",       category: "Meat", bestCompany: "Hunter's Call", minBase: 150, maxBase: null, fixedValue: true, notes: "Cooked only. Harvest from Kraken tentacles. Equivalent to Trophy Fish value." },

  // ─── MERMAID GEMS ─────────────────────────────────────────────────────────
  { id: "g1", name: "Sapphire Mermaid Gem",  category: "Gems", bestCompany: "Any", minBase: 800,  maxBase: 1200, notes: "Destroy Cursed Mermaid Statues on island shores. Sell to any company except Athena's Fortune." },
  { id: "g2", name: "Emerald Mermaid Gem",   category: "Gems", bestCompany: "Any", minBase: 1200, maxBase: 1800 },
  { id: "g3", name: "Ruby Mermaid Gem",      category: "Gems", bestCompany: "Any", minBase: 2000, maxBase: 3200, notes: "Rarest Mermaid Gem. Ruby statues are the hardest to destroy." },

  // ─── SIREN GEMS ───────────────────────────────────────────────────────────
  { id: "sg1", name: "Sapphire Siren Gem",   category: "Siren Gems", bestCompany: "Any", minBase: 1000, maxBase: null, fixedValue: true, notes: "Dropped by Sirens and Eel-ectric Ocean Crawlers. Found in Siren Shrines/Treasuries. Sell to any company except Athena's Fortune." },
  { id: "sg2", name: "Emerald Siren Gem",    category: "Siren Gems", bestCompany: "Any", minBase: 1500, maxBase: null, fixedValue: true, notes: "Dropped by Siren Leaders and Hermit Ocean Crawlers." },
  { id: "sg3", name: "Ruby Siren Gem",       category: "Siren Gems", bestCompany: "Any", minBase: 2000, maxBase: null, fixedValue: true, notes: "Dropped by Crab Ocean Crawlers. Rarest Siren Gem." },

  // ─── ATHENA'S FORTUNE ─────────────────────────────────────────────────────
  { id: "at3", name: "Box of Wondrous Secrets",       category: "Artifacts", bestCompany: "Athena's Fortune", minBase: 25000, maxBase: null,  fixedValue: true },
  { id: "at4", name: "Skull of Siren Song",           category: "Artifacts", bestCompany: "Athena's Fortune", minBase: 10000, maxBase: 15000 },
  { id: "at5", name: "Chalice of Ancient Tributes",   category: "Artifacts", bestCompany: "Athena's Fortune", minBase: 6000,  maxBase: 9000 },
  { id: "at6", name: "Keg of Ancient Black Powder",   category: "Artifacts", bestCompany: "Athena's Fortune", minBase: 3000,  maxBase: 5000,  notes: "Explosive — glows green. Handle carefully." },
  { id: "at7", name: "Gilded Relic of Ancient Fortune",category: "Artifacts", bestCompany: "Athena's Fortune", minBase: 1400, maxBase: 1550 },
  { id: "at8", name: "Villainous Skull of Ancient Fortune", category: "Artifacts", bestCompany: "Athena's Fortune", minBase: 1400, maxBase: 1550 },

  // ─── GOLD HOARDERS ARTEFACTS ──────────────────────────────────────────────
  { id: "ar1", name: "Enchanted Lantern",   category: "Artifacts", bestCompany: "Gold Hoarders", minBase: 800,  maxBase: 1500 },
  { id: "ar2", name: "Ancient Vase",        category: "Artifacts", bestCompany: "Gold Hoarders", minBase: 1200, maxBase: 2400 },
  { id: "ar3", name: "Jar of Dirt",         category: "Artifacts", bestCompany: "Gold Hoarders", minBase: 500,  maxBase: 1000 },
  { id: "ar4", name: "Totem",               category: "Artifacts", bestCompany: "Gold Hoarders", minBase: 150,  maxBase: 300 },
  { id: "ar5", name: "Relic",               category: "Artifacts", bestCompany: "Gold Hoarders", minBase: 2000, maxBase: 4000 },
  { id: "ar6", name: "Trinket",             category: "Artifacts", bestCompany: "Gold Hoarders", minBase: 100,  maxBase: 500,  notes: "Found inside Collector's Chests" },
  { id: "ar7", name: "Breath of the Sea",   category: "Artifacts", bestCompany: "Gold Hoarders", minBase: 2000, maxBase: 4000, notes: "Found exclusively in Siren Treasuries" },

  // ─── TREASURY VAULT KEYS ──────────────────────────────────────────────────
  { id: "vk1", name: "Stone Treasure Vault Key",  category: "Vault", bestCompany: "Gold Hoarders", minBase: 1200, maxBase: null, fixedValue: true, notes: "From Pirate Voyage tier. Use it or sell it to Gold Hoarders." },
  { id: "vk2", name: "Gold Treasure Vault Key",   category: "Vault", bestCompany: "Gold Hoarders", minBase: 3500, maxBase: null, fixedValue: true, notes: "From Captain Voyage tier. More valuable vault contents." },

  // ─── REAPER'S BONES EXCLUSIVE ─────────────────────────────────────────────
  { id: "r1", name: "Reaper's Chest",           category: "Bounty", bestCompany: "Reaper's Bones", minBase: 5000,  maxBase: 12000, notes: "ONLY sell to the Masked Stranger at The Reaper's Hideout" },
  { id: "r2", name: "Reaper's Bounty",          category: "Bounty", bestCompany: "Reaper's Bones", minBase: 10000, maxBase: 20000, notes: "ONLY sell to Reaper's Bones at The Reaper's Hideout" },
  { id: "r3", name: "Reaper's Chest of Legend", category: "Bounty", bestCompany: "Reaper's Bones", minBase: 20000, maxBase: 35000, notes: "Rare high-value chest for Reaper's Bones only" },

  // ─── BILGE RATS / ASHEN KEYS & CHESTS ────────────────────────────────────
  { id: "br1", name: "Ashen Key",          category: "Other", bestCompany: "Bilge Rats", minBase: 0, maxBase: null, fixedValue: true, doubloons: true, notes: "5 Doubloons (Bilge Rats) or 10 Doubloons + Rep (Reaper's Bones). Used to unlock Ashen Chests." },
  { id: "br2", name: "Ashen Chest (Locked)", category: "Other", bestCompany: "Bilge Rats", minBase: 0, maxBase: null, fixedValue: true, doubloons: true, notes: "5 Doubloons to Bilge Rats or Reaper's Bones. Sell unlocked to access Ashen Tomes inside." },
];
