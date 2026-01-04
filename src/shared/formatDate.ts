export function formatDate(date: string | number | Date) {
  return new Date(date).toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
