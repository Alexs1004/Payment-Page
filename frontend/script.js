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

// Récupérer tous les champs input
const inputs = document.querySelectorAll('input');

// Parcourir chaque champ input
inputs.forEach(input => {
  // Ajouter un écouteur d'événement pour détecter les changements de valeur
  input.addEventListener('input', function() {
    // Récupérer le nom de l'input
    const inputName = input.getAttribute('id');
    // Vérifier si un élément avec le même ID existe dans le formulaire de livraison
    const deliveryInput = document.querySelector(`#delivery-form-container input[id="${inputName}"]`);
    // Si un champ input correspondant est trouvé dans le formulaire de livraison, mettre à jour sa valeur
    if (deliveryInput) {
      deliveryInput.value = input.value;
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var qteBtn = document.querySelector('.qte-btn');
    qteBtn.addEventListener('click', function() {
        var qteModal = new bootstrap.Modal(document.getElementById('qteModal'), {
            backdrop: 'static',
            keyboard: false
        });
        qteModal.show();

        // Défiler jusqu'en bas de la page
        window.scrollTo(0, document.body.scrollHeight);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('invalidCheck_checked');
    const deliveryFormContainer = document.getElementById('delivery-form-container');
    const cgCheckbox = document.getElementById("cg_checkbox");

    if (checkbox && deliveryFormContainer) {
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                deliveryFormContainer.classList.add('d-none');
            } else {
                deliveryFormContainer.classList.remove('d-none');
            }
        });
    } else {
        console.error('L\'élément checkbox ou delivery-form-container est introuvable.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('form');
	const modal = document.querySelector('.modal');

	form.addEventListener('submit', function (event) {
	  event.preventDefault(); // Prevent form submission

	  // Display the modal
	  modal.classList.add('show');
	  modal.style.display = 'block';

	  // Optional: You can also remove the modal after a certain time
	  setTimeout(function () {
		modal.classList.remove('show');
		modal.style.display = 'none';
	  }, 500000000); // Adjust the time as needed
	});
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



// Fonction pour afficher le bloc SEPA et masquer le bloc Carte de crédit
function showSEPA() {
    document.getElementById('sepaBlock').style.display = 'block';
    document.getElementById('creditCardBlock').style.display = 'none';
}

// Fonction pour afficher le bloc Carte de crédit et masquer le bloc SEPA
function showCreditCard() {
    document.getElementById('sepaBlock').style.display = 'none';
    document.getElementById('creditCardBlock').style.display = 'block';
}

// Ajout d'événements pour détecter les changements de sélection du bouton de bascule
document.getElementById('btnradio1').addEventListener('change', function() {
    if (this.checked) {
        showSEPA();
    }
});

document.getElementById('btnradio2').addEventListener('change', function() {
    if (this.checked) {
        showCreditCard();
    }
});

// Affichage initial en fonction de la sélection par défaut
if (document.getElementById('btnradio1').checked) {
    showSEPA();
} else {
    showCreditCard();
}



document.addEventListener('DOMContentLoaded', function() {
    var incrementButtons = document.querySelectorAll('.input-number-increment');
    var decrementButtons = document.querySelectorAll('.input-number-decrement');

    incrementButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var input = this.closest('.input-number-group').querySelector('.input-number');
            var val = parseInt(input.value, 10);
            if (val < 20) {
                input.value = val + 1;
            }
        });
    });

    decrementButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var input = this.closest('.input-number-group').querySelector('.input-number');
            var val = parseInt(input.value, 10);
            if (val > 1) {
                input.value = val - 1;
            }
        });
    });
});

