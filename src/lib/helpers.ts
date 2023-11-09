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

export function formatDate(timestamp: any) {
  return new Date(timestamp).toLocaleDateString('tr-TR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}