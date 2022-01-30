import nettoyageData from '../outils/nettoyageData';


describe('test module nettoyage data',()=>{

    it('verifie si les parentheses sont supprimer et ', ()=>{
        const resultat = nettoyageData([{nom:"ok (les)"},{nom:'test entre (par)'},{nom:'sans par'}])
        expect(resultat[0].nom).not.toMatch(/[(*?)]/)
    })

    it('verifie si la fonction renvoi un tableau',()=>{
        const resultat = nettoyageData([{nom:"ok (les)"},{nom:'test entre (par)'},{nom:'sans par'}])
        expect(resultat).toStrictEqual([ { nom: 'les ok ' }, { nom: 'par test entre ' }, { nom: 'sans par' } ])
    });
}) 

