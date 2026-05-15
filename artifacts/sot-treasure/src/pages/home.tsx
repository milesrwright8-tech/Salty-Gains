import { useState, useMemo } from "react";
import { treasureData, TreasureCategory, Company } from "@/data/treasure";
import { Search, ChevronDown, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const MULTIPLIERS: [number, string][] = [
  [1.0,  "Grade I"],
  [1.33, "Grade II"],
  [1.66, "Grade III"],
  [2.0,  "Grade IV"],
  [2.5,  "Grade V"],
];

const COMPANY_COLORS: Record<string, string> = {
  "Gold Hoarders":     "border-yellow-500/60 text-yellow-300 bg-yellow-900/30",
  "Order of Souls":    "border-purple-500/60 text-purple-300 bg-purple-900/30",
  "Merchant Alliance": "border-blue-500/60 text-blue-300 bg-blue-900/30",
  "Reaper's Bones":    "border-red-500/60 text-red-300 bg-red-900/30",
  "Athena's Fortune":  "border-cyan-500/60 text-cyan-300 bg-cyan-900/30",
  "Hunter's Call":     "border-green-500/60 text-green-300 bg-green-900/30",
  "Bilge Rats":        "border-orange-500/60 text-orange-300 bg-orange-900/30",
  "Any":               "border-slate-500/60 text-slate-300 bg-slate-800/40",
};

const ALL_COMPANIES: Company[] = [
  "Gold Hoarders", "Order of Souls", "Merchant Alliance",
  "Reaper's Bones", "Athena's Fortune", "Hunter's Call", "Bilge Rats",
];

const fmt   = (n: number) => Math.round(n).toLocaleString();
const range = (item: ReturnType<typeof treasureData[0]["id"] extends string ? typeof treasureData[number] : never>, mult: number): string => {
  if (item.doubloons) return item.notes?.match(/\d+ Doubloon[s]?/)?.[0] ?? "Doubloons";
  if (item.maxBase)   return `${fmt(item.minBase * mult)} – ${fmt(item.maxBase * mult)} g`;
  return `${fmt(item.minBase * mult)} g`;
};

type Item = typeof treasureData[number];

function TreasureRow({ item, index }: { item: Item; index: number }) {
  const [open, setOpen] = useState(false);

  const baseVal = item.doubloons
    ? item.notes?.match(/\d+ Doubloon[s]?/)?.[0] ?? "Doubloons"
    : item.maxBase
      ? `${fmt(item.minBase)} – ${fmt(item.maxBase)} g`
      : `${fmt(item.minBase)} g`;

  const gradeVVal = item.doubloons
    ? null
    : item.maxBase
      ? `${fmt(item.minBase * 2.5)} – ${fmt(item.maxBase * 2.5)} g`
      : `${fmt(item.minBase * 2.5)} g`;

  return (
    <div
      className={`border-b border-border/50 transition-colors ${index % 2 === 0 ? "bg-card" : "bg-background/40"}`}
      data-testid={`row-treasure-${item.id}`}
    >
      {/* ── Collapsed row ── */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/40 transition-colors text-left group"
        data-testid={`button-expand-${item.id}`}
        aria-expanded={open}
      >
        {/* Chevron */}
        <span className="flex-shrink-0 text-muted-foreground group-hover:text-foreground transition-colors">
          {open
            ? <ChevronDown className="h-4 w-4" />
            : <ChevronRight className="h-4 w-4" />}
        </span>

        {/* Name + category */}
        <div className="flex-1 min-w-0">
          <span className="font-medium text-foreground text-sm leading-snug" data-testid={`text-name-${item.id}`}>
            {item.name}
          </span>
          <span className="ml-2 text-xs text-muted-foreground">{item.category}</span>
        </div>

        {/* Company badge */}
        <Badge
          variant="outline"
          data-testid={`badge-company-${item.id}`}
          className={`flex-shrink-0 text-xs font-normal py-0.5 hidden sm:inline-flex ${COMPANY_COLORS[item.bestCompany] ?? ""}`}
        >
          {item.bestCompany}
        </Badge>

        {/* Base value */}
        <div className="flex-shrink-0 text-right min-w-[110px]">
          <span className="text-sm text-muted-foreground tabular-nums" data-testid={`text-base-${item.id}`}>
            {baseVal}
          </span>
          {gradeVVal && (
            <span className="block text-xs text-primary/70 tabular-nums leading-tight">
              G V: {gradeVVal}
            </span>
          )}
        </div>
      </button>

      {/* ── Expanded panel ── */}
      {open && (
        <div className="px-4 pb-4 pt-1 border-t border-border/30 bg-muted/20">
          <div className="ml-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Emissary grades */}
            {!item.doubloons && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Emissary Grade Value
                </p>
                <div className="space-y-1">
                  {MULTIPLIERS.map(([mult, label], i) => (
                    <div key={label} className="flex items-center justify-between text-sm">
                      <span className={`${i === 4 ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                        {label}
                        <span className="ml-1 text-xs opacity-60">({mult}×)</span>
                      </span>
                      <span
                        className={`tabular-nums ${i === 4 ? "text-primary font-bold" : "text-foreground"}`}
                        data-testid={`text-grade-${i + 1}-${item.id}`}
                      >
                        {range(item as any, mult)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {item.doubloons && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Reward
                </p>
                <p className="text-sm text-orange-400">
                  {item.notes?.match(/\d+ Doubloon[s]?/)?.[0] ?? "Doubloons"} — emissary grades do not apply to doubloon items
                </p>
              </div>
            )}

            {/* Where to find / sell */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Where to Sell
              </p>
              <p className="text-sm text-foreground mb-3">
                {item.bestCompany === "Any"
                  ? "Sells to most Trading Companies — Gold Hoarders, Order of Souls, Merchant Alliance, Hunter's Call, or Reaper's Bones."
                  : item.bestCompany === "Bilge Rats"
                    ? "Sell to the Bilge Rats representative at any Outpost, or to Reaper's Bones for extra reputation."
                    : `Sell to ${item.bestCompany} representatives at any Outpost${item.bestCompany === "Athena's Fortune" ? " (Mysterious Stranger in any Tavern)" : ""}.${item.bestCompany !== "Reaper's Bones" ? " Reaper's Bones also accepts this item." : ""}`}
              </p>

              {item.notes && (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Notes
                  </p>
                  <p className="text-sm text-muted-foreground leading-snug">{item.notes}</p>
                </>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

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

  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col">

      {/* ── Header ── */}
      <header className="w-full border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row sm:items-end gap-1 justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-tight">
                Sea of Thieves — Treasure Ledger
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Click any item to expand emissary grade values and selling details.
                Emissary Grade V always gives <span className="text-primary font-medium">2.5×</span> the base value.
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
                placeholder="Search treasure..."
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
                <SelectItem value="base">Sort by Value (High → Low)</SelectItem>
                <SelectItem value="name">Sort by Name (A → Z)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      {/* ── List ── */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-2 md:px-6 py-4">
        <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden">

          {/* Column headers (collapsed state labels) */}
          <div className="flex items-center gap-3 px-4 py-2 bg-secondary/80 text-xs uppercase tracking-widest text-secondary-foreground border-b border-border">
            <span className="w-4 flex-shrink-0" />
            <span className="flex-1">Item / Category</span>
            <span className="flex-shrink-0 hidden sm:block w-36">Best Company</span>
            <span className="flex-shrink-0 text-right min-w-[110px]">Base &amp; Grade V</span>
          </div>

          {filteredData.length === 0 ? (
            <div className="px-4 py-12 text-center text-muted-foreground italic">
              No treasure matches your search, Captain.
            </div>
          ) : (
            filteredData.map((item, i) => (
              <TreasureRow key={item.id} item={item} index={i} />
            ))
          )}
        </div>

        {/* Footer note */}
        <p className="mt-3 text-xs text-muted-foreground text-center">
          Multipliers: Grade I = 1.0× · Grade II = 1.33× · Grade III = 1.66× · Grade IV = 2.0× · Grade V = 2.5× &nbsp;|&nbsp;
          Reaper's Bones emissary applies to all treasure types.
        </p>
      </main>
    </div>
  );
}
