export function generateSlug(title: string) {
  const slug = title
  .toLowerCase()
  .replace(/ğ/g, "g")
  .replace(/ü/g, "u")
  .replace(/ş/g, "s")
  .replace(/ı/g, "i")
  .replace(/ö/g, "o")
  .replace(/ç/g, "c")
  .replace(/[^\w\s-]/g, "")
  .replace(/\s+/g, "-")
  .replace(/^-+/g, "")
  .replace(/-+$/g, "");

  return slug;
}

const months = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustost', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
];

export function formatDate(date: any) {
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}