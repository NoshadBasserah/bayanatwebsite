export function readingTime(body: string): string {
  if (!body || !body.trim()) return "Quick read";
  const words = body.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 225));
  return `${minutes} min read`;
}
