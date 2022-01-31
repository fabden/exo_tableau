//import fonction a tester 
import Top5Films from '../outils/Top5Films'

const datas= [   {
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
 },
 {
    "nom": "DEUX HEURES MOINS LE QUART AVANT JESUS-CHRIST",
    "realisateur": "YANNE Jean",
    "annee_production": 1982,
    "nationalite": "France",
    "derniere_diffusion": 2019,
    "nb_diffusion": 33,
    "nb_premiere_partie": 22,
    "moyenne_diffusion_par_an": 3.7
 },
 {
    "nom": "NIKITA",
    "realisateur": "BESSON Luc",
    "annee_production": 1989,
    "nationalite": "France",
    "derniere_diffusion": 2019,
    "nb_diffusion": 33,
    "nb_premiere_partie": 24,
    "moyenne_diffusion_par_an": 3.7
 },
 {
    "nom": "11 COMMANDEMENTS (LES)",
    "realisateur": "DESAGNAT François / SORRIAUX Thomas",
    "annee_production": 2003,
    "nationalite": "France",
    "derniere_diffusion": 2018,
    "nb_diffusion": 32,
    "nb_premiere_partie": 26,
    "moyenne_diffusion_par_an": 4
 },
 {
    "nom": "ASTERIX ET LA SURPRISE DE CESAR",
    "realisateur": "BRIZZI Gaëtan / BRIZZI Paul",
    "annee_production": 1985,
    "nationalite": "France",
    "derniere_diffusion": 2019,
    "nb_diffusion": 32,
    "nb_premiere_partie": 31,
    "moyenne_diffusion_par_an": 4
 },]

describe("Test mosdule top 5 film",()=>{
    it('Est-ce que je recois les 5 premiers film en fonction du nombre de diffusion', ()=>{
       const resultat = Top5Films(datas);
       const resultatAttendu = [
        'KIRIKOU ET LES BETES SAUVAGES',
        'DELPHINE 1, YVAN 0',
        'KIRIKOU ET LA SORCIERE',
        'DEUX HEURES MOINS LE QUART AVANT JESUS-CHRIST',
        'NIKITA'
      ]      
       expect(resultat).toEqual(resultatAttendu)
            



})

})