import { cn } from '@/lib/utils';
import React from 'react';

// Need to create lib/utils.ts for cn utility first? 
// Actually I can just write it inline or create the file.
// I'll assume I should create lib/utils.ts as well since I installed clsx tailwind-merge.

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'outline' | 'secondary' | 'accent';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
    const variants = {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'text-foreground border border-border hover:bg-secondary/50',
        accent: 'bg-accent text-accent-foreground hover:bg-accent/80',
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        />
    );
}
