import { Talent } from '@/lib/types';
import { Zap, Users, Award } from 'lucide-react';

interface InsightsProps {
    talents: Talent[];
}

export function Insights({ talents }: InsightsProps) {
    const count = talents.length;
    const avgPotential = count > 0
        ? Math.round(talents.reduce((sum, t) => sum + t.potential, 0) / count)
        : 0;

    // Calculate top skill categories
    const categoryCounts: Record<string, number> = {};
    talents.forEach(t => {
        t.skills.forEach(s => {
            categoryCounts[s.category] = (categoryCounts[s.category] || 0) + 1;
        });
    });

    const topCategories = Object.entries(categoryCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([cat]) => cat);

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-8">
            <div className="rounded-lg border border-border bg-card p-4 flex items-center gap-4 shadow-sm">
                <div className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-md text-blue-600 dark:text-blue-400">
                    <Users className="h-5 w-5" />
                </div>
                <div>
                    <p className="text-sm text-zinc-500 font-medium">表示中</p>
                    <p className="text-2xl font-bold tracking-tight text-foreground">{count}<span className="text-sm font-normal text-muted-foreground ml-1">名</span></p>
                </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-4 flex items-center gap-4 shadow-sm">
                <div className="p-2 bg-amber-100 dark:bg-amber-500/20 rounded-md text-amber-600 dark:text-amber-400">
                    <Zap className="h-5 w-5" />
                </div>
                <div>
                    <p className="text-sm text-zinc-500 font-medium">平均潜在力</p>
                    <p className="text-2xl font-bold tracking-tight text-foreground">{avgPotential}</p>
                </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-4 flex items-center gap-4 shadow-sm">
                <div className="p-2 bg-purple-100 dark:bg-purple-500/20 rounded-md text-purple-600 dark:text-purple-400">
                    <Award className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm text-zinc-500 font-medium mb-1.5">トップスキル分布</p>
                    <div className="flex flex-wrap gap-1.5">
                        {topCategories.map(cat => (
                            <span key={cat} className="text-[10px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border whitespace-nowrap font-medium">
                                {cat}
                            </span>
                        ))}
                        {topCategories.length === 0 && <span className="text-sm text-muted-foreground">-</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}
