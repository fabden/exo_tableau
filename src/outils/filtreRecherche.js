// fonction filtre generique pour les recherches

export default function recherchefiltre(film, realisateur, nationalite, datas) {
  return datas
    .filter((item) => (item.nom.toUpperCase()
      .includes(film.toUpperCase()) && item.realisateur.toUpperCase()
      .includes(realisateur.toUpperCase()) && item.nationalite.toUpperCase()
      .includes(nationalite.toUpperCase())));
}
