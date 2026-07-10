import { Link } from 'react-router-dom';

import { cn } from '@utils/cn';

interface SectionHeaderProps {
  title: string;
  viewAllHref?: string;
  className?: string;
  accent?: boolean;
  rightSlot?: React.ReactNode;
}

export function SectionHeader({
  title,
  viewAllHref,
  className,
  accent,
  rightSlot,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between border-b border-white/40 bg-white/40 px-4 py-4 backdrop-blur-xl sm:px-5',
        className,
      )}
    >
      <h2 className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-gray-800">
        {accent && (
          <span className="h-6 w-1.5 rounded-full bg-brand-gradient shadow-glow" />
        )}
        <span className={cn(accent && 'bg-brand-gradient bg-clip-text text-transparent')}>
          {title}
        </span>
      </h2>
      <div className="flex items-center gap-3">
        {rightSlot}
        {viewAllHref && (
          <Link
            to={viewAllHref}
            className="rounded-full px-3 py-1 text-sm font-medium text-brand-500 transition hover:bg-white/60 hover:text-brand-600"
          >
            Xem tất cả ›
          </Link>
        )}
      </div>
    </div>
  );
}
