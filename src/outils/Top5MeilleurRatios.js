// Top 5 des films avec le meilleur ratio
// “Nombre de diffusion en 1ère partie / Nombre de diffusion total”

export default function top5MeilleurRatio(data) {
  const calRatio = data.map((e) => {
    const cRatio = e.nb_premiere_partie / e.nb_diffusion;
    return {
      ...e, ratio: cRatio,
    };
  }).sort((a, b) => (b.ratio - a.ratio)).slice(0, 5).map((e) => (e.nom));

  return calRatio;
}
