// Top 5 des films les plus diffusés

export default function top5Film(data) {
  const triFromDif = data.sort((a, b) => (b.nb_diffusion - a.nb_diffusion))
    .slice(0, 5)
    .map((e) => (e.nom));
  return triFromDif;
}
