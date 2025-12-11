import React from 'react';

export function Header() {
    return (
        <header className="pt-8 pb-8 border-b border-border bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                        <span>tokuei's Team</span>
                        <span className="text-zinc-600">/</span>
                        <span className="text-foreground">Ferno</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Talent Pool
                    </h1>
                </div>
            </div>
        </header>
    );
}
