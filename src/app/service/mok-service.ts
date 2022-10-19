import { Service } from './service';
  
export const SERVICES: Service[] = [
    {
        id: 1,
        name: "Assurance Sante",
        hp: 25,
        cp: 5,
        picture:  "https://img.freepik.com/photos-gratuite/idee-concept-politique-assurance-vie-maladie-finances-assurance_1421-87.jpg?w=1060&t=st=1666260481~exp=1666261081~hmac=d809c476aea6ae9295d22cfb258f7cb071b8644864c0166b976b608a0f58fa55",
        types: ["Adultes", "Enfant"],
        created: new Date()
    },
    {
        id: 2,
        name: "Assurance Vie",
        hp: 28,
        cp: 6,
        picture: "https://img.freepik.com/vecteurs-libre/icones-assurance-risque_1284-14606.jpg?w=740&t=st=1666260618~exp=1666261218~hmac=fd0ee31132354ce20455e6a81d65653a0c74d6243b8745f46180a54e499834f1",
        types: ["Tous"],
        created: new Date()
    },
    {
        id: 3,
        name: "Assurance Auto",
        hp: 21,
        cp: 4,
        picture: "http://www.infisoftware.net/fr/img/logo/logo.png",
        types: ["Automobilistes"],
        created: new Date()
    },
    {
        id: 4,
        name: "Assurance Immobilier",
        hp: 16,
        cp: 2,
        picture: "https://img.freepik.com/photos-gratuite/mains-agent-du-client-qui-se-serrent-main-apres-contrat-signe-achetent-nouvel-appartement_1150-14836.jpg?w=1060&t=st=1666260868~exp=1666261468~hmac=72e0bb0891a5e211ce077924150bcf789df37b8a8f8bb32b8bf9212370d56e33",
        types: ["Proprietaire", "Entreprise"],
        created: new Date()
    },
    {
        id: 5,
        name: "Assurance Etude",
        hp: 30,
        cp: 7,
        picture: "https://img.freepik.com/photos-gratuite/jeune-homme-affaires-noir-salon-automobile-concept-vente-location-voitures_146671-18395.jpg?w=1060&t=st=1666260752~exp=1666261352~hmac=8cb1f19a785b9559ac03bb73a90fe1671de53dd7eb900a6f9fd0d8f1c946cd12",
        types: ["Eleve", "Etudiant"],
        created: new Date()
    },
    {
        id: 6,
        name: "Assurance Voyage",
        hp: 18,
        cp: 6,
        picture: "https://img.freepik.com/photos-gratuite/elegante-femme-noire-dans-salon-automobile_1157-21421.jpg?w=1060&t=st=1666260826~exp=1666261426~hmac=885a5a1e24c357368dfab1b262fe45f707e8881ee8fbdd86f106b3afee5e7245",
        types: ["Tous"],
        created: new Date()
    },
    {
        id: 7,
        name: "Assurance Retraite",
        hp: 14,
        cp: 5,
        picture: "https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-asiatique-signe-papier-maison-maison-mur-couleur_74190-16026.jpg?w=1060&t=st=1666261134~exp=1666261734~hmac=1bad75a0c8806aa1beccf48f34b235a436470dd1f8099e9743db80c83c3c6de5",
        types: ["Public", "Prive"],
        created: new Date()
    },
    {
        id: 8,
        name: "Assurance Moto",
        hp: 16,
        cp: 4,
        picture: "https://img.freepik.com/psd-gratuit/modeles-affiches-psd-pour-assurance-habitation-automobile_53876-140316.jpg?w=1060&t=st=1666260972~exp=1666261572~hmac=b744e913829464473bfd804951376c9a1e9eab94010770cce86549ff204a65b5",
        types: ["Motocycliste"],
        created: new Date()
    },
    {
        id: 9,
        name: "Assurance Employe",
        hp: 21,
        cp: 7,
        picture: "https://img.freepik.com/photos-gratuite/couple-age-mur-rencontrant-directeur-banque-communiquant-lui-lors-consultations-au-bureau_637285-1188.jpg?w=1060&t=st=1666261193~exp=1666261793~hmac=367732619ff36b339efa8e813cfeb1a3f85219312125a3b631b660e6188a5aa4",
        types: ["Personnel"],
        created: new Date()
    },
    {
        id: 10,
        name: "Assurance Sinistre",
        hp: 19,
        cp: 3,
        picture: "https://img.freepik.com/photos-gratuite/lay-plat-du-concept-immobilier_53876-41711.jpg?w=1060&t=st=1666261227~exp=1666261827~hmac=bd3b5cd620c61f75064b4468a9f97a26e45e5b563aa4daaf1884108478ea4af0",
        types: ["Tous"],
        created: new Date()
    },
    {
        id: 11,
        name: "Assurance Invalidite",
        hp: 25,
        cp: 5,
        picture: "https://www.spvie.com/sites/default/files/logo_SPVIE_blanccartouchenoir_0.png",
        types: ["Tous"],
        created: new Date()
    },
    {
        id: 12,
        name: "Assurance Collective",
        hp: 17,
        cp: 8,
        picture: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        types: ["Tous"],
        created: new Date()
    }
];
