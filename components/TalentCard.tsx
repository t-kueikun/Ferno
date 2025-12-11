import { Talent } from '@/lib/types';
import { GitBranch, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TalentCardProps {
    talent: Talent;
}

export function TalentCard({ talent }: TalentCardProps) {
    return (
        <div className="group flex flex-col justify-between rounded-lg border border-border bg-card p-0 transition-all duration-200 hover:border-foreground/50">

            {/* Card Body */}
            <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        {/* Avatar: Simple gradient circle or initial */}
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-tr from-zinc-100 to-zinc-200 border border-border text-sm font-medium text-foreground">
                            {talent.avatarInitial}
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-foreground leading-tight">
                                {talent.name}
                            </h3>
                            <p className="text-sm text-zinc-500 mt-0.5 font-mono">
                                {talent.region}
                            </p>
                        </div>
                    </div>

                    <div className="text-right">
                        <div className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-2.5 py-0.5 text-xs font-bold font-mono">
                            {talent.potential}
                        </div>
                    </div>
                </div>

                {/* Skills - Minimalist Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                    {talent.skills.slice(0, 3).map((skill) => (
                        <span key={skill.category} className="inline-flex items-center rounded-md border border-border bg-secondary/30 px-2 py-1 text-[11px] font-medium text-zinc-400">
                            {skill.category}
                        </span>
                    ))}
                    {talent.skills.length > 3 && (
                        <span className="inline-flex items-center rounded-md border border-border bg-secondary/30 px-2 py-1 text-[11px] font-medium text-zinc-400">
                            +{talent.skills.length - 3}
                        </span>
                    )}
                </div>
            </div>

            {/* Card Footer - Like 'Last commit' section */}
            {talent.lastAchievement && (
                <div className="border-t border-border bg-zinc-50 px-5 py-3 rounded-b-lg">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <GitBranch className="h-3.5 w-3.5" />
                        <span className="truncate max-w-full font-mono">{talent.lastAchievement}</span>
                    </div>
                </div>
            )}
        </div>
    );
}
