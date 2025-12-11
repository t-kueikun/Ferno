import { REGIONS, SKILL_CATEGORIES } from '@/lib/data';
import { SortOption } from '@/lib/types';
import { Search, RotateCcw, ListFilter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FiltersProps {
    search: string;
    onSearchChange: (value: string) => void;
    region: string | null;
    onRegionChange: (value: string | null) => void;
    category: string | null;
    onCategoryChange: (value: string | null) => void;
    minPotential: number;
    onMinPotentialChange: (value: number) => void;
    sort: SortOption;
    onSortChange: (value: SortOption) => void;
    onClear: () => void;
}

export function Filters({
    search,
    onSearchChange,
    region,
    onRegionChange,
    category,
    onCategoryChange,
    minPotential,
    onMinPotentialChange,
    sort,
    onSortChange,
    onClear
}: FiltersProps) {
    return (
        <div className="mb-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
                {/* Search Input */}
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search for talents..."
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full h-10 rounded-md border border-border bg-background px-9 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors"
                    />
                </div>

                {/* Controls Group */}
                <div className="flex flex-wrap items-center gap-3">
                    {/* Region Select */}
                    <div className="relative">
                        <select
                            value={region || ''}
                            onChange={(e) => onRegionChange(e.target.value || null)}
                            className="h-9 appearance-none rounded-md border border-border bg-background pl-3 pr-8 text-sm text-foreground focus:border-foreground focus:outline-none hover:border-zinc-400 transition-colors cursor-pointer"
                        >
                            <option value="">All Regions</option>
                            {REGIONS.map((r) => (
                                <option key={r} value={r}>{r}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2">
                            <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>

                    {/* Category Select */}
                    <div className="relative">
                        <select
                            value={category || ''}
                            onChange={(e) => onCategoryChange(e.target.value || null)}
                            className="h-9 appearance-none rounded-md border border-border bg-background pl-3 pr-8 text-sm text-foreground focus:border-foreground focus:outline-none hover:border-zinc-400 transition-colors cursor-pointer"
                        >
                            <option value="">All Skills</option>
                            {SKILL_CATEGORIES.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2">
                            <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>

                    {/* Sort Dropdown (Custom UI Simulation) */}
                    <div className="flex items-center border border-border rounded-md divide-x divide-border overflow-hidden">
                        <button
                            onClick={() => onSortChange('potential_desc')}
                            className={cn("px-3 py-1.5 text-xs font-medium hover:bg-secondary transition-colors", sort === 'potential_desc' ? "bg-secondary text-foreground" : "text-muted-foreground")}
                        >
                            Score
                        </button>
                        <button
                            onClick={() => onSortChange('skill_desc')}
                            className={cn("px-3 py-1.5 text-xs font-medium hover:bg-secondary transition-colors", sort === 'skill_desc' ? "bg-secondary text-foreground" : "text-muted-foreground")}
                        >
                            Skill
                        </button>
                    </div>

                    {/* Clear */}
                    {(region || category || search) && (
                        <button
                            onClick={onClear}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Reset
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
