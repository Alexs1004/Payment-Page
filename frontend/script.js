const countries = [
	"Afrique du Sud",
	"Algérie",
	"Allemagne",
	"Andorre",
	"Anguilla",
	"Antarctique",
	"Antigua-et-Barbuda",
	"Arabie Saoudite",
	"Argentine",
	"Arménie",
	"Aruba",
	"Australie",
	"Autriche",
	"Azerbaïdjan",
	"Bahamas",
	"Bahreïn",
	"Bangladesh",
	"Barbade",
	"Bélarus",
	"Belgique",
	"Belize",
	"Bénin",
	"Bermudes",
	"Bhoutan",
	"Bolivie",
	"Bosnie-Herzégovine",
	"Botswana",
	"Brésil",
	"Brunéi Darussalam",
	"Bulgarie",
	"Burkina Faso",
	"Burundi",
	"Cambodge",
	"Cameroun",
	"Canada",
	"Cap-vert",
	"Chili",
	"Chine",
	"Chypre",
	"Colombie",
	"Comores",
	"Costa Rica",
	"Côte d'Ivoire",
	"Croatie",
	"Cuba",
	"Curaçao",
	"Danemark",
	"Djibouti",
	"Dominique",
	"Égypte",
	"El Salvador",
	"Émirats Arabes Unis",
	"Équateur",
	"Érythrée",
	"Espagne",
	"Estonie",
	"États Fédérés de Micronésie",
	"Éthiopie",
	"Fédération de Russie",
	"Fidji",
	"Finlande",
	"France métropolitaine",
	"Gabon",
	"Gambie",
	"Géorgie",
	"Géorgie du Sud et les Îles Sandwich du Sud",
	"Ghana",
	"Gibraltar",
	"Grèce",
	"Grenade",
	"Groenland",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinée",
	"Guinée Équatoriale",
	"Guinée-Bissau",
	"Guyana",
	"Guyane Française",
	"Haïti",
	"Honduras",
	"Hong-Kong",
	"Hongrie",
	"Île Bouvet",
	"Île Christmas",
	"Île de Man",
	"Île Norfolk",
	"Îles (malvinas) Falkland",
	"Îles Åland",
	"Îles Caïmanes",
	"Îles Canaries",
	"Îles Cocos (Keeling)",
	"Îles Cook",
	"Îles Féroé",
	"Îles Heard et Mcdonald",
	"Îles Mariannes du Nord",
	"Îles Marshall",
	"Îles Mineures Éloignées des États-Unis",
	"Îles Salomon",
	"Îles Turks et Caïques",
	"Îles Vierges Britanniques",
	"Îles Vierges des États-Unis",
	"Inde",
	"Indonésie",
	"Irlande",
	"Islande",
	"Italie",
	"Jamahiriya Arabe Libyenne",
	"Jamaïque",
	"Japon",
	"Jersey",
	"Jordanie",
	"Kazakhstan",
	"Kenya",
	"Kirghizistan",
	"Kiribati",
	"Koweït",
	"L'ex-République Yougoslave de Macédoine",
	"Lesotho",
	"Lettonie",
	"Liban",
	"Libéria",
	"Liechtenstein",
	"Lituanie",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malaisie",
	"Malawi",
	"Maldives",
	"Mali",
	"Malte",
	"Maroc",
	"Martinique",
	"Maurice",
	"Mauritanie",
	"Mayotte",
	"Mexique",
	"Monaco",
	"Mongolie",
	"Monténégro",
	"Montserrat",
	"Mozambique",
	"Myanmar",
	"Namibie",
	"Nauru",
	"Népal",
	"Nicaragua",
	"Niger",
	"Nigéria",
	"Niué",
	"Norvège",
	"Nouvelle-Calédonie",
	"Nouvelle-Zélande",
	"Oman",
	"Ouganda",
	"Ouzbékistan",
	"Pakistan",
	"Palaos",
	"Panama",
	"Papouasie-Nouvelle-Guinée",
	"Paraguay",
	"Pays-Bas",
	"Pays-Bas caribéens",
	"Pérou",
	"Philippines",
	"Pitcairn",
	"Pologne",
	"Polynésie Française",
	"Porto Rico",
	"Portugal",
	"Qatar",
	"République Centrafricaine",
	"République de Corée",
	"République de Moldova",
	"République de Serbie",
	"République Démocratique du Congo",
	"République Démocratique Populaire Lao",
	"République Dominicaine",
	"République du Congo",
	"République Islamique d'Iran",
	"République Tchèque",
	"République-Unie de Tanzanie",
	"Réunion",
	"Roumanie",
	"Royaume-Uni",
	"Rwanda",
	"Sahara Occidental",
	"Saint-Barthélemy",
	"Saint-Kitts-et-Nevis",
	"Saint-Marin",
	"Saint-Martin",
	"Saint-Pierre-et-Miquelon",
	"Saint-Siège (état de la Cité du Vatican)",
	"Saint-Vincent-et-les Grenadines",
	"Sainte-Hélène",
	"Sainte-Lucie",
	"Samoa",
	"Samoa Américaines",
	"Sao Tomé-et-Principe",
	"Sénégal",
	"Seychelles",
	"Sierra Leone",
	"Singapour",
	"Sint Maarten",
	"Slovaquie",
	"Slovénie",
	"Somalie",
	"Soudan",
	"Soudan du Sud",
	"Sri Lanka",
	"Suède",
	"Suriname",
	"Svalbard et Île Jan Mayen",
	"Swaziland",
	"Tadjikistan",
	"Taïwan",
	"Tchad",
	"Terres Australes Françaises",
	"Territoire Britannique de l'Océan Indien",
	"Territoire Palestinien Occupé",
	"Thaïlande",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinité-et-Tobago",
	"Tunisie",
	"Turkménistan",
	"Turquie",
	"Tuvalu",
	"Ukraine",
	"Uruguay",
	"Vanuatu",
	"Venezuela",
	"Viet Nam",
	"Wallis et Futuna",
	"Yémen",
	"Zambie",
	"Zimbabwe"
];

const dropdown = document.getElementById("paysDropdown");

countries.forEach(country => {
    const option = document.createElement("option");
    option.text = country;
    dropdown.add(option);
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});


// // Fonction pour générer dynamiquement la modal avec le contenu HTML
// const generateModalContent = () => {
//     const modalContent = `
//         <div class="modal-dialog modal-dialog-centered">
//             <div class="modal-content">
//                 <div class="modal-header">
//                     <h5 class="modal-title">Formulaire de paiement</h5>
//                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div class="modal-body">
//                     <!-- Insérez ici le contenu HTML du formulaire -->
//                     <div class="col-lg-6">
//                         <!-- Votre code HTML ici -->
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;
//     return modalContent;
// };

// //Vérifie si le client a un walletID et affiche ou non, une modal en conséquence
// // Vérifie si le client a un walletId
// const hasWalletId = (/* placez ici la logique pour vérifier si le client a un walletId */) => {
//     // Remplacez cette ligne par la logique réelle pour vérifier si le client a un walletId
//     return true; // Par exemple, retourne true si le client a un walletId, sinon false
// };
// // Fonction pour afficher la modal lorsque le client a un walletId
// const displayModal = () => {


//     if (hasWalletId) {
//         const modalContent = generateModalContent();
//         const modalContainer = document.createElement('div');
//         modalContainer.innerHTML = modalContent;
//         document.body.appendChild(modalContainer);

//         const modal = new bootstrap.Modal(modalContainer.querySelector('.modal'));
//         modal.show();
//     }
// };

// // Ajoutez un événement pour déclencher l'affichage de la modal
// window.addEventListener('DOMContentLoaded', () => {
//     displayModal();
// });
