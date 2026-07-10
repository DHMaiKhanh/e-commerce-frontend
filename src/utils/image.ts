const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f1f2f4'/%3E%3Cpath d='M140 260l45-60 35 40 40-55 60 75H140z' fill='%23d7dade'/%3E%3Ccircle cx='170' cy='150' r='22' fill='%23d7dade'/%3E%3C/svg%3E";

export function handleImageError(event: React.SyntheticEvent<HTMLImageElement>) {
  const img = event.currentTarget;
  if (img.src === FALLBACK_IMAGE) return;
  img.src = FALLBACK_IMAGE;
  img.alt = '';
}
