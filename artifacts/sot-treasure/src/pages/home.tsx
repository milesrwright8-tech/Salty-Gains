import React, { useState, useMemo } from "react";
import { treasureData, TreasureCategory, Company } from "@/data/treasure";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [company, setCompany] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"name" | "base">("base");

  const filteredData = useMemo(() => {
    let result = treasureData;

    if (search) {
      result = result.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category !== "All") {
      result = result.filter(item => item.category === category);
    }

    if (company !== "All") {
      result = result.filter(item => item.bestCompany === company || item.bestCompany === "Any");
    }

    result.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else {
        const midA = a.maxBase ? (a.minBase + a.maxBase) / 2 : a.minBase;
        const midB = b.maxBase ? (b.minBase + b.maxBase) / 2 : b.minBase;
        return midB - midA;
      }
    });

    return result;
  }, [search, category, company, sortBy]);

  const multipliers = [1.0, 1.33, 1.66, 2.0, 2.5];

  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col items-center">
      <header className="w-full border-b border-border bg-card p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-primary mb-2">Sea of Thieves Treasure Guide</h1>
            <p className="text-muted-foreground text-sm max-w-2xl">
              A comprehensive ledger of all valuable commodities found upon the Sea of Thieves. 
              Note: Reaper's Bones accepts all items and multiplies them similarly at Grade V. 
              Hunter's Call fish values assume varying states of cooking and trophy status.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search treasure..." 
                className="pl-9 bg-background border-border"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="Chests">Chests</SelectItem>
                <SelectItem value="Skulls">Skulls</SelectItem>
                <SelectItem value="Crates">Crates</SelectItem>
                <SelectItem value="Fish">Fish</SelectItem>
                <SelectItem value="Gems">Gems</SelectItem>
                <SelectItem value="Artifacts">Artifacts</SelectItem>
                <SelectItem value="Bounty">Bounty</SelectItem>
              </SelectContent>
            </Select>

            <Select value={company} onValueChange={setCompany}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Companies</SelectItem>
                <SelectItem value="Gold Hoarders">Gold Hoarders</SelectItem>
                <SelectItem value="Order of Souls">Order of Souls</SelectItem>
                <SelectItem value="Merchant Alliance">Merchant Alliance</SelectItem>
                <SelectItem value="Reaper's Bones">Reaper's Bones</SelectItem>
                <SelectItem value="Athena's Fortune">Athena's Fortune</SelectItem>
                <SelectItem value="Hunter's Call">Hunter's Call</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={(v: any) => setSortBy(v)}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="base">Sort by Value</SelectItem>
                <SelectItem value="name">Sort by Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto p-4 md:p-6 overflow-x-auto">
        <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-secondary text-secondary-foreground border-b border-border">
              <tr>
                <th className="px-4 py-3">Item</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Best Company</th>
                <th className="px-4 py-3 text-right">Base Value</th>
                <th className="px-4 py-3 text-right">Grade I</th>
                <th className="px-4 py-3 text-right">Grade II</th>
                <th className="px-4 py-3 text-right">Grade III</th>
                <th className="px-4 py-3 text-right">Grade IV</th>
                <th className="px-4 py-3 text-right text-primary">Grade V</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredData.map(item => {
                const formatVal = (v: number) => Math.round(v).toLocaleString();
                const formatRange = (mult: number) => {
                  if (item.maxBase) {
                    return `${formatVal(item.minBase * mult)} - ${formatVal(item.maxBase * mult)}`;
                  }
                  return formatVal(item.minBase * mult);
                };

                return (
                  <tr key={item.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-foreground">
                      {item.name}
                      {item.notes && <p className="text-xs text-muted-foreground font-normal mt-0.5">{item.notes}</p>}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{item.category}</td>
                    <td className="px-4 py-3">
                      <Badge variant="outline" className="border-primary/50 text-primary-foreground bg-primary/20">
                        {item.bestCompany}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{formatRange(1)}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{formatRange(multipliers[0])}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{formatRange(multipliers[1])}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{formatRange(multipliers[2])}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{formatRange(multipliers[3])}</td>
                    <td className="px-4 py-3 text-right font-bold text-primary">{formatRange(multipliers[4])}</td>
                  </tr>
                );
              })}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-4 py-8 text-center text-muted-foreground">
                    No treasure matches your criteria, Captain.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
