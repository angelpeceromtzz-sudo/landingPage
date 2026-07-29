export function desplazarA(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function obtenerUrlEmbedYoutube(url) {
  if (!url) return null;
  const patrones = [
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtu\.be\/)([^?]+)/,
    /(?:youtube\.com\/embed\/)([^?]+)/,
  ];
  for (const p of patrones) {
    const m = url.match(p);
    if (m) return `https://www.youtube.com/embed/${m[1]}`;
  }
  return null;
}
