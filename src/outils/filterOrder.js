/// /fonction de trie test

export default function filterOrder(typeTri, data) {
  /* tri est un objet {croissante: true/false, decroisante:true/false, colone }

    */
  switch (typeTri) {
    case 'croissantAnneeProduction':
      return data.sort((a, b) => (a.annee_production - b.annee_production));

    case 'decroissantAnneeProduction':
      return data.sort((a, b) => (b.annee_production - a.annee_production));

    case 'decroissantderniereDiffusion':
      return data.sort((a, b) => (b.derniere_diffusion - a.derniere_diffusion));

    case 'croissantderniereDiffusion':
      return data.sort((a, b) => (a.derniere_diffusion - b.derniere_diffusion));

    default: return data;
  }
}
