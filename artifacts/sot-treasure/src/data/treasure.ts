export type TreasureCategory = "Chests" | "Skulls" | "Crates" | "Fish" | "Gems" | "Artifacts" | "Bounty" | "Other";
export type Company = "Gold Hoarders" | "Order of Souls" | "Merchant Alliance" | "Reaper's Bones" | "Athena's Fortune" | "Hunter's Call" | "Any";

export interface TreasureItem {
  id: string;
  name: string;
  category: TreasureCategory;
  bestCompany: Company;
  minBase: number;
  maxBase: number | null;
  notes?: string;
  fixedValue?: boolean;
}

export const treasureData: TreasureItem[] = [
  { id: "c1", name: "Castaway's Chest", category: "Chests", bestCompany: "Gold Hoarders", minBase: 65, maxBase: 130 },
  { id: "c2", name: "Seafarer's Chest", category: "Chests", bestCompany: "Gold Hoarders", minBase: 175, maxBase: 350 },
  { id: "c3", name: "Marauder's Chest", category: "Chests", bestCompany: "Gold Hoarders", minBase: 455, maxBase: 910 },
  { id: "c4", name: "Captain's Chest", category: "Chests", bestCompany: "Gold Hoarders", minBase: 1250, maxBase: 2500 },
  { id: "c5", name: "Stronghold Chest", category: "Chests", bestCompany: "Gold Hoarders", minBase: 3300, maxBase: 6600 },
  { id: "c6", name: "Chest of Sorrow", category: "Chests", bestCompany: "Gold Hoarders", minBase: 5200, maxBase: 8800, notes: "Cursed - weeps water, flooding ship" },
  { id: "c7", name: "Chest of a Thousand Grogs", category: "Chests", bestCompany: "Gold Hoarders", minBase: 5200, maxBase: 8800, notes: "Cursed - intoxicates carrier" },
  { id: "c8", name: "Chest of Rage", category: "Chests", bestCompany: "Gold Hoarders", minBase: 5200, maxBase: 8800, notes: "Cursed - heats up, ignites ship" },
  { id: "c9", name: "Chest of Ancient Tributes", category: "Chests", bestCompany: "Gold Hoarders", minBase: 3300, maxBase: 6600 },
  { id: "c10", name: "Ashen Chest (locked)", category: "Chests", bestCompany: "Gold Hoarders", minBase: 600, maxBase: 1200, notes: "Needs Ashen Key to unlock contents" },
  { id: "c11", name: "Chest of the Ashen Winds", category: "Artifacts", bestCompany: "Gold Hoarders", minBase: 1300, maxBase: 2600, notes: "Usable as weapon" },
  { id: "c12", name: "Collector's Chest", category: "Chests", bestCompany: "Gold Hoarders", minBase: 800, maxBase: 1600 },
  { id: "c13", name: "Captain's Trove", category: "Chests", bestCompany: "Gold Hoarders", minBase: 2000, maxBase: 4000 },
  { id: "c14", name: "Humble Gift", category: "Chests", bestCompany: "Reaper's Bones", minBase: 200, maxBase: 400 },
  { id: "c15", name: "Generous Gift", category: "Chests", bestCompany: "Reaper's Bones", minBase: 600, maxBase: 1200 },
  { id: "c16", name: "Generous Chest", category: "Chests", bestCompany: "Gold Hoarders", minBase: 1000, maxBase: 2000 },
  { id: "c17", name: "Chest of Legends", category: "Chests", bestCompany: "Athena's Fortune", minBase: 14000, maxBase: 18000 },
  { id: "c18", name: "Chest of Everlasting Sorrow", category: "Chests", bestCompany: "Gold Hoarders", minBase: 5200, maxBase: 8800 },
  
  { id: "s1", name: "Foul Skull", category: "Skulls", bestCompany: "Order of Souls", minBase: 60, maxBase: 100 },
  { id: "s2", name: "Disgraced Skull", category: "Skulls", bestCompany: "Order of Souls", minBase: 170, maxBase: 340 },
  { id: "s3", name: "Hateful Skull", category: "Skulls", bestCompany: "Order of Souls", minBase: 510, maxBase: 1020 },
  { id: "s4", name: "Villainous Skull", category: "Skulls", bestCompany: "Order of Souls", minBase: 1530, maxBase: 3060 },
  { id: "s5", name: "Stronghold Skull", category: "Skulls", bestCompany: "Order of Souls", minBase: 3300, maxBase: 6600 },
  { id: "s6", name: "Skeleton Captain's Skull", category: "Skulls", bestCompany: "Order of Souls", minBase: 420, maxBase: 840 },
  { id: "s7", name: "Ashen Villainous Skull", category: "Skulls", bestCompany: "Order of Souls", minBase: 1530, maxBase: 3060 },
  { id: "s8", name: "Bounty Skull", category: "Skulls", bestCompany: "Order of Souls", minBase: 2000, maxBase: 4000 },
  { id: "s9", name: "Mercenary Skull", category: "Skulls", bestCompany: "Order of Souls", minBase: 60, maxBase: 100 },
  { id: "s10", name: "Mysterious Skull", category: "Skulls", bestCompany: "Order of Souls", minBase: 800, maxBase: 1600 },

  { id: "cr1", name: "Crate of Wood", category: "Crates", bestCompany: "Merchant Alliance", minBase: 150, maxBase: 300 },
  { id: "cr2", name: "Crate of Iron", category: "Crates", bestCompany: "Merchant Alliance", minBase: 150, maxBase: 300 },
  { id: "cr3", name: "Crate of Cannonballs", category: "Crates", bestCompany: "Merchant Alliance", minBase: 150, maxBase: 300 },
  { id: "cr4", name: "Crate of Rope", category: "Crates", bestCompany: "Merchant Alliance", minBase: 150, maxBase: 300 },
  { id: "cr5", name: "Crate of Tea", category: "Crates", bestCompany: "Merchant Alliance", minBase: 300, maxBase: 600 },
  { id: "cr6", name: "Crate of Rum", category: "Crates", bestCompany: "Merchant Alliance", minBase: 300, maxBase: 600 },
  { id: "cr7", name: "Crate of Coffee", category: "Crates", bestCompany: "Merchant Alliance", minBase: 350, maxBase: 700 },
  { id: "cr8", name: "Crate of Sugar", category: "Crates", bestCompany: "Merchant Alliance", minBase: 150, maxBase: 300 },
  { id: "cr9", name: "Crate of Cloth", category: "Crates", bestCompany: "Merchant Alliance", minBase: 250, maxBase: 500 },
  { id: "cr10", name: "Crate of Spices", category: "Crates", bestCompany: "Merchant Alliance", minBase: 400, maxBase: 800 },
  { id: "cr11", name: "Crate of Exotic Spices", category: "Crates", bestCompany: "Merchant Alliance", minBase: 600, maxBase: 1200 },
  { id: "cr12", name: "Crate of Silk", category: "Crates", bestCompany: "Merchant Alliance", minBase: 600, maxBase: 1200 },
  { id: "cr13", name: "Crate of Fine Sugar", category: "Crates", bestCompany: "Merchant Alliance", minBase: 400, maxBase: 800 },
  { id: "cr14", name: "Crate of Tea Leaves", category: "Crates", bestCompany: "Merchant Alliance", minBase: 300, maxBase: 600 },
  { id: "cr15", name: "Crate of Explosives", category: "Crates", bestCompany: "Merchant Alliance", minBase: 300, maxBase: 600 },
  { id: "an1", name: "Chicken (White)", category: "Crates", bestCompany: "Merchant Alliance", minBase: 150, maxBase: null, fixedValue: true },
  { id: "an2", name: "Chicken (Ashen)", category: "Crates", bestCompany: "Merchant Alliance", minBase: 250, maxBase: null, fixedValue: true },
  { id: "an3", name: "Snake (Splashtail)", category: "Crates", bestCompany: "Merchant Alliance", minBase: 150, maxBase: null, fixedValue: true },
  { id: "an4", name: "Snake (Ivory)", category: "Crates", bestCompany: "Merchant Alliance", minBase: 300, maxBase: null, fixedValue: true },
  { id: "an5", name: "Pig (Grunter)", category: "Crates", bestCompany: "Merchant Alliance", minBase: 150, maxBase: null, fixedValue: true },
  { id: "an6", name: "Pig (Ashen)", category: "Crates", bestCompany: "Merchant Alliance", minBase: 250, maxBase: null, fixedValue: true },

  { id: "f1", name: "Splashtail", category: "Fish", bestCompany: "Hunter's Call", minBase: 15, maxBase: 30, notes: "Raw: 15g, Cooked: 30g" },
  { id: "f2", name: "Pondies", category: "Fish", bestCompany: "Hunter's Call", minBase: 25, maxBase: 45, notes: "Raw: 25g, Cooked: 45g" },
  { id: "f3", name: "Islehopper", category: "Fish", bestCompany: "Hunter's Call", minBase: 40, maxBase: 75, notes: "Raw: 40g, Cooked: 75g" },
  { id: "f4", name: "Ancientscale", category: "Fish", bestCompany: "Hunter's Call", minBase: 60, maxBase: 105, notes: "Raw: 60g, Cooked: 105g" },
  { id: "f5", name: "Plentifin", category: "Fish", bestCompany: "Hunter's Call", minBase: 50, maxBase: 90, notes: "Raw: 50g, Cooked: 90g" },
  { id: "f6", name: "Wildsplash", category: "Fish", bestCompany: "Hunter's Call", minBase: 90, maxBase: 160, notes: "Raw: 90g, Cooked: 160g" },
  { id: "f7", name: "Devilfish", category: "Fish", bestCompany: "Hunter's Call", minBase: 120, maxBase: 225, notes: "Raw: 120g, Cooked: 225g" },
  { id: "f8", name: "Battlegill", category: "Fish", bestCompany: "Hunter's Call", minBase: 150, maxBase: 275, notes: "Raw: 150g, Cooked: 275g" },
  { id: "f9", name: "Wrecker", category: "Fish", bestCompany: "Hunter's Call", minBase: 200, maxBase: 360, notes: "Raw: 200g, Cooked: 360g" },
  { id: "f10", name: "Stormfish", category: "Fish", bestCompany: "Hunter's Call", minBase: 350, maxBase: 525, notes: "Raw: 350g, Cooked: 525g" },
  { id: "f11", name: "Cooked Meat", category: "Fish", bestCompany: "Hunter's Call", minBase: 75, maxBase: 150 },

  { id: "a1", name: "Box of Wondrous Secrets", category: "Artifacts", bestCompany: "Athena's Fortune", minBase: 25000, maxBase: null, fixedValue: true },
  { id: "a2", name: "Chalice of Ancient Tributes", category: "Artifacts", bestCompany: "Athena's Fortune", minBase: 6000, maxBase: 9000 },
  
  { id: "r1", name: "Reaper's Chest", category: "Bounty", bestCompany: "Reaper's Bones", minBase: 5000, maxBase: 12000, notes: "ONLY sell to Masked Stranger" },
  { id: "r2", name: "Reaper's Bounty", category: "Bounty", bestCompany: "Reaper's Bones", minBase: 10000, maxBase: 20000, notes: "ONLY sell to Reaper's Bones" },
  { id: "r3", name: "Reaper's Chest of Legend", category: "Bounty", bestCompany: "Reaper's Bones", minBase: 20000, maxBase: 35000 },

  { id: "g1", name: "Amethyst Mermaid Gem", category: "Gems", bestCompany: "Any", minBase: 600, maxBase: 900 },
  { id: "g2", name: "Emerald Mermaid Gem", category: "Gems", bestCompany: "Any", minBase: 1000, maxBase: 1500 },
  { id: "g3", name: "Ruby Mermaid Gem", category: "Gems", bestCompany: "Any", minBase: 2400, maxBase: 3200 },
  { id: "g4", name: "Sapphire Mermaid Gem", category: "Gems", bestCompany: "Any", minBase: 800, maxBase: 1200 },
  { id: "g5", name: "Citrine Mermaid Gem", category: "Gems", bestCompany: "Any", minBase: 500, maxBase: 700 },

  { id: "ar1", name: "Enchanted Lantern", category: "Artifacts", bestCompany: "Gold Hoarders", minBase: 800, maxBase: 1500 },
  { id: "ar2", name: "Ancient Vase", category: "Artifacts", bestCompany: "Gold Hoarders", minBase: 1200, maxBase: 2400 },
  { id: "ar3", name: "Jar of Dirt", category: "Artifacts", bestCompany: "Gold Hoarders", minBase: 500, maxBase: 1000 },
  { id: "ar4", name: "Totem", category: "Artifacts", bestCompany: "Gold Hoarders", minBase: 150, maxBase: 300 },
  { id: "ar5", name: "Relic", category: "Artifacts", bestCompany: "Gold Hoarders", minBase: 2000, maxBase: 4000 },
  { id: "ar6", name: "Trinket", category: "Artifacts", bestCompany: "Gold Hoarders", minBase: 100, maxBase: 500 },
  { id: "ar7", name: "Skull of Siren Song", category: "Artifacts", bestCompany: "Athena's Fortune", minBase: 10000, maxBase: 15000 }
];
