import recherchefiltre from '../outils/RechercheFiltre';

// donnée de test

const datas = [{
    "nom": "KIRIKOU ET LES BETES SAUVAGES",
    "realisateur": "OCELOT Michel / GALUP Bénédicte",
    "annee_production": 2004,
    "nationalite": "France",
    "derniere_diffusion": 2019,
    "nb_diffusion": 43,
    "nb_premiere_partie": 18,
    "moyenne_diffusion_par_an": 4.8
 },
 {
    "nom": "DELPHINE 1, YVAN 0",
    "realisateur": "FARRUGIA Dominique",
    "annee_production": 1996,
    "nationalite": "France",
    "derniere_diffusion": 2019,
    "nb_diffusion": 38,
    "nb_premiere_partie": 1,
    "moyenne_diffusion_par_an": 4.2
 },
 {
    "nom": "KIRIKOU ET LA SORCIERE",
    "realisateur": "OCELOT Michel",
    "annee_production": 1995,
    "nationalite": "France",
    "derniere_diffusion": 2019,
    "nb_diffusion": 36,
    "nb_premiere_partie": 20,
    "moyenne_diffusion_par_an": 4
 }]

//debut des tests



describe('test module recherche filtre',()=>{
    it('pas de recherche', ()=>{
        const resulta =  recherchefiltre('','','',datas)
        expect(resulta).toStrictEqual([...datas])

    })
    it('recherchce par film ',()=>{
       const resulta =  recherchefiltre('DEL','','',datas)
       expect(resulta).toStrictEqual([datas[1]])
    })

    it('recherchce par realisateur ',()=>{
        const resulta =  recherchefiltre('','GA','',datas)
        expect(resulta).toStrictEqual([datas[0]])
        
    })

    it('recherchce par nationalité',()=>{
        const resulta =  recherchefiltre('','','France',datas)
        expect(resulta).toStrictEqual([...datas])
        
    })

})