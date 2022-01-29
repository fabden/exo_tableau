// fonction top 5 film

export default function top5Film(data) {
  const triFromDif = data.sort((a, b) => (b.nb_diffusion - a.nb_diffusion))
    .slice(0, 5)
    .map((e) => (e.nom));
  return triFromDif;
}
