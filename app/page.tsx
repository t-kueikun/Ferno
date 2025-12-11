'use client';

import { useState, useMemo } from 'react';
import { TALENTS } from '@/lib/data';
import { Talent, SortOption } from '@/lib/types';
import { Header } from '@/components/Header';
import { Filters } from '@/components/Filters';
import { Insights } from '@/components/Insights';
import { TalentCard } from '@/components/TalentCard';

export default function Home() {
  const talents = TALENTS;

  // Filter States
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [minPotential, setMinPotential] = useState(80);
  const [sort, setSort] = useState<SortOption>('potential_desc');

  const filteredAndSortedTalents = useMemo(() => {
    let result = [...talents];

    // Filter
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.region.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q)) ||
        t.skills.some(s => s.category.toLowerCase().includes(q))
      );
    }

    if (region) {
      result = result.filter(t => t.region === region);
    }

    if (category) {
      result = result.filter(t => t.skills.some(s => s.category === category));
    }

    if (minPotential > 0) {
      result = result.filter(t => t.potential >= minPotential);
    }

    // Sort
    result.sort((a, b) => {
      switch (sort) {
        case 'potential_desc':
          return b.potential - a.potential;
        case 'skill_desc':
          const maxSkillA = Math.max(...a.skills.map(s => s.level));
          const maxSkillB = Math.max(...b.skills.map(s => s.level));
          return maxSkillB - maxSkillA;
        case 'recent_achievement':
          // Mock logic: prioritize those with achievement
          if (a.lastAchievement && !b.lastAchievement) return -1;
          if (!a.lastAchievement && b.lastAchievement) return 1;
          return 0;
        default:
          return 0;
      }
    });

    return result;
  }, [talents, search, region, category, minPotential, sort]);

  const handleClear = () => {
    setSearch('');
    setRegion(null);
    setCategory(null);
    setMinPotential(0); // Reset to 0? Or 80? User requested 80 as initial.
    // Spec says "Reset". Usually resets to defaults.
    // Requirement said: "最低潜在力（0–100、初期値80）"
    // I'll reset to 80.
    setMinPotential(80);
    setSort('potential_desc');
  };

  return (
    <main className="min-h-screen pb-20">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Filters
          search={search}
          onSearchChange={setSearch}
          region={region}
          onRegionChange={setRegion}
          category={category}
          onCategoryChange={setCategory}
          minPotential={minPotential}
          onMinPotentialChange={setMinPotential}
          sort={sort}
          onSortChange={setSort}
          onClear={handleClear}
        />

        <div className="my-8 h-px bg-white/10" />

        <Insights talents={filteredAndSortedTalents} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredAndSortedTalents.map(talent => (
            <TalentCard key={talent.id} talent={talent} />
          ))}
        </div>

        {filteredAndSortedTalents.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            条件に一致するタレントが見つかりませんでした。
          </div>
        )}
      </div>

      <footer className="mt-20 py-8 border-t border-white/5 text-center text-sm text-muted-foreground">
        <p>データは架空です。将来はAPIに差し替え可能な設計です。</p>
        <p className="mt-2 text-xs opacity-50">© 2025 Ferno Concept MVP</p>
      </footer>
    </main>
  );
}
