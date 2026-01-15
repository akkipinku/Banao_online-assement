import React from 'react';
import { cn } from '../../lib/utils';

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <div className={cn("rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-sm", className)}>
            {children}
        </div>
    );
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn("flex flex-col space-y-1.5 pb-4", className)}>{children}</div>;
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
    return <h3 className={cn("text-lg font-semibold leading-none tracking-tight text-zinc-100", className)}>{children}</h3>;
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn("pt-0", className)}>{children}</div>;
}
