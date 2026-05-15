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
    notes: "Dropped by Skeleton Captains",
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
    notes: "Found in Fort Vaults",
    findLocation: "Inside the Fort Vault after completing a Skeleton Fort world event. Defeat all skeleton waves and the Fort Captain to claim the vault key.",
  },
  {
    id: "c7", name: "Chest of Ancient Tributes", category: "Chests", bestCompany: "Gold Hoarders",
    minBase: 3000, maxBase: 3400,
    findLocation: "Rewarded from Gold Hoarders Wayfinder Voyages. These are multi-step voyages purchased from the Gold Hoarders representative at any Outpost.",
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
    notes: "Cursed — heats up over time and sets fire to the ship. Cool it by submerging in water or pouring water on it.",
    findLocation: "Rare find from X Marks the Spot maps, Riddle Maps, Messages in a Bottle, and Shipwrecks. Also found in the Fort of the Damned vault.",
  },
  {
    id: "c11", name: "Chest of Legends", category: "Chests", bestCompany: "Athena's Fortune",
    minBase: 8000, maxBase: 10000,
    notes: "Pirate Legend only — sell to the Mysterious Stranger in any Tavern.",
    findLocation: "Obtained by completing Athena's Fortune Legendary Voyages. Requires Pirate Legend status to purchase the voyage, but any crew can sail it. Also found in the Fort of the Damned vault occasionally.",
  },
  {
    id: "c12", name: "Collector's Chest", category: "Chests", bestCompany: "Gold Hoarders",
    minBase: 800, maxBase: 1600,
    notes: "Contains gems and artefacts inside worth additional gold.",
    findLocation: "Final reward of a Riddle Map quest — the riddle leads you to a specific landmark, then a set number of steps to dig it up. Also found rarely in Shipwrecks.",
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

  // ─── ASHEN CHESTS ─────────────────────────────────────────────────────────
  {
    id: "ac1", name: "Ashen Castaway's Chest", category: "Ashen Chests", bestCompany: "Gold Hoarders",
    minBase: 140, maxBase: 260,
    findLocation: "Devil's Roar region only — from X Marks the Spot maps and Riddle Maps obtained in or near the Devil's Roar. Worth roughly 2× the regular equivalent.",
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
    notes: "Rarest standard Ashen chest.",
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
    notes: "Also usable as a fire-breath weapon — hold it and blow to shoot fire. Has limited charges.",
    findLocation: "Dropped by the Ashen Winds boss during the Ashen Winds world event. Look for a large flaming skull icon on the map. The event spawns in the Devil's Roar.",
  },
  {
    id: "ac7", name: "Ashen Chest of Legends", category: "Ashen Chests", bestCompany: "Athena's Fortune",
    minBase: 8600, maxBase: 11000,
    notes: "Devil's Roar variant of the Chest of Legends.",
    findLocation: "Obtained from Athena's Fortune Legendary Voyages that take place in the Devil's Roar region. Requires Pirate Legend status to purchase the voyage.",
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
    findLocation: "Found inside Siren Shrines and the inner vaults of Siren Treasuries. More valuable coral chests tend to be deeper inside the structure.",
  },
  {
    id: "cc5", name: "Coral Captain's Chest", category: "Coral Chests", bestCompany: "Gold Hoarders",
    minBase: 980, maxBase: 1925,
    findLocation: "Found deep inside Siren Treasuries, typically in the locked vault. Defeat the Siren enemies and use the Siren Gems to unlock the Treasury door.",
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
    findLocation: "Dropped by mid-level Skeleton Captains during Bounty Map voyages. The second-lowest tier bounty skull.",
  },
  {
    id: "s3", name: "Hateful Bounty Skull", category: "Skulls", bestCompany: "Order of Souls",
    minBase: 350, maxBase: 750,
    findLocation: "Dropped by higher-level Skeleton Captains during Bounty Map voyages. More likely from higher-tier Order of Souls voyages.",
  },
  {
    id: "s4", name: "Villainous Bounty Skull", category: "Skulls", bestCompany: "Order of Souls",
    minBase: 750, maxBase: 1450,
    findLocation: "Dropped by the toughest Skeleton Captains on high-tier Bounty Map voyages. Also found in Fort Vaults occasionally.",
  },
  {
    id: "s5", name: "Skeleton Captain's Skull", category: "Skulls", bestCompany: "Order of Souls",
    minBase: 850, maxBase: 2200,
    notes: "Dropped by Skeleton Captains during bounties — value varies widely depending on the captain's rank.",
    findLocation: "Dropped by Skeleton Captains encountered during Bounty Map voyages, Skeleton Camp raids, and randomly from emergent Skeleton Ships.",
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
    notes: "Ghostly variant — eerie glowing skull.",
    findLocation: "Dropped by Ghost Skeletons during the Ghost Fleet world event. Look for a ghostly galleon spawning on the horizon.",
  },
  {
    id: "s8", name: "Captain Skull of the Damned", category: "Skulls", bestCompany: "Order of Souls",
    minBase: 1700, maxBase: 2950,
    notes: "Ghostly Captain variant — higher value than standard Skull of the Damned.",
    findLocation: "Dropped by the Ghost Captain during the Ghost Fleet world event. Rarer than standard Skulls of the Damned.",
  },
  {
    id: "s9", name: "Gold Hoarder's Skull", category: "Skulls", bestCompany: "Order of Souls",
    minBase: 10000, maxBase: null, fixedValue: true,
    notes: "Unique skull — fixed 10,000g, no emissary bonus applies.",
    findLocation: "Dropped exclusively by the Gold Hoarder boss at the end of a Gold Hoarder Voyage (purchased from the Gold Hoarders rep at any Outpost).",
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
    findLocation: "Devil's Roar region — dropped by high-level Ashen Skeleton Captains. Worth roughly 2× the standard Hateful Skull.",
  },
  {
    id: "as4", name: "Ashen Villainous Bounty Skull", category: "Ashen Skulls", bestCompany: "Order of Souls",
    minBase: 1450, maxBase: 2800,
    findLocation: "Devil's Roar region — dropped by the toughest Ashen Skeleton Captains on high-tier Ashen Bounty voyages.",
  },
  {
    id: "as5", name: "Ashen Winds Skull", category: "Ashen Skulls", bestCompany: "Order of Souls",
    minBase: 4000, maxBase: 10000,
    notes: "Value depends on remaining fire charges — a fully charged skull is worth much more. Also functions as a fire weapon with limited blasts.",
    findLocation: "Dropped by the Ashen Winds boss during the Ashen Winds world event in the Devil's Roar. The event is announced on the map by a large flaming skull icon. Defeat the boss to claim the skull.",
  },

  // ─── CORAL SKULLS ─────────────────────────────────────────────────────────
  {
    id: "cs1", name: "Coral Foul Skull", category: "Coral Skulls", bestCompany: "Order of Souls",
    minBase: 158, maxBase: 315,
    findLocation: "Found inside Siren Shrines and the vaults of Siren Treasuries. Defeat the Siren enemies guarding the area to collect them.",
  },
  {
    id: "cs2", name: "Coral Disgraced Skull", category: "Coral Skulls", bestCompany: "Order of Souls",
    minBase: 315, maxBase: 630,
    findLocation: "Found inside Siren Shrines and Siren Treasuries. Deeper areas of the Treasury tend to hold more valuable coral skulls.",
  },
  {
    id: "cs3", name: "Coral Hateful Skull", category: "Coral Skulls", bestCompany: "Order of Souls",
    minBase: 630, maxBase: 1260,
    findLocation: "Found in the locked vaults of Siren Treasuries. Use Siren Gems collected from defeated Sirens to unlock the Treasury door.",
  },
  {
    id: "cs4", name: "Coral Villainous Skull", category: "Coral Skulls", bestCompany: "Order of Souls",
    minBase: 1260, maxBase: 2520,
    findLocation: "Found deep inside the locked vaults of Siren Treasuries. The rarest coral skull — typically only one or two spawn per Treasury run.",
  },

  // ─── TRADE GOOD CRATES ────────────────────────────────────────────────────
  {
    id: "cr1", name: "Crate of Wood", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 150, maxBase: 300,
    findLocation: "Purchased from Merchant Alliance representatives at Outposts, or found in Shipwrecks. Delivered as part of Trade Good voyage contracts.",
  },
  {
    id: "cr2", name: "Crate of Iron", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 150, maxBase: 300,
    findLocation: "Purchased from Merchant Alliance representatives at Outposts, or found in Shipwrecks.",
  },
  {
    id: "cr3", name: "Crate of Cannonballs", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 150, maxBase: 300,
    findLocation: "Purchased from Merchant Alliance representatives at Outposts, or found in Shipwrecks.",
  },
  {
    id: "cr4", name: "Crate of Rope", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 150, maxBase: 300,
    findLocation: "Purchased from Merchant Alliance representatives at Outposts, or found in Shipwrecks.",
  },
  {
    id: "cr5", name: "Crate of Tea", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 300, maxBase: 600,
    findLocation: "Purchased from Merchant Alliance representatives at Outposts, or found in Shipwrecks. Mid-tier trade good.",
  },
  {
    id: "cr6", name: "Crate of Rum", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 300, maxBase: 600,
    findLocation: "Purchased from Merchant Alliance representatives at Outposts, or found in Shipwrecks.",
  },
  {
    id: "cr7", name: "Crate of Coffee", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 350, maxBase: 700,
    findLocation: "Purchased from Merchant Alliance representatives at Outposts, or found in Shipwrecks.",
  },
  {
    id: "cr8", name: "Crate of Sugar", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 150, maxBase: 300,
    findLocation: "Purchased from Merchant Alliance representatives at Outposts, or found in Shipwrecks.",
  },
  {
    id: "cr9", name: "Crate of Cloth", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 250, maxBase: 500,
    findLocation: "Purchased from Merchant Alliance representatives at Outposts, or found in Shipwrecks.",
  },
  {
    id: "cr10", name: "Crate of Spices", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 400, maxBase: 800,
    findLocation: "Purchased from Merchant Alliance representatives at Outposts, or found in Shipwrecks. Higher-value trade good.",
  },
  {
    id: "cr11", name: "Crate of Exotic Spices", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 600, maxBase: 1200,
    findLocation: "Purchased from Merchant Alliance representatives at Outposts. Rarer and more valuable than standard Spices.",
  },
  {
    id: "cr12", name: "Crate of Silk", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 600, maxBase: 1200,
    findLocation: "Purchased from Merchant Alliance representatives at Outposts. One of the highest-value standard trade goods.",
  },
  {
    id: "cr13", name: "Crate of Fine Sugar", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 400, maxBase: 800,
    findLocation: "Purchased from Merchant Alliance representatives at Outposts, or found in Shipwrecks.",
  },
  {
    id: "cr14", name: "Crate of Explosives", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 300, maxBase: 600,
    findLocation: "Purchased from Merchant Alliance representatives at Outposts. Handle carefully — they can explode if hit by cannon fire.",
  },
  {
    id: "cr15", name: "Chicken (White Feather)", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 150, maxBase: null, fixedValue: true,
    findLocation: "Catch on islands using the Merchant Alliance Animal Crate — approach slowly and crouch to avoid startling it. Commonly found on most larger islands.",
  },
  {
    id: "cr16", name: "Chicken (Ashen)", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 250, maxBase: null, fixedValue: true,
    findLocation: "Found only on islands in or near the Devil's Roar. Rarer than standard chickens due to the hazardous environment.",
  },
  {
    id: "cr17", name: "Snake (Splashtail)", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 150, maxBase: null, fixedValue: true,
    findLocation: "Found on larger islands. Approach from behind carefully — snakes will attack if startled. Use the Merchant Alliance crate to capture.",
  },
  {
    id: "cr18", name: "Snake (Ivory)", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 300, maxBase: null, fixedValue: true,
    findLocation: "Rare snake variant found on larger islands. Harder to spot — look in dense vegetation.",
  },
  {
    id: "cr19", name: "Pig (Grunter)", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 150, maxBase: null, fixedValue: true,
    findLocation: "Found on larger islands. Approach slowly and crouch to capture without spoooking. Pigs are loud and will alert other enemies if startled.",
  },
  {
    id: "cr20", name: "Pig (Ashen)", category: "Crates", bestCompany: "Merchant Alliance",
    minBase: 250, maxBase: null, fixedValue: true,
    findLocation: "Found only on islands in or near the Devil's Roar. Rarer pig variant worth more than standard.",
  },

  // ─── CARGO RUN CRATES ─────────────────────────────────────────────────────
  {
    id: "cg1", name: "Crate of Rum Bottles (Perfect)", category: "Cargo Runs", bestCompany: "Merchant Alliance",
    minBase: 700, maxBase: null, fixedValue: true,
    notes: "Degrades with damage: Damaged 500g → Very Damaged 300g → Ruined 100g. Bottles break from falls and cannon hits.",
    findLocation: "Pick up from the Merchant Alliance representative at the source Outpost listed on your Cargo Run voyage contract. Deliver to the destination Outpost before it degrades.",
  },
  {
    id: "cg2", name: "Crate of Exotic Plants (Perfect)", category: "Cargo Runs", bestCompany: "Merchant Alliance",
    minBase: 700, maxBase: null, fixedValue: true,
    notes: "Degrades when wet: Damaged 500g → Very Damaged 300g → Ruined 100g. Keep out of water.",
    findLocation: "Pick up from the Merchant Alliance representative at the source Outpost on your Cargo Run contract. Deliver dry to the destination Outpost.",
  },
  {
    id: "cg3", name: "Crate of Woven Cloth (Perfect)", category: "Cargo Runs", bestCompany: "Merchant Alliance",
    minBase: 700, maxBase: null, fixedValue: true,
    notes: "Degrades when wet: Damaged 500g → Very Damaged 300g → Ruined 100g. Keep out of water.",
    findLocation: "Pick up from the Merchant Alliance representative at the source Outpost on your Cargo Run contract. Deliver dry to the destination Outpost.",
  },
  {
    id: "cg4", name: "Ashen Crate of Rum Bottles (Perfect)", category: "Cargo Runs", bestCompany: "Merchant Alliance",
    minBase: 1400, maxBase: null, fixedValue: true,
    notes: "Devil's Roar variant. Degrades: 1,000g → 600g → 200g. Volcanic eruptions and geysers add extra risk.",
    findLocation: "Pick up from the Merchant Alliance representative at Devil's Roar Outposts (Roaring Traders). Deliver to the destination Outpost. The volcanic hazards make these much riskier to transport.",
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

  // ─── FISH ─────────────────────────────────────────────────────────────────
  {
    id: "f1", name: "Splashtail (Ruby) — Common", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 25, maxBase: 40,
    notes: "Raw: 25g | Cooked: 40g | Trophy Cooked: 100g",
    findLocation: "Found anywhere in open water. No bait required. The most common fish in the game — catches quickly. Sell to Hunter's Call at any Seapost.",
  },
  {
    id: "f2", name: "Splashtail (Umber) — Rare", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 250, maxBase: 375,
    notes: "Raw: 250g | Cooked: 375g | Trophy Cooked: 940g",
    findLocation: "Found anywhere in open water. No bait required. Much rarer than the Ruby Splashtail — keep casting until one bites.",
  },
  {
    id: "f3", name: "Splashtail (Indigo)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 75, maxBase: 115,
    notes: "Raw: 75g | Cooked: 115g | Trophy Cooked: 285g",
    findLocation: "Found anywhere in open water. No bait required.",
  },
  {
    id: "f4", name: "Splashtail (Sunny / Seafoam)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 50, maxBase: 75,
    notes: "Raw: 50g | Cooked: 75g | Trophy Cooked: 190g | Seafoam variant only catchable at night.",
    findLocation: "Found anywhere in open water. No bait required. Seafoam variant only appears at night.",
  },
  {
    id: "f5", name: "Plentifin (Olive) — Common", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 100, maxBase: 150,
    notes: "Raw: 100g | Cooked: 150g | Trophy Cooked: 375g",
    findLocation: "Found in The Shores of Plenty region (northwest sea). Use Earthworm bait. Fish near islands in this region.",
  },
  {
    id: "f6", name: "Plentifin (Bright)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 300, maxBase: 450,
    notes: "Raw: 300g | Cooked: 450g | Trophy Cooked: 1,125g",
    findLocation: "Found in The Shores of Plenty region. Use Earthworm bait (dig from grass).",
  },
  {
    id: "f7", name: "Plentifin (Bonedust) — Rare", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1000, maxBase: 1500,
    notes: "Raw: 1,000g | Cooked: 1,500g | Trophy Cooked: 3,750g | Rarest Plentifin.",
    findLocation: "Found in The Shores of Plenty region. Use Earthworm bait. Very rare — be patient.",
  },
  {
    id: "f8", name: "Ancientscale (Almond) — Common", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 100, maxBase: 150,
    notes: "Raw: 100g | Cooked: 150g | Trophy Cooked: 375g",
    findLocation: "Found in The Ancient Isles region (central sea). Use Leech bait (dig from shorelines).",
  },
  {
    id: "f9", name: "Ancientscale (Bone) — Rare", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1000, maxBase: 1500,
    notes: "Raw: 1,000g | Cooked: 1,500g | Trophy Cooked: 3,750g",
    findLocation: "Found in The Ancient Isles region. Use Leech bait. Very rare variant.",
  },
  {
    id: "f10", name: "Ancientscale (Starshine)", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 300, maxBase: 450,
    notes: "Raw: 300g | Cooked: 450g | Trophy Cooked: 1,125g",
    findLocation: "Found in The Ancient Isles region. Use Leech bait.",
  },
  {
    id: "f11", name: "Wildsplash (Shorestalker) — Common", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 100, maxBase: 150,
    notes: "Raw: 100g | Cooked: 150g | Trophy Cooked: 375g",
    findLocation: "Found in The Wilds region (northeast sea). Use Grub bait (dig from sand).",
  },
  {
    id: "f12", name: "Wildsplash (Muddy) — Rare", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1000, maxBase: 1500,
    notes: "Raw: 1,000g | Cooked: 1,500g | Trophy Cooked: 3,750g",
    findLocation: "Found in The Wilds region. Use Grub bait. Very rare.",
  },
  {
    id: "f13", name: "Devilfish (Ashen) — Common", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 100, maxBase: 150,
    notes: "Raw: 100g | Cooked: 150g | Trophy Cooked: 375g",
    findLocation: "Found only in the Devil's Roar region. Use Leech bait. The volcanic eruptions and geysers make fishing here dangerous.",
  },
  {
    id: "f14", name: "Devilfish (Forsaken) — Rare", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1000, maxBase: 1500,
    notes: "Raw: 1,000g | Cooked: 1,500g | Trophy Cooked: 3,750g",
    findLocation: "Found only in the Devil's Roar region. Use Leech bait. Very rare.",
  },
  {
    id: "f15", name: "Battlegill (Jade) — Common", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 300, maxBase: 450,
    notes: "Raw: 300g | Cooked: 450g | Trophy Cooked: 1,125g",
    findLocation: "Found near active Skeleton Forts or Skeleton Ships — you must fish in the vicinity of an active event. Use Grub bait.",
  },
  {
    id: "f16", name: "Battlegill (Sky) — Rare", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1000, maxBase: 1500,
    notes: "Raw: 1,000g | Cooked: 1,500g | Trophy Cooked: 3,750g",
    findLocation: "Found near active Skeleton Forts or Skeleton Ships. Use Grub bait. Very rare.",
  },
  {
    id: "f17", name: "Wrecker (Rose) — Common", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 300, maxBase: 450,
    notes: "Raw: 300g | Cooked: 450g | Trophy Cooked: 1,125g",
    findLocation: "Found near Shipwrecks — fish in the water directly around a visible wreck. Use Earthworm bait.",
  },
  {
    id: "f18", name: "Wrecker (Raven) — Rare", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1000, maxBase: 1500,
    notes: "Raw: 1,000g | Cooked: 1,500g | Trophy Cooked: 3,750g",
    findLocation: "Found near Shipwrecks. Use Earthworm bait. Very rare.",
  },
  {
    id: "f19", name: "Stormfish (Ancient) — Common", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 500, maxBase: 750,
    notes: "Raw: 500g | Cooked: 750g | Trophy Cooked: 1,875g",
    findLocation: "Found only during active storms — sail into a storm and fish while lightning strikes. Use Leech bait. Storms spawn randomly across the map.",
  },
  {
    id: "f20", name: "Stormfish (Twilight) — Rare", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1500, maxBase: 2250,
    notes: "Raw: 1,500g | Cooked: 2,250g | Trophy Cooked: 5,625g | The most valuable fish in the game.",
    findLocation: "Found only during active storms. Use Leech bait. Extremely rare — may take many storm sessions to catch one.",
  },
  {
    id: "f21", name: "Islehopper (Stone) — Common", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 50, maxBase: 75,
    notes: "Raw: 50g | Cooked: 75g | Trophy Cooked: 190g",
    findLocation: "Found near the shores of large islands. No bait required. Fish in shallow water close to the island's edge.",
  },
  {
    id: "f22", name: "Islehopper (Amethyst) — Rare", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1000, maxBase: 1500,
    notes: "Raw: 1,000g | Cooked: 1,500g | Trophy Cooked: 3,750g",
    findLocation: "Found near the shores of large islands. No bait required. Very rare.",
  },
  {
    id: "f23", name: "Pondie (Charcoal) — Common", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 50, maxBase: 75,
    notes: "Raw: 50g | Cooked: 75g | Trophy Cooked: 190g",
    findLocation: "Found ONLY in freshwater ponds on islands — not in the ocean. Use Earthworm bait. Look for inland ponds on larger islands.",
  },
  {
    id: "f24", name: "Pondie (Moonsky) — Rare", category: "Fish", bestCompany: "Hunter's Call",
    minBase: 1000, maxBase: 1500,
    notes: "Raw: 1,000g | Cooked: 1,500g | Trophy Cooked: 3,750g | Only catchable at night.",
    findLocation: "Found ONLY in freshwater ponds on islands, and only at night. Use Earthworm bait. Very rare.",
  },

  // ─── MEAT ─────────────────────────────────────────────────────────────────
  {
    id: "m1", name: "Chicken Meat (Cooked)", category: "Meat", bestCompany: "Hunter's Call",
    minBase: 10, maxBase: null, fixedValue: true,
    notes: "Meat cannot be sold raw — must be cooked on a ship's stove first.",
    findLocation: "Kill chickens on islands, then cook the raw meat on your ship's stove. Chickens are found on most larger islands.",
  },
  {
    id: "m2", name: "Pork (Cooked)", category: "Meat", bestCompany: "Hunter's Call",
    minBase: 10, maxBase: null, fixedValue: true,
    notes: "Meat cannot be sold raw — must be cooked on a ship's stove first.",
    findLocation: "Kill pigs on islands, then cook on your ship's stove. Pigs are found on most larger islands and are noisy — they may attract attention.",
  },
  {
    id: "m3", name: "Snake Meat (Cooked)", category: "Meat", bestCompany: "Hunter's Call",
    minBase: 10, maxBase: null, fixedValue: true,
    notes: "Meat cannot be sold raw — must be cooked on a ship's stove first.",
    findLocation: "Kill snakes on islands, then cook on your ship's stove. Snakes are found on most larger islands — they'll attack if you get too close.",
  },
  {
    id: "m4", name: "Shark Meat (Cooked)", category: "Meat", bestCompany: "Hunter's Call",
    minBase: 25, maxBase: null, fixedValue: true,
    notes: "Meat cannot be sold raw — must be cooked on a ship's stove first.",
    findLocation: "Kill sharks that spawn in open water — they'll attack players swimming near ships. Use a sword or pistol. Cook on ship's stove before selling.",
  },
  {
    id: "m5", name: "Megalodon Meat (Cooked)", category: "Meat", bestCompany: "Hunter's Call",
    minBase: 150, maxBase: null, fixedValue: true,
    notes: "Cooked only. Equivalent Hunter's Call value to a Trophy Fish.",
    findLocation: "Kill any Megalodon world event boss (The Shrouded Ghost, Hungering One, etc.). Megalodons spawn randomly and attack ships in open water. Multiple meat pieces drop per kill. Cook before selling.",
  },
  {
    id: "m6", name: "Kraken Meat (Cooked)", category: "Meat", bestCompany: "Hunter's Call",
    minBase: 150, maxBase: null, fixedValue: true,
    notes: "Cooked only. Equivalent Hunter's Call value to a Trophy Fish.",
    findLocation: "Harvest from Kraken tentacles during a Kraken world event. The Kraken spawns randomly in open water and attacks your ship. Each tentacle you defeat may drop meat. Cook before selling.",
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
    notes: "Sell to any company except Athena's Fortune.",
    findLocation: "Dropped by Sirens and Eel-ectric Ocean Crawlers. Also found in Siren Shrines and Siren Treasuries. Used as keys to unlock the Siren Treasury vault door — you can sell them instead if not using them.",
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
    findLocation: "Dropped by Crab Ocean Crawlers. Also found in the deepest parts of Siren Treasuries. The rarest Siren Gem.",
  },

  // ─── ATHENA'S FORTUNE ─────────────────────────────────────────────────────
  {
    id: "at3", name: "Box of Wondrous Secrets", category: "Artifacts", bestCompany: "Athena's Fortune",
    minBase: 25000, maxBase: null, fixedValue: true,
    findLocation: "Extremely rare reward from Athena's Fortune Legendary Voyages. Also found in the Fort of the Damned vault on rare occasions. Requires Pirate Legend status.",
  },
  {
    id: "at4", name: "Skull of Siren Song", category: "Artifacts", bestCompany: "Athena's Fortune",
    minBase: 10000, maxBase: 15000,
    findLocation: "Obtained from Athena's Fortune Legendary Voyages. Requires Pirate Legend status to purchase the voyage.",
  },
  {
    id: "at5", name: "Chalice of Ancient Tributes", category: "Artifacts", bestCompany: "Athena's Fortune",
    minBase: 6000, maxBase: 9000,
    findLocation: "Obtained from Athena's Fortune Legendary Voyages. Requires Pirate Legend status.",
  },
  {
    id: "at6", name: "Keg of Ancient Black Powder", category: "Artifacts", bestCompany: "Athena's Fortune",
    minBase: 3000, maxBase: 5000,
    notes: "Explosive — glows green. Do not drop or shoot it.",
    findLocation: "Obtained from Athena's Fortune Legendary Voyages. Requires Pirate Legend status. Handle with extreme care — it explodes on impact.",
  },
  {
    id: "at7", name: "Gilded Relic of Ancient Fortune", category: "Artifacts", bestCompany: "Athena's Fortune",
    minBase: 1400, maxBase: 1550,
    findLocation: "Found inside Collector's Chests obtained through Athena's Fortune Legendary Voyages.",
  },
  {
    id: "at8", name: "Villainous Skull of Ancient Fortune", category: "Artifacts", bestCompany: "Athena's Fortune",
    minBase: 1400, maxBase: 1550,
    findLocation: "Found inside Collector's Chests from Athena's Fortune Legendary Voyages, or as a rare drop during legendary quests.",
  },
  {
    id: "at9", name: "Orb of Secrets", category: "Artifacts", bestCompany: "Any",
    minBase: 20000, maxBase: null, fixedValue: true,
    notes: "Cannot be sold to Athena's Fortune.",
    findLocation: "Found in the Temple Crypt beneath Skeleton Camps. Solve the Constellation Puzzle on the Spinning Stones above the crypt door (find and trace 3 constellations), then defeat the Obsidian Skeleton waves to access the crypt. The Orb sits on an altar inside.",
  },

  // ─── GOLD HOARDERS ARTEFACTS ──────────────────────────────────────────────
  {
    id: "ar1", name: "Enchanted Lantern", category: "Artifacts", bestCompany: "Gold Hoarders",
    minBase: 800, maxBase: 1500,
    findLocation: "Found as rewards from Gold Hoarders Riddle Map voyages and X Marks the Spot maps. Also occasionally found in Shipwrecks and Collector's Chests.",
  },
  {
    id: "ar2", name: "Ancient Vase", category: "Artifacts", bestCompany: "Gold Hoarders",
    minBase: 1200, maxBase: 2400,
    findLocation: "Found as rewards from Gold Hoarders Riddle Map voyages. Also found in Shipwrecks and Collector's Chests.",
  },
  {
    id: "ar3", name: "Jar of Dirt", category: "Artifacts", bestCompany: "Gold Hoarders",
    minBase: 500, maxBase: 1000,
    findLocation: "Found as rewards from Gold Hoarders voyages, in Shipwrecks, and inside Collector's Chests. Also dropped by certain skeleton encounters.",
  },
  {
    id: "ar4", name: "Totem", category: "Artifacts", bestCompany: "Gold Hoarders",
    minBase: 150, maxBase: 300,
    findLocation: "Found buried on islands via X Marks the Spot and Riddle Maps. Also found in Shipwrecks. Totems are also used to unlock Treasure Vault doors — if you're not using it, sell it.",
  },
  {
    id: "ar5", name: "Relic", category: "Artifacts", bestCompany: "Gold Hoarders",
    minBase: 2000, maxBase: 4000,
    findLocation: "Found as rewards from Gold Hoarders Riddle Maps and Wayfinder Voyages. Also found inside Collector's Chests and occasionally in Shipwrecks.",
  },
  {
    id: "ar6", name: "Trinket", category: "Artifacts", bestCompany: "Gold Hoarders",
    minBase: 100, maxBase: 500,
    notes: "Found inside Collector's Chests.",
    findLocation: "Found inside Collector's Chests — open one up and search the contents. Collector's Chests are the reward at the end of Riddle Map voyages.",
  },
  {
    id: "ar7", name: "Breath of the Sea", category: "Artifacts", bestCompany: "Gold Hoarders",
    minBase: 2000, maxBase: 4000,
    findLocation: "Found exclusively inside Siren Treasuries — the large underwater vault structures. Complete the Siren Gem puzzle to open the vault and claim the Breath of the Sea from within.",
  },

  // ─── VAULT KEYS ───────────────────────────────────────────────────────────
  {
    id: "vk1", name: "Stone Treasure Vault Key", category: "Vault", bestCompany: "Gold Hoarders",
    minBase: 1200, maxBase: null, fixedValue: true,
    findLocation: "Obtained from Gold Hoarders Wayfinder Voyages (Pirate tier). The voyage is a multi-step quest that concludes with a key. Use it to open a Treasure Vault on a nearby island — or sell it directly to Gold Hoarders if you don't want to run the vault.",
  },
  {
    id: "vk2", name: "Gold Treasure Vault Key", category: "Vault", bestCompany: "Gold Hoarders",
    minBase: 3500, maxBase: null, fixedValue: true,
    findLocation: "Obtained from Gold Hoarders Wayfinder Voyages (Captain tier — higher-level version). Opens a more valuable vault. Sell directly to Gold Hoarders if not running the vault.",
  },

  // ─── REAPER'S BONES ───────────────────────────────────────────────────────
  {
    id: "r1", name: "Reaper's Chest", category: "Bounty", bestCompany: "Reaper's Bones",
    minBase: 5000, maxBase: 12000,
    notes: "ONLY sell to the Masked Stranger at The Reaper's Hideout.",
    findLocation: "Spawns randomly on islands across the sea — it glows red and can be seen from a distance. Also found in Skeleton Fort Vaults. The location of all active Reaper's Chests is visible to all crews on the map, making them high-risk targets.",
  },
  {
    id: "r2", name: "Reaper's Bounty", category: "Bounty", bestCompany: "Reaper's Bones",
    minBase: 10000, maxBase: 20000,
    notes: "ONLY sell to the Masked Stranger at The Reaper's Hideout.",
    findLocation: "Spawns randomly on islands — glows gold and is visible to all crews on the map, making it extremely contested. Much rarer than the Reaper's Chest. Sail quickly to The Reaper's Hideout to sell before another crew steals it.",
  },
  {
    id: "r3", name: "Reaper's Chest of Legend", category: "Bounty", bestCompany: "Reaper's Bones",
    minBase: 20000, maxBase: 35000,
    notes: "Rare high-value Reaper's Bones exclusive.",
    findLocation: "Extremely rare world spawn — appears on islands like the standard Reaper's Chest but is much harder to find. Also occasionally found in Fort of the Damned vaults. Visible to all crews on the map.",
  },

  // ─── BILGE RATS / DOUBLOON ITEMS ──────────────────────────────────────────
  {
    id: "br1", name: "Ashen Key", category: "Other", bestCompany: "Bilge Rats",
    minBase: 0, maxBase: null, fixedValue: true, doubloons: true,
    notes: "5 Doubloons (Bilge Rats) or 10 Doubloons + Rep (Reaper's Bones). Used to unlock Ashen Chests.",
    findLocation: "Dropped by Ashen Skeleton Key Masters in the Devil's Roar. These captains carry keys on their belts and can be spotted by their glowing appearance. Also found in Ashen voyages and occasionally in Devil's Roar Shipwrecks.",
  },
  {
    id: "br2", name: "Ashen Chest (Locked)", category: "Other", bestCompany: "Bilge Rats",
    minBase: 0, maxBase: null, fixedValue: true, doubloons: true,
    notes: "5 Doubloons to Bilge Rats or Reaper's Bones. Unlock with an Ashen Key to access the 3 Ashen Tomes inside.",
    findLocation: "Found buried on Devil's Roar islands via X Marks the Spot and Riddle Maps, or dropped by enemies during Ashen voyages. Always contains 3 Ashen Tomes when unlocked.",
  },
];
