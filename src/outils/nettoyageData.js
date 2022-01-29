// fonction de nettoyage

export default function cleardata(datasBrut) {
  const clearData = datasBrut.map((e) => {
    const debutDecoupe = e.nom.indexOf('(') + 1;
    const finDecoupe = e.nom.indexOf(')');
    const motsDebut = e.nom.slice(debutDecoupe, finDecoupe);
    if (e.nom.includes('(')) {
      return { ...e, nom: `${motsDebut} `.concat(e.nom.substring(0, debutDecoupe - 1)) };
    }

    return e;
  });

  return clearData;
}
