import { Service } from './service';


  
export const SERVICES: Service[] = [
    {
        id: 0,
        name: "Assurance Sante",
        hp: 25,
        cp: 5,
        picture: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        // picture: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        types: ["Adultes", "Enfant"],
        created: new Date()
    },
    {
        id: 1,
        name: "Assurance Sante",
        hp: 25,
        cp: 5,
        // picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcnlvc.ci%2F2018%2F05%2F16%2Framadan-et-sante-ce-quil-faut-savoir%2Fsante%2F&psig=AOvVaw1Xq7rO4JRkqZfY45jruA6H&ust=1666112015711000&source=images&cd=vfe&ved=2ahUKEwjiuYuI3ef6AhUJhxoKHc5GB_QQr4kDegUIARDcAQ",
        picture: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        types: ["Adultes", "Enfant"],
        created: new Date()
    },
    {
        id: 2,
        name: "Assurance Vie",
        hp: 28,
        cp: 6,
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa1%2FL%2527arbre_de_Vie_par_Rapha%25C3%25ABl_Toussaint.jpg&imgrefurl=https%3A%2F%2Ffr.wikiquote.org%2Fwiki%2FVie&tbnid=eNpwqBh0uVuoXM&vet=12ahUKEwi3ybS13ef6AhUQKhoKHQnDD5gQMygEegUIARDkAQ..i&docid=fYhuv01W2tqFuM&w=526&h=747&q=vie&client=ubuntu&ved=2ahUKEwi3ybS13ef6AhUQKhoKHQnDD5gQMygEegUIARDkAQ",
        types: ["Tous"],
        created: new Date()
    },
    {
        id: 3,
        name: "Assurance Auto",
        hp: 21,
        cp: 4,
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.automotives.ci%2Fimages%2Fservices%2Fs6%2F4.jpg&imgrefurl=https%3A%2F%2Fwww.automotives.ci%2Fassurances.php&tbnid=iAf7F0iQX8NlQM&vet=12ahUKEwji-Pvy3ef6AhUEZxoKHSF-CuYQMygDegUIARDPAQ..i&docid=QslxlsBeoghQCM&w=2500&h=1200&q=assurance%20automobile&client=ubuntu&ved=2ahUKEwji-Pvy3ef6AhUEZxoKHSF-CuYQMygDegUIARDPAQ",
        types: ["Automobilistes"],
        created: new Date()
    },
    {
        id: 4,
        name: "Assurance Immobilier",
        hp: 16,
        cp: 2,
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.moneyvox.fr%2Fi%2Fmedia%2F05i%2F005854ib4d.jpg&imgrefurl=https%3A%2F%2Fwww.moneyvox.fr%2Fcredit%2Fassurance-emprunteur.php&tbnid=wWzh0XMj2_SJaM&vet=12ahUKEwiTg7qI3uf6AhUJdRoKHV4_D9wQMygDegUIARDiAQ..i&docid=28j4hfQILMT6gM&w=740&h=555&q=assurance%20immobilier&client=ubuntu&ved=2ahUKEwiTg7qI3uf6AhUJdRoKHV4_D9wQMygDegUIARDiAQ",
        types: ["Proprietaire", "Entreprise"],
        created: new Date()
    },
    {
        id: 5,
        name: "Assurance Etude",
        hp: 30,
        cp: 7,
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.gatvie.com.tn%2Fsites%2Fdefault%2Ffiles%2Finline-images%2Faaaa_0.jpg&imgrefurl=https%3A%2F%2Fwww.gatvie.com.tn%2Fparticulier%2Fassurance-les-etudes-de-vos-enfants&tbnid=yk6TGAu3sYzibM&vet=12ahUKEwiT05Wg3uf6AhUCexoKHZumD74QMygIegUIARC6AQ..i&docid=0FDvl71d2rhZIM&w=1200&h=1378&q=assurance%20etude&client=ubuntu&ved=2ahUKEwiT05Wg3uf6AhUCexoKHZumD74QMygIegUIARC6AQ",
        types: ["Eleve", "Etudiant"],
        created: new Date()
    },
    {
        id: 6,
        name: "Assurance Voyage",
        hp: 18,
        cp: 6,
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bons-plans-voyage-floride.com%2Fwordpress%2Fwp-content%2Fuploads%2F2019%2F11%2Fassurance-voyage-3.jpg&imgrefurl=https%3A%2F%2Fwww.bons-plans-voyage-floride.com%2Fprendre-assurance-voyage-avant-partir-floride%2F&tbnid=ht-p0p-RjFQ9yM&vet=12ahUKEwjB2YS23uf6AhUCGRoKHYwnA98QMygDegUIARDbAQ..i&docid=UY_Bqzel4ilEqM&w=346&h=346&q=assurance%20voyage&client=ubuntu&ved=2ahUKEwjB2YS23uf6AhUCGRoKHYwnA98QMygDegUIARDbAQ",
        types: ["Tous"],
        created: new Date()
    },
    {
        id: 7,
        name: "Assurance Retraite",
        hp: 14,
        cp: 5,
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.allianz.ci%2Fprofessionnel---entreprise%2Fprotection-de-votre-capital-humain%2Faz-retraite-entreprise%2F_jcr_content%2Froot%2Fstage%2Fstageimage.img.82.3360.jpeg%2F1564684472574%2Faz-retraite-entreprise.jpeg&imgrefurl=https%3A%2F%2Fwww.allianz.ci%2Fprofessionnel---entreprise%2Fprotection-de-votre-capital-humain%2Faz-retraite-entreprise.html&tbnid=zSW7OJu5smhezM&vet=12ahUKEwjt4vrJ3uf6AhUHUhoKHUTsBF4QMyguegUIARCvAg..i&docid=h3pPWU-K1hBQuM&w=1903&h=510&q=assurance%20retraite&client=ubuntu&ved=2ahUKEwjt4vrJ3uf6AhUHUhoKHUTsBF4QMyguegUIARCvAg",
        types: ["Public", "Prive"],
        created: new Date()
    },
    {
        id: 8,
        name: "Assurance Moto",
        hp: 16,
        cp: 4,
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fassurances-voiture.org%2Fwp-content%2Fuploads%2Fassurance-moto.png&imgrefurl=https%3A%2F%2Fassurances-voiture.org%2Ftypes%2Fmoto%2F&tbnid=vOzhLeKLegvEQM&vet=12ahUKEwjaktnz3uf6AhURLRoKHWYpA_gQMygDegUIARDNAQ..i&docid=u-l37vGhtbiJHM&w=283&h=152&q=assurance%20moto&client=ubuntu&ved=2ahUKEwjaktnz3uf6AhURLRoKHWYpA_gQMygDegUIARDNAQ",
        types: ["Motocycliste"],
        created: new Date()
    },
    {
        id: 9,
        name: "Assurance Employe",
        hp: 21,
        cp: 7,
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fti%2Fvecteur-libre%2Ft1%2F675733-employe-blesse-avec-bequilles-et-entreprise-offrant-une-assurance-contre-les-reclamations-vectoriel.jpg&imgrefurl=https%3A%2F%2Ffr.vecteezy.com%2Fart-vectoriel%2F675733-employe-blesse-avec-bequilles-et-entreprise-offrant-une-assurance-contre-les-reclamations&tbnid=9xufV4NIvJFWlM&vet=12ahUKEwjfs_CH3-f6AhUW7xoKHZd3CFUQMygKegUIARDpAQ..i&docid=4C8_vdDn0EnePM&w=566&h=400&itg=1&q=assurance%20employe&client=ubuntu&ved=2ahUKEwjfs_CH3-f6AhUW7xoKHZd3CFUQMygKegUIARDpAQ",
        types: ["Personnel"],
        created: new Date()
    },
    {
        id: 10,
        name: "Assurance Sinistre",
        hp: 19,
        cp: 3,
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flmr-assur.com%2Fwp-content%2Fuploads%2F2020%2F07%2FComment-Limiter-Les-Risques-De-Sinistre-En-Assurances-Habitation.jpg&imgrefurl=https%3A%2F%2Flmr-assur.com%2Fcomment-limiter-les-risques-de-sinistre-en-assurances-habitation%2F&tbnid=JjHxjwEwcQumhM&vet=12ahUKEwjL6J-b3-f6AhUI-BoKHUDDAg8QMygCegUIARDDAQ..i&docid=Hk4VcCGMzKTnFM&w=800&h=372&q=assurance%20sinistre&client=ubuntu&ved=2ahUKEwjL6J-b3-f6AhUI-BoKHUDDAg8QMygCegUIARDDAQ",
        types: ["Tous"],
        created: new Date()
    },
    {
        id: 11,
        name: "Assurance Invalidite",
        hp: 25,
        cp: 5,
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D104957761453114&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FGroupeEntraideAI%2F&tbnid=04xIg9XnMGJ_iM&vet=12ahUKEwjBvrys3-f6AhVO4oUKHemjBYEQMygBegUIARDIAQ..i&docid=dP6w2jwEj6x2jM&w=1200&h=1200&q=assurance%20invalidit%C3%A9&client=ubuntu&ved=2ahUKEwjBvrys3-f6AhVO4oUKHemjBYEQMygBegUIARDIAQ",
        types: ["Tous"],
        created: new Date()
    },
    {
        id: 12,
        name: "Assurance Collective",
        hp: 17,
        cp: 8,
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flautorite.qc.ca%2Ffileadmin%2F_processed_%2Ff%2F9%2Fcsm_assurances-collectives_faee81e1ac.jpg&imgrefurl=https%3A%2F%2Flautorite.qc.ca%2Fgrand-public%2Fassurance%2Fassurances-collectives&tbnid=OyQHsChchOqRIM&vet=12ahUKEwjg6f_G3-f6AhUOUhoKHZMMAbMQMygBegUIARC6AQ..i&docid=dIcsAz0vLmdKzM&w=300&h=199&q=assurance%20collective&client=ubuntu&ved=2ahUKEwjg6f_G3-f6AhUOUhoKHZMMAbMQMygBegUIARC6AQ",
        types: ["Tous"],
        created: new Date()
    }
];
