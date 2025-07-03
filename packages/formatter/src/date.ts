export function formatDate(
  date: string | Date,
  format: string = "YYYY-MM-DD"
): string {
  const d = typeof date === "string" ? new Date(date) : date;

  const yyyy = d.getFullYear().toString();
  const mm = (d.getMonth() + 1).toString().padStart(2, "0");
  const dd = d.getDate().toString().padStart(2, "0");
  const hh = d.getHours().toString().padStart(2, "0");
  const min = d.getMinutes().toString().padStart(2, "0");
  const ss = d.getSeconds().toString().padStart(2, "0");

  return format
    .replace(/YYYY/g, yyyy)
    .replace(/MM/g, mm)
    .replace(/DD/g, dd)
    .replace(/HH/g, hh)
    .replace(/mm/g, min)
    .replace(/ss/g, ss);
}
