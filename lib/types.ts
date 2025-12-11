export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
    category: string;
    level: SkillLevel;
}

export interface Talent {
    id: string;
    name: string;
    age: number;
    region: string;
    potential: number; // 0-100
    skills: Skill[];
    tags: string[];
    lastAchievement?: string;
    avatarInitial: string;
}

export type SortOption = 'potential_desc' | 'skill_desc' | 'recent_achievement';

export interface FilterState {
    search: string;
    region: string | null;
    skillCategory: string | null;
    minPotential: number;
    sort: SortOption;
}
