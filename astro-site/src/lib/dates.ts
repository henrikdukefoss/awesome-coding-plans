export function latestPlanUpdate(updatedDates: string[]): string {
  return updatedDates.filter((d) => d !== "").sort().at(-1) ?? "";
}

export function formatLong(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function formatShort(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
    timeZone: "UTC",
  });
}
