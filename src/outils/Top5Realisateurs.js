import getUniqueValeur from './getUniqueVal';

// Top 5 des réalisateurs avec la meilleur moyenne de diffusion
// (Somme des moyennes de diffusion par an du réalisateur / nombre de film)

export default function top5Realisateur(data) {
  const uniqueUser = data.map((item) => {
    const diviseItem = item.realisateur.split('/');
    return diviseItem;
  }).flat().filter(getUniqueValeur);

  const addMoyendiffusionRealisateur = uniqueUser.map((user) => {
    const recupRealisaeurPM = data.filter((item) => item.realisateur
      .includes(user));
    const AdditionMoyenneDiffusion = recupRealisaeurPM
      .reduce((a, b) => (a + b.moyenne_diffusion_par_an), 0);
    return {
      realisateur: user,
      additionMoyenne: AdditionMoyenneDiffusion,
    };
  });

  const moyennefilmRealisateur = addMoyendiffusionRealisateur.map((e) => {
    const moyenne = e.additionMoyenne / data.length;
    return {
      realisateur: e.realisateur,
      moyenne,
    };
  });
  const top5realisateurs = moyennefilmRealisateur
    .sort((a, b) => (b.moyenne - a.moyenne))
    .slice(0, 5)
    .map((e) => (e.realisateur));

  return top5realisateurs;
}
