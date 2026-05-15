import { useState, useMemo } from "react";
import { treasureData, TreasureCategory, Company } from "@/data/treasure";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const MULTIPLIERS = [1.0, 1.33, 1.66, 2.0, 2.5] as const;

const COMPANY_COLORS: Record<string, string> = {
  "Gold Hoarders":     "border-yellow-500/60 text-yellow-300 bg-yellow-900/30",
  "Order of Souls":    "border-purple-500/60 text-purple-300 bg-purple-900/30",
  "Merchant Alliance": "border-blue-500/60 text-blue-300 bg-blue-900/30",
  "Reaper's Bones":    "border-red-500/60 text-red-300 bg-red-900/30",
  "Athena's Fortune":  "border-cyan-500/60 text-cyan-300 bg-cyan-900/30",
  "Hunter's Call":     "border-green-500/60 text-green-300 bg-green-900/30",
  "Bilge Rats":        "border-orange-500/60 text-orange-300 bg-orange-900/30",
  "Any":               "border-slate-500/60 text-slate-300 bg-slate-800/30",
};

const ALL_CATEGORIES: TreasureCategory[] = [
  "Chests", "Ashen Chests", "Coral Chests",
  "Skulls", "Ashen Skulls", "Coral Skulls",
  "Crates", "Cargo Runs",
  "Fish", "Meat",
  "Gems", "Siren Gems",
  "Artifacts", "Vault", "Bounty", "Other",
];

const ALL_COMPANIES: Company[] = [
  "Gold Hoarders", "Order of Souls", "Merchant Alliance",
  "Reaper's Bones", "Athena's Fortune", "Hunter's Call", "Bilge Rats",
];

const fmt = (n: number) => Math.round(n).toLocaleString();

export default function Home() {
  const [search, setSearch]     = useState("");
  const [category, setCategory] = useState<string>("All");
  const [company, setCompany]   = useState<string>("All");
  const [sortBy, setSortBy]     = useState<"name" | "base">("base");

  const filteredData = useMemo(() => {
    let result = treasureData;

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.bestCompany.toLowerCase().includes(q) ||
        (item.notes ?? "").toLowerCase().includes(q)
      );
    }

    if (category !== "All") {
      result = result.filter(item => item.category === category);
    }

    if (company !== "All") {
      result = result.filter(
        item => item.bestCompany === company || item.bestCompany === "Any"
      );
    }

    return [...result].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      const midA = a.doubloons ? -1 : (a.maxBase ? (a.minBase + a.maxBase) / 2 : a.minBase);
      const midB = b.doubloons ? -1 : (b.maxBase ? (b.minBase + b.maxBase) / 2 : b.minBase);
      return midB - midA;
    });
  }, [search, category, company, sortBy]);

  const renderValue = (item: typeof treasureData[0], mult: number) => {
    if (item.doubloons) {
      return <span className="text-orange-400 font-medium">{item.notes?.match(/\d+ Doubloon/)?.[0] ?? "Doubloons"}</span>;
    }
    if (item.maxBase) {
      return `${fmt(item.minBase * mult)} – ${fmt(item.maxBase * mult)}`;
    }
    return fmt(item.minBase * mult);
  };

  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col">

      {/* Header */}
      <header className="w-full border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10 shadow-lg">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-4 flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row sm:items-end gap-2 justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-tight">
                Sea of Thieves — Treasure Ledger
              </h1>
              <p className="text-xs text-muted-foreground mt-1 max-w-3xl">
                Emissary multipliers: Grade I = 1.0x &nbsp;·&nbsp; Grade II = 1.33x &nbsp;·&nbsp; Grade III = 1.66x &nbsp;·&nbsp; Grade IV = 2.0x &nbsp;·&nbsp; Grade V = 2.5x.
                Reaper's Bones emissary multiplies ALL treasure types. Gifts and Ashen items reward Doubloons, not Gold.
              </p>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap self-end pb-0.5">
              {filteredData.length} items
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="relative col-span-2 lg:col-span-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                data-testid="input-search"
                placeholder="Search by name, company, notes..."
                className="pl-9 bg-background border-border h-9 text-sm"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger data-testid="select-category" className="bg-background h-9 text-sm">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="Chests">Chests (Regular)</SelectItem>
                <SelectItem value="Ashen Chests">Ashen Chests</SelectItem>
                <SelectItem value="Coral Chests">Coral Chests</SelectItem>
                <SelectItem value="Skulls">Skulls (Regular)</SelectItem>
                <SelectItem value="Ashen Skulls">Ashen Skulls</SelectItem>
                <SelectItem value="Coral Skulls">Coral Skulls</SelectItem>
                <SelectItem value="Crates">Trade Good Crates</SelectItem>
                <SelectItem value="Cargo Runs">Cargo Run Crates</SelectItem>
                <SelectItem value="Fish">Fish</SelectItem>
                <SelectItem value="Meat">Meat</SelectItem>
                <SelectItem value="Gems">Mermaid Gems</SelectItem>
                <SelectItem value="Siren Gems">Siren Gems</SelectItem>
                <SelectItem value="Artifacts">Artifacts</SelectItem>
                <SelectItem value="Vault">Vault Keys</SelectItem>
                <SelectItem value="Bounty">Reaper's Bounty</SelectItem>
                <SelectItem value="Other">Other (Doubloon Items)</SelectItem>
              </SelectContent>
            </Select>

            <Select value={company} onValueChange={setCompany}>
              <SelectTrigger data-testid="select-company" className="bg-background h-9 text-sm">
                <SelectValue placeholder="Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Companies</SelectItem>
                {ALL_COMPANIES.map(c => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={(v: any) => setSortBy(v)}>
              <SelectTrigger data-testid="select-sort" className="bg-background h-9 text-sm">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="base">Sort by Value (High to Low)</SelectItem>
                <SelectItem value="name">Sort by Name (A–Z)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      {/* Table */}
      <main className="flex-1 w-full max-w-[1600px] mx-auto px-2 md:px-6 py-4 overflow-x-auto">
        <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden min-w-[900px]">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-secondary/80 text-xs uppercase tracking-widest text-secondary-foreground border-b border-border">
                <th className="px-4 py-3 w-[26%]">Item</th>
                <th className="px-3 py-3 w-[14%]">Category</th>
                <th className="px-3 py-3 w-[14%]">Best Company</th>
                <th className="px-3 py-3 text-right w-[9%]">Base</th>
                <th className="px-3 py-3 text-right w-[7%]">G I</th>
                <th className="px-3 py-3 text-right w-[8%]">G II</th>
                <th className="px-3 py-3 text-right w-[8%]">G III</th>
                <th className="px-3 py-3 text-right w-[8%]">G IV</th>
                <th className="px-3 py-3 text-right w-[8%] text-primary">G V</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, i) => (
                <tr
                  key={item.id}
                  data-testid={`row-treasure-${item.id}`}
                  className={`border-b border-border/50 transition-colors hover:bg-muted/40 ${i % 2 === 0 ? "bg-card" : "bg-background/50"}`}
                >
                  <td className="px-4 py-2.5 font-medium text-foreground leading-snug">
                    <span data-testid={`text-name-${item.id}`}>{item.name}</span>
                    {item.notes && (
                      <p className="text-xs text-muted-foreground font-normal mt-0.5 leading-snug">{item.notes}</p>
                    )}
                  </td>
                  <td className="px-3 py-2.5 text-muted-foreground text-xs">{item.category}</td>
                  <td className="px-3 py-2.5">
                    <Badge
                      variant="outline"
                      data-testid={`badge-company-${item.id}`}
                      className={`text-xs font-normal py-0.5 ${COMPANY_COLORS[item.bestCompany] ?? ""}`}
                    >
                      {item.bestCompany}
                    </Badge>
                  </td>
                  <td className="px-3 py-2.5 text-right text-muted-foreground tabular-nums">
                    {renderValue(item, 1)}
                  </td>
                  {item.doubloons ? (
                    <td colSpan={5} className="px-3 py-2.5 text-center text-xs text-muted-foreground italic">
                      Doubloon reward — emissary grades do not apply
                    </td>
                  ) : (
                    MULTIPLIERS.map((mult, idx) => (
                      <td
                        key={mult}
                        className={`px-3 py-2.5 text-right tabular-nums ${
                          idx === 4
                            ? "font-bold text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {renderValue(item, mult)}
                      </td>
                    ))
                  )}
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-4 py-12 text-center text-muted-foreground italic">
                    No treasure matches your search, Captain.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-4 p-4 bg-card/60 border border-border/50 rounded-lg text-xs text-muted-foreground space-y-1 max-w-3xl">
          <p className="font-semibold text-foreground text-sm mb-2">Notes & Rules</p>
          <p>Reaper's Bones accepts <em>any</em> treasure type — at Emissary Grade V their multiplier (2.5x) applies to everything, making them ideal for items not tied to a specific company.</p>
          <p>Chest of Legends and Ashen Chest of Legends must be sold to the Mysterious Stranger in any Tavern (Athena's Fortune).</p>
          <p>Reaper's Chest and Reaper's Bounty can ONLY be sold to the Masked Stranger at The Reaper's Hideout.</p>
          <p>Coral Treasure is found exclusively in Siren Shrines and Siren Treasuries (underwater).</p>
          <p>Fish values depend on variant rarity, trophy status, and cooking state — column shows raw/cooked range per variant. Cooked always earns more; burnt fish are worth less than raw.</p>
          <p>Cargo Run crates degrade over time and when damaged — keep dry and avoid collisions to preserve full value.</p>
          <p>Gifts and Ashen Keys/Chests reward Doubloons, not Gold. Emissary grade multipliers do not apply to Doubloon items.</p>
        </div>
      </main>
    </div>
  );
}
