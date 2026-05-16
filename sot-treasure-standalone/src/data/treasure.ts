export type TreasureCategory =
  | "Chests"
  | "Shipwrecked Chests"
  | "Ashen Chests"
  | "Coral Chests"
  | "Skulls"
  | "Ashen Skulls"
  | "Coral Skulls"
  | "Ghost Fleet"
  | "Crates"
  | "Cargo Runs"
  | "Fish"
  | "Meat"
  | "Gems"
  | "Siren Gems"
  | "Artefacts"
  | "Ashen Artefacts"
  | "Coral Artefacts"
  | "Vault"
  | "Bounty"
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
  findLocation: string;
  fixedValue?: boolean;
  doubloons?: boolean;
}

export const EMISSARY_MULTIPLIERS: [number, string][] = [
  [1.0,  "Grade I"],
  [1.33, "Grade II"],
  [1.66, "Grade III"],
  [2.0,  "Grade IV"],
  [2.5,  "Grade V"],
];

export const treasureData: TreasureItem[] = [

  // ─── REGULAR CHESTS ───────────────────────────────────────────────────────
  {
    id: "c1", name: "Castaway's Chest", category: "Chests", bestCompany: "Gold Hoarders",
    minBase: 60, maxBase: 130,
    findLocation: "X Marks the Spot maps, Riddle Maps, Messages in a Bottle, emergent Shipwrecks, and random world spawns on islands. The most common chest in the game.",
  },
  {
    id: "c2", name: "Seafarer's Chest", category: "Chests", bestCompany: "Gold Hoarders",
    minBase: 140, maxBase: 260,
    findLocation: "X Marks the Spot maps, Riddle Maps, Messages in a Bottle, and Shipwrecks. Slightly rarer than the Castaway's Chest.",
  },
  {
    id: "c3", name: "Marauder's Chest", category: "Chests", bestCompany: "Gold Hoarders",
    minBase: 280, maxBase: 520,
    findLocation: "X Marks the Spot maps, Riddle Maps, Messages in a Bottle, and Shipwrecks. Found on mid-difficulty voyages.",
  },
  {
    id: "c4", name: "Captain's Chest", category: "Chests", bestCompany: "Gold Hoarders",
    minBase: 560, maxBase: 1100,
    findLocation: "X Marks the Spot maps, Riddle Maps, Messages in a Bottle, and Shipwrecks. Obtained from higher-level Gold Hoarder voyages.",
  },
  {
    id: "c5", name: "Skeleton Captain's Chest", category: "Chests", bestCompany: "Gold Hoarders",
    minBase: 1150, maxBase: 1550,
    notes: "Dropped by Skeleton Captains.",
    findLocation: "Dropped by Skeleton Captains when completing Bounty Map voyages. Also occasionally found on emergent Skeleton Ships.",
  },
  {
    id: "c5b", name: "King's Chest", category: "Chests", bestCompany: "Gold Hoarders",
    minBase: 2000, maxBase: 3100,
    findLocation: "Found in emergent Shipwrecks (look for seagulls circling above water) and as rewards from Messages in a Bottle quests. Cannot be obtained from standard Gold Hoarder voyages.",
  },
  {
    id: "c6", name: "Stronghold Chest", category: "Chests", bestCompany: "Gold Hoarders",
    minBase: 1500, maxBase: 3000,
    notes: "Found in Skeleton Fort Vaults.",
    findLocation: "Inside the Fort Vault after completing a Skeleton Fort world event. Defeat all skeleton waves and the Fort Captain to claim the vault key.",
  },
  {
    id: "c7", name: "Chest of Ancient Tributes", category: "Chests", bestCompany: "Gold Hoarders",
    minBase: 3000, maxBase: 3400,
    findLocation: "Rewarded from Gold Hoarders Wayfinder Voyages — multi-step voyages purchased from the Gold Hoarders representative at any Outpost.",
  },
  {
    id: "c8", name: "Chest of Sorrow", category: "Chests", bestCompany: "Gold Hoarders",
    minBase: 5200, maxBase: 8800,
    notes: "Cursed — weeps water, flooding the ship. Extinguish by placing it in a rowboat or tossing overboard temporarily.",
    findLocation: "Rare find from X Marks the Spot maps, Riddle Maps, Messages in a Bottle, and Shipwrecks. Can also be won from the Fort of the Damned vault.",
  },
  {
    id: "c9", name: "Chest of a Thousand Grogs", category: "Chests", bestCompany: "Gold Hoarders",
    minBase: 5200, maxBase: 8800,
    notes: "Cursed — intoxicates the carrier, causing loss of movement control.",
    findLocation: "Rare find from X Marks the Spot maps, Riddle Maps, Messages in a Bottle, and Shipwrecks.",
  },
  {
    id: "c10", name: "Chest of Rage", category: "Chests", bestCompany: "Gold Hoarders",
    minBase: 5200, maxBase: 8800,
    notes: "Cursed — heats up over time and sets fire to the ship. Cool it by submerging in water.",
    findLocation: "Rare find from X Marks the Spot maps, Riddle Maps, Messages in a Bottle, and Shipwrecks. Also found in the Fort of the Damned vault.",
  },
  {
    id: "c11", name: "Chest of Legends", category: "Chests", bestCompany: "Athena's Fortune",
    minBase: 8000, maxBase: 10000,
    notes: "Pirate Legend only — sell to the Mysterious Stranger in any Tavern.",
    findLocation: "Obtained by completing Athena's Fortune Legendary Voyages. Requires Pirate Legend status to purchase the voyage. Also found in the Fort of the Damned vault.",
  },
  {
    id: "c12", name: "Collector's Chest", category: "Chests", bestCompany: "Gold Hoarders",
    minBase: 800, maxBase: 1600,
    notes: "Contains artefacts and gems inside worth additional gold.",
    findLocation: "Final reward from a Riddle Map quest — follow the riddle clues to a landmark, count the steps, and dig. Also found rarely in Shipwrecks.",
  },
  {
    id: "c13", name: "Humble Gift", category: "Chests", bestCompany: "Reaper's Bones",
    minBase: 0, maxBase: null, fixedValue: true, doubloons: true,
    notes: "5 Doubloons — sell only to Reaper's Bones.",
    findLocation: "Found inside completed Skeleton Fort Vaults and washed up randomly on island beaches. Can also be found in emergent Shipwrecks.",
  },
  {
    id: "c14", name: "Generous Gift", category: "Chests", bestCompany: "Reaper's Bones",
    minBase: 0, maxBase: null, fixedValue: true, doubloons: true,
    notes: "10 Doubloons — sell only to Reaper's Bones.",
    findLocation: "Found inside completed Skeleton Fort Vaults and washed up randomly on island beaches. Rarer than the Humble Gift.",
  },

  // ─── SHIPWRECKED CHESTS ───────────────────────────────────────────────────
  {
    id: "sw1", name: "Shipwrecked Castaway's Chest", category: "Shipwrecked Chests", bestCompany: "Gold Hoarders",
    minBase: 60, maxBase: 130,
    notes: "Same gold value as the regular version. Counts toward the Hoarder of Barnacled Gold commendation — must sell to Gold Hoarders (not Reaper's Bones) for commendation credit.",
    findLocation: "Found inside Shipwrecks in the open sea (look for seagulls), on defeated Skeleton Ships, or beached on island shorelines below the waterline.",
  },
  {
    id: "sw2", name: "Shipwrecked Seafarer's Chest", category: "Shipwrecked Chests", bestCompany: "Gold Hoarders",
    minBase: 140, maxBase: 260,
    notes: "Same gold value as the regular version. Counts toward the Hoarder of Barnacled Gold commendation.",
    findLocation: "Found inside Shipwrecks, on defeated Skeleton Ships, or beached on island shorelines.",
  },
  {
    id: "sw3", name: "Shipwrecked Marauder's Chest", category: "Shipwrecked Chests", bestCompany: "Gold Hoarders",
    minBase: 280, maxBase: 520,
    notes: "Same gold value as the regular version. Counts toward the Hoarder of Barnacled Gold commendation.",
    findLocation: "Found inside Shipwrecks, on defeated Skeleton Ships, or beached on island shorelines.",
  },
  {
    id: "sw4", name: "Shipwrecked Captain's Chest", category: "Shipwrecked Chests", bestCompany: "Gold Hoarders",
    minBase: 580, maxBase: 1100,
    notes: "Same gold value as the regular version. Rarest of the Shipwrecked variants. Counts toward Hoarder of Barnacled Gold.",
    findLocation: "Found inside Shipwrecks, on defeated Skeleton Ships, or beached on island shorelines. Much rarer than the Shipwrecked Castaway's Chest.",
  },

  // ─── ASHEN CHESTS ─────────────────────────────────────────────────────────
  {
    id: "ac1", name: "Ashen Castaway's Chest", category: "Ashen Chests", bestCompany: "Gold Hoarders",
    minBase: 140, maxBase: 260,
    findLocation: "Devil's Roar region — from X Marks the Spot maps and Riddle Maps in or near the Devil's Roar. Also a small chance to appear outside the Devil's Roar. Worth roughly 2× the regular equivalent.",
  },
  {
    id: "ac2", name: "Ashen Seafarer's Chest", category: "Ashen Chests", bestCompany: "Gold Hoarders",
    minBase: 280, maxBase: 520,
    findLocation: "Devil's Roar region — from Ashen voyage treasure maps and Messages in a Bottle found in the Devil's Roar.",
  },
  {
    id: "ac3", name: "Ashen Marauder's Chest", category: "Ashen Chests", bestCompany: "Gold Hoarders",
    minBase: 560, maxBase: 1100,
    findLocation: "Devil's Roar region — from Ashen voyage treasure maps and emergent Shipwrecks in the Devil's Roar.",
  },
  {
    id: "ac4", name: "Ashen Captain's Chest", category: "Ashen Chests", bestCompany: "Gold Hoarders",
    minBase: 1100, maxBase: 2100,
    findLocation: "Devil's Roar region — from higher-level Ashen voyage treasure maps. Rarely found in Shipwrecks in the Devil's Roar.",
  },
  {
    id: "ac4b", name: "Ashen King's Chest", category: "Ashen Chests", bestCompany: "Gold Hoarders",
    minBase: 3800, maxBase: null, fixedValue: true,
    notes: "Devil's Roar variant of the King's Chest.",
    findLocation: "Devil's Roar region — emergent Shipwrecks and Messages in a Bottle in the Devil's Roar area.",
  },
  {
    id: "ac5", name: "Ashen Stronghold Chest", category: "Ashen Chests", bestCompany: "Gold Hoarders",
    minBase: 3000, maxBase: 6000,
    findLocation: "Inside the Vault of the Fort of Fortune world event in the Devil's Roar. Defeat all skeleton waves and the Fort Captain to access the vault.",
  },
  {
    id: "ac6", name: "Chest of the Ashen Winds", category: "Ashen Chests", bestCompany: "Gold Hoarders",
    minBase: 2500, maxBase: 5000,
    notes: "Also functions as a fire-breath weapon — hold it and blow to shoot fire. Has limited charges.",
    findLocation: "Dropped by the Ashen Winds boss during the Ashen Winds world event. Look for a large flaming skull icon on the map. The event spawns in the Devil's Roar.",
  },
  {
    id: "ac7", name: "Ashen Chest of Legends", category: "Ashen Chests", bestCompany: "Athena's Fortune",
    minBase: 8600, maxBase: 11000,
    notes: "Devil's Roar variant of the Chest of Legends.",
    findLocation: "Obtained from Athena's Fortune Legendary Voyages in the Devil's Roar region. Requires Pirate Legend status.",
  },

  // ─── CORAL CHESTS ─────────────────────────────────────────────────────────
  {
    id: "cc1", name: "Coral Castaway's Chest", category: "Coral Chests", bestCompany: "Gold Hoarders",
    minBase: 105, maxBase: 228,
    findLocation: "Found underwater in Siren Shrines and inside the vaults of Siren Treasuries. Dive beneath the waves and look for glowing coral formations marking the entrance.",
  },
  {
    id: "cc2", name: "Coral Seafarer's Chest", category: "Coral Chests", bestCompany: "Gold Hoarders",
    minBase: 245, maxBase: 455,
    findLocation: "Found inside Siren Shrines and Siren Treasuries. Complete the underwater puzzle to open the Treasury vault.",
  },
  {
    id: "cc3", name: "Coral Treasure Chest", category: "Coral Chests", bestCompany: "Gold Hoarders",
    minBase: 375, maxBase: 780,
    findLocation: "Found inside Siren Shrines and Siren Treasuries scattered across the sea floor.",
  },
  {
    id: "cc4", name: "Coral Marauder's Chest", category: "Coral Chests", bestCompany: "Gold Hoarders",
    minBase: 490, maxBase: 910,
    findLocation: "Found inside Siren Shrines and the inner vaults of Siren Treasuries.",
  },
  {
    id: "cc5", name: "Coral Captain's Chest", category: "Coral Chests", bestCompany: "Gold Hoarders",
    minBase: 980, maxBase: 1925,
    findLocation: "Found deep inside Siren Treasuries, typically in the locked vault. Defeat the Siren enemies and use Siren Gems to unlock the Treasury door.",
  },

  // ─── REGULAR SKULLS ───────────────────────────────────────────────────────
  {
    id: "s1", name: "Foul Bounty Skull", category: "Skulls", bestCompany: "Order of Souls",
    minBase: 90, maxBase: 180,
    findLocation: "Dropped by low-level Skeleton Captains during Order of Souls Bounty Map voyages. Also found on emergent Skeleton Ships.",
  },
  {
    id: "s2", name: "Disgraced Bounty Skull", category: "Skulls", bestCompany: "Order of Souls",
    minBase: 180, maxBase: 350,
    findLocation: "Dropped by mid-level Skeleton Captains during Bounty Map voyages.",
  },
  {
    id: "s3", name: "Hateful Bounty Skull", category: "Skulls", bestCompany: "Order of Souls",
    minBase: 350, maxBase: 750,
    findLocation: "Dropped by higher-level Skeleton Captains during Bounty Map voyages. More likely from higher-tier Order of Souls voyages.",
  },
  {
    id: "s4", name: "Villainous Bounty Skull", category: "Skulls", bestCompany: "Order of Souls",
    minBase: 750, maxBase: 1450,
    findLocation: "Dropped by the toughest Skeleton Captains on high-tier Bounty Map voyages. Also found in Fort Vaults.",
  },
  {
    id: "s5", name: "Skeleton Captain's Skull", category: "Skulls", bestCompany: "Order of Souls",
    minBase: 850, maxBase: 2200,
    notes: "Value varies widely depending on the captain's rank.",
    findLocation: "Dropped by Skeleton Captains encountered during Bounty Map voyages, Skeleton Camp raids, and emergent Skeleton Ships.",
  },
  {
    id: "s6", name: "Stronghold Skull", category: "Skulls", bestCompany: "Order of Souls",
    minBase: 1800, maxBase: 4200,
    notes: "Dropped by the Fort Captain.",
    findLocation: "Dropped by the Captain Skeleton when completing a Skeleton Fort world event. The Captain holds the key to the Fort Vault — defeat them to claim both.",
  },
  {
    id: "s7", name: "Skull of the Damned", category: "Skulls", bestCompany: "Order of Souls",
    minBase: 1050, maxBase: 1250,
    notes: "Ghostly variant — dropped by Ghost Ships during the Ghost Fleet event.",
    findLocation: "Dropped by Ghost Flagship and Ghost Captain Ships during the Ghost Fleet world event. Look for ghostly swirling tornadoes in the sky — sail toward them and engage the ghost ships.",
  },
  {
    id: "s8", name: "Captain Skull of the Damned", category: "Skulls", bestCompany: "Order of Souls",
    minBase: 1700, maxBase: 2950,
    notes: "Ghostly Captain variant — dropped by the Ghost Captain Ship during the Ghost Fleet event.",
    findLocation: "Dropped by the Ghost Captain Ship during the Ghost Fleet world event. One per Ghost Captain Ship encounter. Also dropped by The Burning Blade (the final flagship).",
  },
  {
    id: "s9", name: "Gold Hoarder's Skull", category: "Skulls", bestCompany: "Order of Souls",
    minBase: 10000, maxBase: null, fixedValue: true,
    notes: "Unique skull — fixed 10,000g, no emissary bonus applies.",
    findLocation: "Dropped exclusively by the Gold Hoarder boss at the end of a Gold Hoarder Voyage (purchased from the Gold Hoarders rep at any Outpost). This is the final boss of the Shores of Gold Tall Tale.",
  },

  // ─── GHOST FLEET LOOT ─────────────────────────────────────────────────────
  {
    id: "gf1", name: "Chest of the Damned", category: "Ghost Fleet", bestCompany: "Gold Hoarders",
    minBase: 1000, maxBase: 1160,
    notes: "Ghostly chest — glows green. Also sells to Reaper's Bones for equal gold.",
    findLocation: "Dropped by the Ashen Dragon Ships and The Burning Blade during the Ghost Fleet world event. Follow the ghostly swirling tornadoes on the horizon, engage and sink the ghost fleet waves.",
  },
  {
    id: "gf2", name: "Ashes of the Damned", category: "Ghost Fleet", bestCompany: "Merchant Alliance",
    minBase: 1150, maxBase: 1400,
    notes: "Ghostly trade good crate. Also sells to Reaper's Bones for equal gold.",
    findLocation: "Dropped by Ashen Dragon Ships and The Burning Blade during the Ghost Fleet world event. Usually 7–15 items drop from the final flagship.",
  },
  {
    id: "gf3", name: "Storage Crate of the Damned", category: "Ghost Fleet", bestCompany: "Merchant Alliance",
    minBase: 1000, maxBase: null, fixedValue: true,
    notes: "Can be sold even when full of resources — selling it discards the contents but the crate itself is worth 1,000g.",
    findLocation: "Dropped by Grunt Ships and Ghost Flagships during the Ghost Fleet world event. Also dropped by The Burning Blade.",
  },

  // ─── ASHEN SKULLS ─────────────────────────────────────────────────────────
  {
    id: "as1", name: "Ashen Foul Bounty Skull", category: "Ashen Skulls", bestCompany: "Order of Souls",
    minBase: 180, maxBase: 350,
    findLocation: "Devil's Roar region — dropped by low-level Ashen Skeleton Captains during Ashen Bounty Map voyages.",
  },
  {
    id: "as2", name: "Ashen Disgraced Bounty Skull", category: "Ashen Skulls", bestCompany: "Order of Souls",
    minBase: 350, maxBase: 750,
    findLocation: "Devil's Roar region — dropped by mid-level Ashen Skeleton Captains during Ashen voyages.",
  },
  {
    id: "as3", name: "Ashen Hateful Bounty Skull", category: "Ashen Skulls", bestCompany: "Order of Souls",
    minBase: 750, maxBase: 1450,
    findLocation: "Devil's Roar region — dropped by high-level Ashen Skeleton Captains.",
  },
  {
    id: "as4", name: "Ashen Villainous Bounty Skull", category: "Ashen Skulls", bestCompany: "Order of Souls",
    minBase: 1450, maxBase: 2800,
    findLocation: "Devil's Roar region — dropped by the toughest Ashen Skeleton Captains on high-tier Ashen Bounty voyages.",
  },
  {
    id: "as5", name: "Ashen Winds Skull", category: "Ashen Skulls", bestCompany: "Order of Souls",
    minBase: 4000, maxBase: 10000,
    notes: "Value scales with remaining fire charges. Also functions as a limited-use fire weapon.",
    findLocation: "Dropped by the Ashen Winds boss during the Ashen Winds world event in the Devil's Roar. The event is announced on the map by a large flaming skull icon. A fully-charged skull is worth significantly more.",
  },

  // ─── CORAL SKULLS ─────────────────────────────────────────────────────────
  {
    id: "cs1", name: "Coral Foul Skull", category: "Coral Skulls", bestCompany: "Order of Souls",
    minBase: 158, maxBase: 315,
    findLocation: "Found inside Siren Shrines and the vaults of Siren Treasuries.",
  },
  {
    id: "cs2", name: "Coral Disgraced Skull", category: "Coral Skulls", bestCompany: "Order of Souls",
    minBase: 315, maxBase: 630,
    findLocation: "Found inside Siren Shrines and Siren Treasuries.",
  },
  {
    id: "cs3", name: "Coral Hateful Skull", category: "Coral Skulls", bestCompany: "Order of Souls",
    minBase: 630, maxBase: 1260,
    findLocation: "Found in the locked vaults of Siren Treasuries. Use Siren Gems collected from defeated Sirens to unlock the Treasury door.",
  },
  {
    id: "cs4", name: "Coral Villainous Skull", category: "Coral Skulls", bestCompany: "Order of Souls",
    minBase: 1260, maxBase: 2520,
    findLocation: "Found deep inside the locked vaults of Siren Treasuries. The rarest coral skull.",
  },

  // ─── TRADE GOOD CRATES (ANIMALS) ──────────────────────────────────────────
  {
    id: "cr15", name: "White Feathered Chicken", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 150, maxBase: null, fixedValue: true,
    notes: "Common chicken variant.",
    findLocation: "Found on most large islands. Approach slowly and crouch — chickens will run if startled. Capture using a Merchant Alliance Chicken Coop.",
  },
  {
    id: "cr15b", name: "Red Speckled Chicken", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 200, maxBase: null, fixedValue: true,
    notes: "Uncommon chicken variant.",
    findLocation: "Found on most large islands. Less common than the White Feathered Chicken — check multiple islands if you can't find one. Capture using a Merchant Alliance Chicken Coop.",
  },
  {
    id: "cr15c", name: "Black Plumed Chicken", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 300, maxBase: null, fixedValue: true,
    notes: "Rare chicken variant.",
    findLocation: "Found on larger islands but rare — it may take some searching. Capture using a Merchant Alliance Chicken Coop.",
  },
  {
    id: "cr15d", name: "Golden Chicken", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 500, maxBase: null, fixedValue: true,
    notes: "Very rare chicken variant — the most valuable.",
    findLocation: "Spawns on large islands but is the rarest of all chickens. You may need to check many islands before finding one. Capture using a Merchant Alliance Chicken Coop.",
  },
  {
    id: "cr16", name: "Ashen Chicken", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 250, maxBase: null, fixedValue: true,
    notes: "Devil's Roar variant.",
    findLocation: "Found only on islands in or near the Devil's Roar region. Rarer than standard chickens due to the hazardous environment.",
  },
  {
    id: "cr19", name: "Pink Pig", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 150, maxBase: null, fixedValue: true,
    notes: "Common pig variant. Must feed Fruit periodically or it will die.",
    findLocation: "Found on most large islands. Approach slowly. Pigs are loud and may alert skeleton enemies. Capture using a Merchant Alliance Pig Crate.",
  },
  {
    id: "cr19b", name: "Ashen Pig", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 250, maxBase: null, fixedValue: true,
    notes: "Uncommon pig variant. Must feed Fruit or it dies.",
    findLocation: "Found only in the Devil's Roar region.",
  },
  {
    id: "cr19c", name: "Black Pig", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 300, maxBase: null, fixedValue: true,
    notes: "Rare pig variant. Must feed Fruit or it dies.",
    findLocation: "Found on larger islands. Rare — check multiple islands. Capture using a Merchant Alliance Pig Crate.",
  },
  {
    id: "cr19d", name: "Gold Striped Pig", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 500, maxBase: null, fixedValue: true,
    notes: "Very rare pig variant. Must feed Fruit or it dies.",
    findLocation: "Very rare spawn on large islands. The most valuable pig variant. Capture using a Merchant Alliance Pig Crate.",
  },
  {
    id: "cr17", name: "Green Snake", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 150, maxBase: null, fixedValue: true,
    notes: "Common snake variant. Charm with an instrument to calm it before capture.",
    findLocation: "Found on most large islands. They attack if startled — play your instrument to charm them first, then place in a Merchant Alliance Snake Basket.",
  },
  {
    id: "cr17b", name: "Red and White Snake", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 200, maxBase: null, fixedValue: true,
    notes: "Uncommon snake. Charm with music first.",
    findLocation: "Found on larger islands. Less common than the Green Snake. Charm with your instrument before capture.",
  },
  {
    id: "cr17c", name: "Black Snake", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 300, maxBase: null, fixedValue: true,
    notes: "Rare snake. Charm with music first.",
    findLocation: "Found on larger islands but rare. Charm with your instrument to stop it attacking, then capture in a Snake Basket.",
  },
  {
    id: "cr17d", name: "Golden Snake", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 500, maxBase: null, fixedValue: true,
    notes: "Very rare snake — the most valuable. Charm with music first.",
    findLocation: "Very rare spawn on large islands. The rarest snake variant. Charm with your instrument before capture.",
  },

  // ─── CARGO RUN CRATES ─────────────────────────────────────────────────────
  {
    id: "cg1", name: "Crate of Rum Bottles (Perfect)", category: "Cargo Runs", bestCompany: "Merchant Alliance",
    minBase: 700, maxBase: null, fixedValue: true,
    notes: "Degrades with physical damage: Damaged 500g → Very Damaged 300g → Ruined 100g. Bottles break from falls and cannon hits.",
    findLocation: "Pick up from the Merchant Alliance representative at the source Outpost on your Cargo Run voyage contract. Deliver to the destination before it degrades.",
  },
  {
    id: "cg2", name: "Crate of Exotic Plants (Perfect)", category: "Cargo Runs", bestCompany: "Merchant Alliance",
    minBase: 700, maxBase: null, fixedValue: true,
    notes: "Degrades when wet: Damaged 500g → Very Damaged 300g → Ruined 100g. Keep out of water.",
    findLocation: "Pick up from the Merchant Alliance representative at the source Outpost on your Cargo Run contract. Deliver dry to the destination.",
  },
  {
    id: "cg3", name: "Crate of Woven Cloth (Perfect)", category: "Cargo Runs", bestCompany: "Merchant Alliance",
    minBase: 700, maxBase: null, fixedValue: true,
    notes: "Degrades when wet: Damaged 500g → Very Damaged 300g → Ruined 100g. Keep out of water.",
    findLocation: "Pick up from the Merchant Alliance representative at the source Outpost on your Cargo Run contract. Deliver dry to the destination.",
  },
  {
    id: "cg4", name: "Ashen Crate of Rum Bottles (Perfect)", category: "Cargo Runs", bestCompany: "Merchant Alliance",
    minBase: 1400, maxBase: null, fixedValue: true,
    notes: "Devil's Roar variant. Degrades: 1,000g → 600g → 200g. Volcanic eruptions and geysers add extra risk.",
    findLocation: "Pick up from the Merchant Alliance representative at Devil's Roar Outposts (Roaring Traders). Deliver to the destination. The volcanic hazards make these far riskier to transport.",
  },
  {
    id: "cg5", name: "Ashen Crate of Exotic Plants (Perfect)", category: "Cargo Runs", bestCompany: "Merchant Alliance",
    minBase: 1400, maxBase: null, fixedValue: true,
    notes: "Devil's Roar variant. Degrades: 1,000g → 600g → 200g.",
    findLocation: "Pick up from the Merchant Alliance representative at Devil's Roar Outposts (Roaring Traders).",
  },
  {
    id: "cg6", name: "Ashen Crate of Woven Cloth (Perfect)", category: "Cargo Runs", bestCompany: "Merchant Alliance",
    minBase: 1400, maxBase: null, fixedValue: true,
    notes: "Devil's Roar variant. Degrades: 1,000g → 600g → 200g.",
    findLocation: "Pick up from the Merchant Alliance representative at Devil's Roar Outposts (Roaring Traders).",
  },

  // ─── SPLASHTAIL ───────────────────────────────────────────────────────────
  {
    id: "f-spl-ruby", name: "Splashtail (Ruby)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 40, maxBase: 100,
    notes: "Raw 25g | Cooked 40g | Trophy Cooked 100g. Most common fish in the game.",
    findLocation: "Anywhere in open water. No bait required. The easiest fish to catch — just cast a line anywhere.",
  },
  {
    id: "f-spl-seafoam", name: "Splashtail (Seafoam)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 75, maxBase: 190,
    notes: "Raw 50g | Cooked 75g | Trophy Cooked 190g. Night only.",
    findLocation: "Anywhere in open water. No bait required. Only spawns at night — won't bite during daylight hours.",
  },
  {
    id: "f-spl-sunny", name: "Splashtail (Sunny)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 75, maxBase: 190,
    notes: "Raw 50g | Cooked 75g | Trophy Cooked 190g.",
    findLocation: "Anywhere in open water. No bait required.",
  },
  {
    id: "f-spl-indigo", name: "Splashtail (Indigo)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 115, maxBase: 285,
    notes: "Raw 75g | Cooked 115g | Trophy Cooked 285g.",
    findLocation: "Anywhere in open water. No bait required.",
  },
  {
    id: "f-spl-umber", name: "Splashtail (Umber)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 375, maxBase: 940,
    notes: "Raw 250g | Cooked 375g | Trophy Cooked 940g. Rare variant.",
    findLocation: "Anywhere in open water. No bait required. Much rarer — keep casting until one bites.",
  },

  // ─── PONDIE ───────────────────────────────────────────────────────────────
  {
    id: "f-pon-charcoal", name: "Pondie (Charcoal)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 40, maxBase: 100,
    notes: "Raw 25g | Cooked 40g | Trophy Cooked 100g.",
    findLocation: "Freshwater ponds on islands ONLY — not in the ocean. No bait required. Look for inland ponds on larger islands. No other fish appear in ponds.",
  },
  {
    id: "f-pon-orchid", name: "Pondie (Orchid)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 75, maxBase: 190,
    notes: "Raw 50g | Cooked 75g | Trophy Cooked 190g.",
    findLocation: "Freshwater ponds on islands ONLY. No bait required.",
  },
  {
    id: "f-pon-bronze", name: "Pondie (Bronze)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 115, maxBase: 285,
    notes: "Raw 75g | Cooked 115g | Trophy Cooked 285g.",
    findLocation: "Freshwater ponds on islands ONLY. No bait required.",
  },
  {
    id: "f-pon-moonsky", name: "Pondie (Moonsky)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 75, maxBase: 190,
    notes: "Raw 50g | Cooked 75g | Trophy Cooked 190g. Night only.",
    findLocation: "Freshwater ponds on islands ONLY, and only at night. No bait required.",
  },
  {
    id: "f-pon-goldenrod", name: "Pondie (Goldenrod)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 375, maxBase: 940,
    notes: "Raw 250g | Cooked 375g | Trophy Cooked 940g. Rare variant.",
    findLocation: "Freshwater ponds on islands ONLY. No bait required. Very rare — be patient.",
  },

  // ─── ISLEHOPPER ───────────────────────────────────────────────────────────
  {
    id: "f-isl-stone", name: "Islehopper (Stone)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 160, maxBase: 400,
    notes: "Raw 105g | Cooked 160g | Trophy Cooked 400g. Found at: Shipwreck Bay, Shark Bait Cove, Crook's Hollow, Sailor's Bounty, Cannon Cove, Fetcher's Rest.",
    findLocation: "Fish in shallow water close to the edge of specific large islands (see Notes for island list). No bait required.",
  },
  {
    id: "f-isl-moss", name: "Islehopper (Moss)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 160, maxBase: 400,
    notes: "Raw 105g | Cooked 160g | Trophy Cooked 400g. Found at: Ashen Reaches, Thieves' Haven, Marauder's Arch, Lone Cove, Wanderers Refuge, Ruby's Fall.",
    findLocation: "Fish in shallow water close to the edge of specific large islands (see Notes for island list). No bait required.",
  },
  {
    id: "f-isl-honey", name: "Islehopper (Honey)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 160, maxBase: 400,
    notes: "Raw 105g | Cooked 160g | Trophy Cooked 400g. Found at: Discovery Ridge, Plunder Valley, Kraken's Fall, Sunken Grove, Crescent Isle, The Devil's Thirst.",
    findLocation: "Fish in shallow water close to the edge of specific large islands (see Notes for island list). No bait required.",
  },
  {
    id: "f-isl-amethyst", name: "Islehopper (Amethyst)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 160, maxBase: 400,
    notes: "Raw 105g | Cooked 160g | Trophy Cooked 400g. Night only. Found at: Devil's Ridge, Smuggler's Bay, Mermaid's Hideaway, The Crooked Masts, Old Faithful Isle, Flintlock Peninsula, Snake Island.",
    findLocation: "Fish at night in shallow water near the specific islands listed in Notes. No bait required.",
  },
  {
    id: "f-isl-raven", name: "Islehopper (Raven)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1575, maxBase: 3940,
    notes: "Raw 1,050g | Cooked 1,575g | Trophy Cooked 3,940g. Rare — can be caught at any large island.",
    findLocation: "Near the shores of any large island. No bait required. Very rare — it can spawn at any large island but takes persistence.",
  },

  // ─── PLENTIFIN ────────────────────────────────────────────────────────────
  {
    id: "f-ple-olive", name: "Plentifin (Olive)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 115, maxBase: 285,
    notes: "Raw 75g | Cooked 115g | Trophy Cooked 285g.",
    findLocation: "Shores of Plenty region (northwest sea). Use Earthworm bait — dig from grassy areas. Fish near islands in this region.",
  },
  {
    id: "f-ple-amber", name: "Plentifin (Amber)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 225, maxBase: 565,
    notes: "Raw 150g | Cooked 225g | Trophy Cooked 565g.",
    findLocation: "Shores of Plenty region. Use Earthworm bait.",
  },
  {
    id: "f-ple-cloudy", name: "Plentifin (Cloudy)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 340, maxBase: 850,
    notes: "Raw 225g | Cooked 340g | Trophy Cooked 850g.",
    findLocation: "Shores of Plenty region. Use Earthworm bait.",
  },
  {
    id: "f-ple-watery", name: "Plentifin (Watery)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 225, maxBase: 565,
    notes: "Raw 150g | Cooked 225g | Trophy Cooked 565g. Night only.",
    findLocation: "Shores of Plenty region. Use Earthworm bait. Only bites at night.",
  },
  {
    id: "f-ple-bonedust", name: "Plentifin (Bonedust)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1500, maxBase: 3750,
    notes: "Raw 1,000g | Cooked 1,500g | Trophy Cooked 3,750g. Rare variant.",
    findLocation: "Shores of Plenty region. Use Earthworm bait. Very rare — be patient.",
  },

  // ─── WILDSPLASH ───────────────────────────────────────────────────────────
  {
    id: "f-wil-russet", name: "Wildsplash (Russet)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 115, maxBase: 285,
    notes: "Raw 75g | Cooked 115g | Trophy Cooked 285g.",
    findLocation: "The Wilds region (northeast sea). Use Earthworm bait — dig from grassy areas.",
  },
  {
    id: "f-wil-sandy", name: "Wildsplash (Sandy)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 225, maxBase: 565,
    notes: "Raw 150g | Cooked 225g | Trophy Cooked 565g.",
    findLocation: "The Wilds region. Use Earthworm bait.",
  },
  {
    id: "f-wil-ocean", name: "Wildsplash (Ocean)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 340, maxBase: 850,
    notes: "Raw 225g | Cooked 340g | Trophy Cooked 850g.",
    findLocation: "The Wilds region. Use Earthworm bait.",
  },
  {
    id: "f-wil-coral", name: "Wildsplash (Coral)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 225, maxBase: 565,
    notes: "Raw 150g | Cooked 225g | Trophy Cooked 565g. Night only.",
    findLocation: "The Wilds region. Use Earthworm bait. Only bites at night.",
  },
  {
    id: "f-wil-muddy", name: "Wildsplash (Muddy)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1500, maxBase: 3750,
    notes: "Raw 1,000g | Cooked 1,500g | Trophy Cooked 3,750g. Rare variant.",
    findLocation: "The Wilds region. Use Earthworm bait. Very rare.",
  },

  // ─── ANCIENTSCALE ─────────────────────────────────────────────────────────
  {
    id: "f-anc-almond", name: "Ancientscale (Almond)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 115, maxBase: 285,
    notes: "Raw 75g | Cooked 115g | Trophy Cooked 285g.",
    findLocation: "The Ancient Isles region (central sea). Use Leech bait — dig from shorelines.",
  },
  {
    id: "f-anc-sapphire", name: "Ancientscale (Sapphire)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 225, maxBase: 565,
    notes: "Raw 150g | Cooked 225g | Trophy Cooked 565g.",
    findLocation: "The Ancient Isles region. Use Leech bait.",
  },
  {
    id: "f-anc-smoke", name: "Ancientscale (Smoke)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 340, maxBase: 850,
    notes: "Raw 225g | Cooked 340g | Trophy Cooked 850g.",
    findLocation: "The Ancient Isles region. Use Leech bait.",
  },
  {
    id: "f-anc-starshine", name: "Ancientscale (Starshine)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 225, maxBase: 565,
    notes: "Raw 150g | Cooked 225g | Trophy Cooked 565g. Night only.",
    findLocation: "The Ancient Isles region. Use Leech bait. Only bites at night.",
  },
  {
    id: "f-anc-bone", name: "Ancientscale (Bone)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1500, maxBase: 3750,
    notes: "Raw 1,000g | Cooked 1,500g | Trophy Cooked 3,750g. Rare variant.",
    findLocation: "The Ancient Isles region. Use Leech bait. Very rare.",
  },

  // ─── DEVILFISH ────────────────────────────────────────────────────────────
  {
    id: "f-dev-ashen", name: "Devilfish (Ashen)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 115, maxBase: 285,
    notes: "Raw 75g | Cooked 115g | Trophy Cooked 285g.",
    findLocation: "Devil's Roar region ONLY. Use Grub bait — dig from sandy soil. The volcanic eruptions and geysers make fishing here dangerous.",
  },
  {
    id: "f-dev-seashell", name: "Devilfish (Seashell)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 225, maxBase: 565,
    notes: "Raw 150g | Cooked 225g | Trophy Cooked 565g.",
    findLocation: "Devil's Roar region ONLY. Use Grub bait.",
  },
  {
    id: "f-dev-lava", name: "Devilfish (Lava)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 340, maxBase: 850,
    notes: "Raw 225g | Cooked 340g | Trophy Cooked 850g.",
    findLocation: "Devil's Roar region ONLY. Use Grub bait.",
  },
  {
    id: "f-dev-forsaken", name: "Devilfish (Forsaken)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 225, maxBase: 565,
    notes: "Raw 150g | Cooked 225g | Trophy Cooked 565g. Night only.",
    findLocation: "Devil's Roar region ONLY. Use Grub bait. Only bites at night.",
  },
  {
    id: "f-dev-firefly", name: "Devilfish (Firefly)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1500, maxBase: 3750,
    notes: "Raw 1,000g | Cooked 1,500g | Trophy Cooked 3,750g. Rare variant.",
    findLocation: "Devil's Roar region ONLY. Use Grub bait. Very rare.",
  },

  // ─── BATTLEGILL ───────────────────────────────────────────────────────────
  {
    id: "f-bat-sand", name: "Battlegill (Sand)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 115, maxBase: 285,
    notes: "Raw 75g | Cooked 115g | Trophy Cooked 285g. Must fish during an active Skeleton Fort or Skeleton Fleet event.",
    findLocation: "Fish in the water near an active Skeleton Fort world event (storm cloud over a fort) or near Skeleton Ships. Use Grub bait.",
  },
  {
    id: "f-bat-sunset", name: "Battlegill (Sunset)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 225, maxBase: 565,
    notes: "Raw 150g | Cooked 225g | Trophy Cooked 565g. Must fish near an active Skeleton event.",
    findLocation: "Fish near an active Skeleton Fort or Skeleton Ship. Use Grub bait.",
  },
  {
    id: "f-bat-sky", name: "Battlegill (Sky)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 340, maxBase: 850,
    notes: "Raw 225g | Cooked 340g | Trophy Cooked 850g. Must fish near an active Skeleton event.",
    findLocation: "Fish near an active Skeleton Fort or Skeleton Ship. Use Grub bait.",
  },
  {
    id: "f-bat-rum", name: "Battlegill (Rum)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 225, maxBase: 565,
    notes: "Raw 150g | Cooked 225g | Trophy Cooked 565g. Night only, near an active Skeleton event.",
    findLocation: "Fish at night near an active Skeleton Fort or Skeleton Ship. Use Grub bait.",
  },
  {
    id: "f-bat-brine", name: "Battlegill (Brine)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1500, maxBase: 3750,
    notes: "Raw 1,000g | Cooked 1,500g | Trophy Cooked 3,750g. Rare. Must fish near an active Skeleton event.",
    findLocation: "Fish near an active Skeleton Fort or Skeleton Ship. Use Grub bait. Very rare.",
  },

  // ─── WRECKER ──────────────────────────────────────────────────────────────
  {
    id: "f-wre-rose", name: "Wrecker (Rose)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 115, maxBase: 285,
    notes: "Raw 75g | Cooked 115g | Trophy Cooked 285g. Must fish near a Shipwreck.",
    findLocation: "Fish in the water directly surrounding a Shipwreck (look for circling seagulls). Use Earthworm bait.",
  },
  {
    id: "f-wre-moon", name: "Wrecker (Moon)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 225, maxBase: 565,
    notes: "Raw 150g | Cooked 225g | Trophy Cooked 565g. Must fish near a Shipwreck.",
    findLocation: "Fish near a Shipwreck. Use Earthworm bait.",
  },
  {
    id: "f-wre-dawn", name: "Wrecker (Dawn)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 340, maxBase: 850,
    notes: "Raw 225g | Cooked 340g | Trophy Cooked 850g. Must fish near a Shipwreck.",
    findLocation: "Fish near a Shipwreck. Use Earthworm bait.",
  },
  {
    id: "f-wre-blackcloud", name: "Wrecker (Blackcloud)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1500, maxBase: 3750,
    notes: "Raw 1,000g | Cooked 1,500g | Trophy Cooked 3,750g. Unique double condition: must be near a Shipwreck AND inside a Storm.",
    findLocation: "Fish near a Shipwreck that is inside an active Storm. Sail into a storm, find a Shipwreck within it, and cast from there. Use Earthworm bait. One of the hardest fish to obtain.",
  },
  {
    id: "f-wre-snow", name: "Wrecker (Snow)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1875, maxBase: 4690,
    notes: "Raw 1,250g | Cooked 1,875g | Trophy Cooked 4,690g. Most valuable Wrecker — even rarer than Blackcloud.",
    findLocation: "Fish near a Shipwreck. Use Earthworm bait. Extremely rare — the most valuable standard Wrecker variant.",
  },

  // ─── STORMFISH ────────────────────────────────────────────────────────────
  {
    id: "f-str-ancient", name: "Stormfish (Ancient)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 750, maxBase: 1875,
    notes: "Raw 500g | Cooked 750g | Trophy Cooked 1,875g. Ancient Isles region storms only.",
    findLocation: "Fish inside an active Storm in The Ancient Isles region. Use Leech bait. Storms are indicated by the compass spinning and the ship bell ringing — sail toward the dark clouds.",
  },
  {
    id: "f-str-shores", name: "Stormfish (Shores)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 750, maxBase: 1875,
    notes: "Raw 500g | Cooked 750g | Trophy Cooked 1,875g. Shores of Plenty region storms only.",
    findLocation: "Fish inside an active Storm in The Shores of Plenty region. Use Leech bait.",
  },
  {
    id: "f-str-wild", name: "Stormfish (Wild)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 750, maxBase: 1875,
    notes: "Raw 500g | Cooked 750g | Trophy Cooked 1,875g. The Wilds region storms only.",
    findLocation: "Fish inside an active Storm in The Wilds region. Use Leech bait.",
  },
  {
    id: "f-str-shadow", name: "Stormfish (Shadow)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 750, maxBase: 1875,
    notes: "Raw 500g | Cooked 750g | Trophy Cooked 1,875g. Night storms, any region.",
    findLocation: "Fish inside any active Storm at night in any region. Use Leech bait. Also catchable at permanently stormy locations like the Sea Dog Tavern or Uncharted Island N-13.",
  },
  {
    id: "f-str-twilight", name: "Stormfish (Twilight)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 2250, maxBase: 5625,
    notes: "Raw 1,500g | Cooked 2,250g | Trophy Cooked 5,625g. The most valuable fish in the game. Any storm, any region, any time.",
    findLocation: "Fish inside any active Storm, any region, any time of day. Use Leech bait. Extremely rare — the rarest and most valuable fish. You may sail through many storms before catching one.",
  },

  // ─── MEAT ─────────────────────────────────────────────────────────────────
  {
    id: "m1", name: "Chicken Meat (Cooked)", category: "Meat", bestCompany: "Hunter's Call",
    minBase: 10, maxBase: null, fixedValue: true,
    notes: "Must be cooked on the ship's stove before selling.",
    findLocation: "Kill chickens on islands, then cook the raw meat on your ship's stove. Chickens are found on most larger islands.",
  },
  {
    id: "m2", name: "Pork (Cooked)", category: "Meat", bestCompany: "Hunter's Call",
    minBase: 10, maxBase: null, fixedValue: true,
    notes: "Must be cooked on the ship's stove before selling.",
    findLocation: "Kill pigs on islands, then cook on your ship's stove. Pigs are found on most larger islands — their loud squealing may attract attention.",
  },
  {
    id: "m3", name: "Snake Meat (Cooked)", category: "Meat", bestCompany: "Hunter's Call",
    minBase: 10, maxBase: null, fixedValue: true,
    notes: "Must be cooked on the ship's stove before selling.",
    findLocation: "Kill snakes on islands, then cook on your ship's stove. Snakes attack if you get too close.",
  },
  {
    id: "m4", name: "Shark Meat (Cooked)", category: "Meat", bestCompany: "Hunter's Call",
    minBase: 25, maxBase: null, fixedValue: true,
    notes: "Must be cooked before selling.",
    findLocation: "Kill sharks that attack players swimming near ships in open water. Use a sword or pistol. Cook on ship's stove before selling.",
  },
  {
    id: "m5", name: "Megalodon Meat (Cooked)", category: "Meat", bestCompany: "Hunter's Call",
    minBase: 150, maxBase: null, fixedValue: true,
    notes: "Cooked only. Multiple pieces drop per kill.",
    findLocation: "Kill any Megalodon boss that spawns in open water (the Hungering One, Shrouded Ghost, etc.). Megalodons attack ships at sea. Cook the meat before selling.",
  },
  {
    id: "m6", name: "Kraken Meat (Cooked)", category: "Meat", bestCompany: "Hunter's Call",
    minBase: 150, maxBase: null, fixedValue: true,
    notes: "Cooked only. Harvest from defeated tentacles.",
    findLocation: "Harvest from Kraken tentacles during a Kraken world event. The Kraken spawns in open water and attacks your ship. Defeat tentacles to collect meat. Cook before selling.",
  },

  // ─── MERMAID GEMS ─────────────────────────────────────────────────────────
  {
    id: "g1", name: "Sapphire Mermaid Gem", category: "Gems", bestCompany: "Any",
    minBase: 800, maxBase: 1200,
    notes: "Sell to any company except Athena's Fortune.",
    findLocation: "Destroy Sapphire Cursed Mermaid Statues found on the shores of islands and in shallow surrounding waters. Shoot or strike them — they explode and release the gem. Cannot be found near Forts, Outposts, or Seaposts.",
  },
  {
    id: "g2", name: "Emerald Mermaid Gem", category: "Gems", bestCompany: "Any",
    minBase: 1200, maxBase: 1800,
    notes: "Sell to any company except Athena's Fortune.",
    findLocation: "Destroy Emerald Cursed Mermaid Statues found on island shores and in shallow water. Harder to destroy than Sapphire statues.",
  },
  {
    id: "g3", name: "Ruby Mermaid Gem", category: "Gems", bestCompany: "Any",
    minBase: 2000, maxBase: 3200,
    notes: "Rarest Mermaid Gem. Sell to any company except Athena's Fortune.",
    findLocation: "Destroy Ruby Cursed Mermaid Statues — the rarest and toughest to destroy. Found on island shores. Also occasionally found inside Collector's Chests.",
  },

  // ─── SIREN GEMS ───────────────────────────────────────────────────────────
  {
    id: "sg1", name: "Sapphire Siren Gem", category: "Siren Gems", bestCompany: "Any",
    minBase: 1000, maxBase: null, fixedValue: true,
    notes: "Sell to any company except Athena's Fortune. Also used as keys to unlock Siren Treasury vault doors.",
    findLocation: "Dropped by Sirens and Eel-ectric Ocean Crawlers underwater. Also found inside Siren Shrines and Siren Treasuries.",
  },
  {
    id: "sg2", name: "Emerald Siren Gem", category: "Siren Gems", bestCompany: "Any",
    minBase: 1500, maxBase: null, fixedValue: true,
    notes: "Sell to any company except Athena's Fortune.",
    findLocation: "Dropped by Siren Leaders and Hermit Ocean Crawlers. Also found inside Siren Shrines and Siren Treasuries.",
  },
  {
    id: "sg3", name: "Ruby Siren Gem", category: "Siren Gems", bestCompany: "Any",
    minBase: 2000, maxBase: null, fixedValue: true,
    notes: "Rarest Siren Gem. Sell to any company except Athena's Fortune.",
    findLocation: "Dropped by Crab Ocean Crawlers. Also found in the deepest parts of Siren Treasuries.",
  },

  // ─── ARTEFACTS — REGULAR (4 tiers, 3 items per tier) ─────────────────────
  {
    id: "art-b1", name: "Ancient Goblet", category: "Artefacts", bestCompany: "Gold Hoarders",
    minBase: 60, maxBase: 130,
    notes: "Bronze tier artefact.",
    findLocation: "Found inside Collector's Chests from Riddle Map voyages, from X Marks the Spot maps, in Shipwrecks, and occasionally as random world spawns on islands.",
  },
  {
    id: "art-b2", name: "Bronze Secret-Keeper", category: "Artefacts", bestCompany: "Gold Hoarders",
    minBase: 60, maxBase: 130,
    notes: "Bronze tier artefact.",
    findLocation: "Found inside Collector's Chests from Riddle Map voyages, in Shipwrecks, and as random spawns on islands.",
  },
  {
    id: "art-b3", name: "Mysterious Vessel", category: "Artefacts", bestCompany: "Gold Hoarders",
    minBase: 60, maxBase: 130,
    notes: "Bronze tier artefact.",
    findLocation: "Found inside Collector's Chests from Riddle Map voyages, in Shipwrecks, and as random world spawns on islands.",
  },
  {
    id: "art-s1", name: "Decorative Coffer", category: "Artefacts", bestCompany: "Gold Hoarders",
    minBase: 140, maxBase: 260,
    notes: "Silver tier artefact.",
    findLocation: "Found inside Collector's Chests from Riddle Map voyages and higher-level Gold Hoarder voyages. Also in Shipwrecks.",
  },
  {
    id: "art-s2", name: "Elaborate Flagon", category: "Artefacts", bestCompany: "Gold Hoarders",
    minBase: 140, maxBase: 260,
    notes: "Silver tier artefact.",
    findLocation: "Found inside Collector's Chests from Riddle Map voyages. Also in Shipwrecks.",
  },
  {
    id: "art-s3", name: "Silvered Cup", category: "Artefacts", bestCompany: "Gold Hoarders",
    minBase: 140, maxBase: 260,
    notes: "Silver tier artefact.",
    findLocation: "Found inside Collector's Chests from Riddle Map voyages. Also in Shipwrecks.",
  },
  {
    id: "art-g1", name: "Gilded Chalice", category: "Artefacts", bestCompany: "Gold Hoarders",
    minBase: 280, maxBase: 520,
    notes: "Gold tier artefact.",
    findLocation: "Found inside Collector's Chests from Riddle Map voyages and Gold Hoarders Wayfinder Voyages. Also in Shipwrecks.",
  },
  {
    id: "art-g2", name: "Golden Reliquary", category: "Artefacts", bestCompany: "Gold Hoarders",
    minBase: 280, maxBase: 520,
    notes: "Gold tier artefact.",
    findLocation: "Found inside Collector's Chests from Riddle Map voyages. Also in Shipwrecks and occasionally as a random island spawn.",
  },
  {
    id: "art-g3", name: "Ornate Carafe", category: "Artefacts", bestCompany: "Gold Hoarders",
    minBase: 280, maxBase: 520,
    notes: "Gold tier artefact.",
    findLocation: "Found inside Collector's Chests from Riddle Map voyages. Also in Shipwrecks.",
  },
  {
    id: "art-j1", name: "Adorned Receptacle", category: "Artefacts", bestCompany: "Gold Hoarders",
    minBase: 560, maxBase: 1100,
    notes: "Jeweled tier artefact — highest regular artefact value.",
    findLocation: "Found inside Collector's Chests from high-level Riddle Map voyages and Gold Hoarders Wayfinder Voyages.",
  },
  {
    id: "art-j2", name: "Opulent Curio", category: "Artefacts", bestCompany: "Gold Hoarders",
    minBase: 560, maxBase: 1100,
    notes: "Jeweled tier artefact.",
    findLocation: "Found inside Collector's Chests from high-level Riddle Map voyages and Wayfinder Voyages.",
  },
  {
    id: "art-j3", name: "Peculiar Relic", category: "Artefacts", bestCompany: "Gold Hoarders",
    minBase: 560, maxBase: 1100,
    notes: "Jeweled tier artefact.",
    findLocation: "Found inside Collector's Chests from high-level Riddle Map voyages and Wayfinder Voyages. Also occasionally found in Shipwrecks.",
  },
  {
    id: "art-bos1", name: "Sapphire Breath of the Sea", category: "Artefacts", bestCompany: "Gold Hoarders",
    minBase: 4000, maxBase: null, fixedValue: true,
    findLocation: "Found exclusively inside Siren Treasuries — the large underwater vault structures. Complete the Siren Gem puzzle to open the vault. The Sapphire variant is the most common of the three.",
  },
  {
    id: "art-bos2", name: "Emerald Breath of the Sea", category: "Artefacts", bestCompany: "Gold Hoarders",
    minBase: 6000, maxBase: null, fixedValue: true,
    findLocation: "Found exclusively inside Siren Treasuries. The Emerald variant is rarer than the Sapphire — not every Treasury run will yield one.",
  },
  {
    id: "art-bos3", name: "Ruby Breath of the Sea", category: "Artefacts", bestCompany: "Gold Hoarders",
    minBase: 8000, maxBase: null, fixedValue: true,
    notes: "Rarest and most valuable of the three Breath of the Sea variants.",
    findLocation: "Found exclusively inside Siren Treasuries. The rarest variant — only occasionally spawns and appears in the deepest parts of the Treasury vault.",
  },

  // ─── ARTEFACTS — ASHEN (Devil's Roar) ────────────────────────────────────
  {
    id: "ashart-1", name: "Roaring Goblet", category: "Ashen Artefacts", bestCompany: "Gold Hoarders",
    minBase: 140, maxBase: 260,
    notes: "Devil's Roar artefact — glows red/orange.",
    findLocation: "Found inside Collector's Chests from Ashen Gold Hoarder voyages in the Devil's Roar. Also inside unlocked Ashen Chests (requires an Ashen Key), and dropped by Ashen Lords. Small chance to appear outside the Devil's Roar.",
  },
  {
    id: "ashart-2", name: "Brimstone Casket", category: "Ashen Artefacts", bestCompany: "Gold Hoarders",
    minBase: 280, maxBase: 520,
    notes: "Devil's Roar artefact — glows red/orange.",
    findLocation: "Found inside Collector's Chests from Ashen voyages in the Devil's Roar. Also inside unlocked Ashen Chests and dropped by Ashen Lords.",
  },
  {
    id: "ashart-3", name: "Devil's Remnant", category: "Ashen Artefacts", bestCompany: "Gold Hoarders",
    minBase: 560, maxBase: 1100,
    notes: "Devil's Roar artefact — glows red/orange.",
    findLocation: "Found inside Collector's Chests from higher-level Ashen voyages in the Devil's Roar. Also from Ashen Lords and inside Ashen Chests.",
  },
  {
    id: "ashart-4", name: "Magma's Grail", category: "Ashen Artefacts", bestCompany: "Gold Hoarders",
    minBase: 1100, maxBase: 2100,
    notes: "Rarest and most valuable Devil's Roar artefact.",
    findLocation: "Found inside Collector's Chests from high-level Ashen Gold Hoarder voyages. Also occasionally dropped by Ashen Lords and found inside Ashen Chests.",
  },

  // ─── ARTEFACTS — CORAL ────────────────────────────────────────────────────
  {
    id: "corart-1", name: "Mysterious Coral Vessel", category: "Coral Artefacts", bestCompany: "Gold Hoarders",
    minBase: 105, maxBase: 228,
    notes: "Coral-encrusted artefact from Siren locations.",
    findLocation: "Found inside Siren Shrines and Siren Treasuries. Dive underwater and search the coral structures.",
  },
  {
    id: "corart-2", name: "Silvered Coral Cup", category: "Coral Artefacts", bestCompany: "Gold Hoarders",
    minBase: 245, maxBase: 455,
    notes: "Coral artefact from Siren locations.",
    findLocation: "Found inside Siren Shrines and the vaults of Siren Treasuries.",
  },
  {
    id: "corart-3", name: "Golden Coral Reliquary", category: "Coral Artefacts", bestCompany: "Gold Hoarders",
    minBase: 490, maxBase: 910,
    notes: "Coral artefact from Siren locations.",
    findLocation: "Found inside Siren Shrines and the locked vaults of Siren Treasuries. Use Siren Gems to unlock the vault door.",
  },
  {
    id: "corart-4", name: "Peculiar Coral Relic", category: "Coral Artefacts", bestCompany: "Gold Hoarders",
    minBase: 980, maxBase: 1925,
    notes: "Rarest coral artefact — highest value of the four types.",
    findLocation: "Found deep inside locked Siren Treasury vaults. The rarest coral artefact — only one or two may spawn per Treasury run.",
  },

  // ─── ATHENA'S FORTUNE ARTEFACTS ───────────────────────────────────────────
  {
    id: "at3", name: "Box of Wondrous Secrets", category: "Artefacts", bestCompany: "Athena's Fortune",
    minBase: 25000, maxBase: null, fixedValue: true,
    findLocation: "Extremely rare reward from Athena's Fortune Legendary Voyages. Occasionally found in the Fort of the Damned vault. Requires Pirate Legend status.",
  },
  {
    id: "at4", name: "Skull of Siren Song", category: "Artefacts", bestCompany: "Athena's Fortune",
    minBase: 10000, maxBase: 15000,
    findLocation: "Obtained from Athena's Fortune Legendary Voyages. Requires Pirate Legend status.",
  },
  {
    id: "at5", name: "Chalice of Ancient Tributes", category: "Artefacts", bestCompany: "Athena's Fortune",
    minBase: 6000, maxBase: 9000,
    findLocation: "Obtained from Athena's Fortune Legendary Voyages. Requires Pirate Legend status.",
  },
  {
    id: "at6", name: "Keg of Ancient Black Powder", category: "Artefacts", bestCompany: "Athena's Fortune",
    minBase: 3000, maxBase: 5000,
    notes: "Explosive — glows green. Handle with extreme care, it explodes on impact.",
    findLocation: "Obtained from Athena's Fortune Legendary Voyages. Requires Pirate Legend status.",
  },
  {
    id: "at7", name: "Gilded Relic of Ancient Fortune", category: "Artefacts", bestCompany: "Athena's Fortune",
    minBase: 1400, maxBase: 1550,
    findLocation: "Found inside Collector's Chests from Athena's Fortune Legendary Voyages. Also from Fort of Fortune vaults.",
  },
  {
    id: "at8", name: "Villainous Skull of Ancient Fortune", category: "Artefacts", bestCompany: "Athena's Fortune",
    minBase: 1400, maxBase: 1550,
    findLocation: "Found inside Collector's Chests from Athena's Fortune Legendary Voyages.",
  },
  {
    id: "at9", name: "Orb of Secrets", category: "Artefacts", bestCompany: "Any",
    minBase: 20000, maxBase: null, fixedValue: true,
    notes: "Cannot be sold to Athena's Fortune.",
    findLocation: "Found in the Temple Crypt beneath Skeleton Camps. Solve the Constellation Puzzle on the Spinning Stones above the crypt door (trace 3 constellations), then defeat the Obsidian Skeleton waves to access the crypt. The Orb sits on an altar inside.",
  },

  // ─── VAULT KEYS ───────────────────────────────────────────────────────────
  {
    id: "vk1", name: "Stone Treasure Vault Key", category: "Vault", bestCompany: "Gold Hoarders",
    minBase: 3750, maxBase: 5000,
    notes: "7 totem types: Boar (Devil's Ridge), Crab (N-13), Moon (Crescent Isle), Scarab (Crook's Hollow), Snake (Mermaid's Hideaway), Shark (Kraken's Fall), Eagle (Fetcher's Rest / Ashen Reach). Sell or use to open the matching vault.",
    findLocation: "Obtained from Gold Hoarders Pirate-tier Wayfinder Voyages. The voyage uses a Golden Wayfinder Compass to find Torn Map Parchments, which reveal an X on a large island. Dig it up for a Collector's Chest containing the key.",
  },
  {
    id: "vk2", name: "Gold Treasure Vault Key", category: "Vault", bestCompany: "Gold Hoarders",
    minBase: 9000, maxBase: 12000,
    notes: "Higher-tier key. Same 7 totem types as the Stone Key but opens a more valuable vault with more loot inside.",
    findLocation: "Obtained from Gold Hoarders Captain-tier Wayfinder Voyages. Higher-level version of the Pirate voyage — follow the Wayfinder Compass to Torn Map Parchments and dig up the Collector's Chest.",
  },

  // ─── REAPER'S BONES ───────────────────────────────────────────────────────
  {
    id: "r1", name: "Reaper's Chest", category: "Bounty", bestCompany: "Reaper's Bones",
    minBase: 5000, maxBase: 12000,
    notes: "ONLY sells to the Masked Stranger at The Reaper's Hideout (center of the map).",
    findLocation: "Spawns randomly on islands — glows red and visible from a distance. Also found in Skeleton Fort Vaults. Its location is visible to ALL crews on the map, making it a high-risk item to carry.",
  },
  {
    id: "r2", name: "Reaper's Bounty", category: "Bounty", bestCompany: "Reaper's Bones",
    minBase: 10000, maxBase: 20000,
    notes: "ONLY sells to the Masked Stranger at The Reaper's Hideout.",
    findLocation: "Rare random world spawn on islands — glows gold and visible to ALL crews on the map. Much rarer than the Reaper's Chest. Sell fast — every crew can see exactly where it is.",
  },
  {
    id: "r3", name: "Reaper's Chest of Legend", category: "Bounty", bestCompany: "Reaper's Bones",
    minBase: 20000, maxBase: 35000,
    notes: "Rare high-value Reaper's Bones exclusive.",
    findLocation: "Extremely rare world spawn on islands — like the Reaper's Chest but much harder to find. Also occasionally found in Fort of the Damned vaults. Visible to all crews on the map.",
  },

  // ─── OTHER ────────────────────────────────────────────────────────────────
  {
    id: "br1", name: "Ashen Key", category: "Other", bestCompany: "Bilge Rats",
    minBase: 0, maxBase: null, fixedValue: true, doubloons: true,
    notes: "5 Doubloons (Bilge Rats) or 10 Doubloons + Rep (Reaper's Bones). Used to unlock Ashen Chests.",
    findLocation: "Dropped by Ashen Skeleton Key Masters in the Devil's Roar — captains that glow and carry a key on their belt. Also found in Ashen voyages and occasionally in Devil's Roar Shipwrecks.",
  },
  {
    id: "br2", name: "Ashen Chest (Locked)", category: "Other", bestCompany: "Bilge Rats",
    minBase: 0, maxBase: null, fixedValue: true, doubloons: true,
    notes: "5 Doubloons to Bilge Rats or Reaper's Bones. Unlock with an Ashen Key to get 3 Ashen Tomes inside worth additional gold.",
    findLocation: "Found buried on Devil's Roar islands via X Marks the Spot and Riddle Maps, or dropped during Ashen voyages. Always contains 3 Ashen Tomes when unlocked with an Ashen Key.",
  },
];
