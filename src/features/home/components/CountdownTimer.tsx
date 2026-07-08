import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

function formatPart(value: number): string {
  return value.toString().padStart(2, '0');
}

function calcRemain(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 };
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [time, setTime] = useState(() => calcRemain(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTime(calcRemain(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const parts = [
    formatPart(time.hours),
    formatPart(time.minutes),
    formatPart(time.seconds),
  ];

  return (
    <div className="flex items-center gap-1 font-mono">
      {parts.map((part, i) => (
        <span key={i} className="flex items-center gap-1">
          <span className="grid h-7 min-w-7 place-items-center rounded-lg bg-gray-900/90 px-1.5 text-sm font-bold text-white shadow-inner ring-1 ring-white/10">
            {part}
          </span>
          {i < parts.length - 1 && <span className="font-bold text-white">:</span>}
        </span>
      ))}
    </div>
  );
}
