export function formatDate(dateValue: string): string {
  return new Date(dateValue).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
