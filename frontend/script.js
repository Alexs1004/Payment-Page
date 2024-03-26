
// const prices = {
// 	productName : "Togethere Professional",
// 	productPrice : "15,00 €",
// 	productDescription : "Togethere's premium plan to work better together",
// 	subTotal : "15,00 €",
// 	totalDue : "15,00 €"
// }


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


// document.addEventListener("DOMContentLoaded", function() {
//     const fieldsToCopy = [
//         { sourceId: "autocomplete", targetId: "autocomplete2" },
//         { sourceId: "validationCustom31", targetId: "validationCustom06" },
//         { sourceId: "validationCustom12", targetId: "validationCustom07" },
//         // { sourceId: "validationCustom10", targetId: "validationCustom08" }
//     ];

//     fieldsToCopy.forEach(field => {
//         const sourceInput = document.getElementById(field.sourceId);
//         const targetInput = document.getElementById(field.targetId);

//         sourceInput.addEventListener("input", function() {
//             targetInput.value = sourceInput.value;
//         });
//     });
// });

/*Ce script check si la case est cochée et si c'est le cas copie les eléments dans le shipping form */

// document.addEventListener("DOMContentLoaded", function() {
//     const checkbox = document.getElementById("invalidCheck_checked");

//     const fieldsToCopy = [
//         { sourceId: "autocomplete", targetId: "autocomplete2" },
//         { sourceId: "validationCustom31", targetId: "validationCustom06" },
//         { sourceId: "validationCustom12", targetId: "validationCustom07" },
//         { sourceId: "validationCustom10", targetId: "validationCustom08" }
//     ];

//     checkbox.addEventListener("change", function() {
//         if (checkbox.checked) {
//             fieldsToCopy.forEach(field => {
//                 const sourceInput = document.getElementById(field.sourceId);
//                 const targetInput = document.getElementById(field.targetId);

//                 sourceInput.addEventListener("input", function() {
//                     targetInput.value = sourceInput.value;
//                 });
//             });
//         } else {
//             fieldsToCopy.forEach(field => {
//                 const sourceInput = document.getElementById(field.sourceId);
//                 sourceInput.value = ""; // Efface la valeur du champ source si la case n'est pas cochée
//             });
//         }
//     });
// });




document.addEventListener('DOMContentLoaded', function() {
    var qteBtn = document.querySelector('.qte-btn');
    qteBtn.addEventListener('click', function() {
        var qteModal = new bootstrap.Modal(document.getElementById('qteModal'), {
            backdrop: 'static',
            keyboard: false
        });
        qteModal.show();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const inDdButton = document.querySelector('.in_dd_button');
    inDdButton.addEventListener('click', function() {
        const qteModal = new bootstrap.Modal(document.getElementById('qteModal'), {
            backdrop: 'static',
            keyboard: false
        });
        qteModal.show();
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

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.input-number');

    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            if (this.value == 1) {
                this.classList.add('value-one');
            } else {
                this.classList.remove('value-one');
            }
        });
    });

    var incrementButtons = document.querySelectorAll('.input-number-increment');
    var decrementButtons = document.querySelectorAll('.input-number-decrement');

    incrementButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var input = this.closest('.input-number-group').querySelector('.input-number');
            var val = parseInt(input.value, 10);
            if (val < 99) {
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

document.addEventListener("DOMContentLoaded", function() {
    const modifyButton = document.querySelector(".modal-modify-btn");

    modifyButton.addEventListener("click", function() {
		const inputValue = parseDecimal(document.getElementById("input-modal").value);

		// Mise à jour des prix pour toutes les occurrences de .currency et .dropdown-currency
		document.querySelectorAll(".currency, .dropdown-currency").forEach(currencyElement => {
			let originalValue = parseDecimal(currencyElement.getAttribute("data-original-value"));
			let updatedValue = (originalValue * inputValue).toFixed(2); // Formater avec deux décimales
			currencyElement.textContent = updatedValue.replace('.', ',') + " €"; // Remplacer le point par une virgule
		});

		// Mise à jour du texte pour toutes les occurrences de .qte-btn-page et .qte-btn_text
		document.querySelectorAll(".qte-btn-page, .qte-btn_text").forEach(btnElement => {
			btnElement.textContent = "Qté " + inputValue.toString().replace('.', ',');
		});

		const modal = document.getElementById("qteModal");
		const modalInstance = bootstrap.Modal.getInstance(modal);
		modalInstance.hide();
	});


    // Réinitialiser les prix lorsque la quantité est réinitialisée à 1
    document.getElementById("input-modal").addEventListener("input", function() {
        const inputValue = parseDecimal(this.value);
        if (inputValue === 1) {
            document.querySelectorAll(".currency, .dropdown-currency").forEach(currencyElement => {
                let originalValue = parseDecimal(currencyElement.getAttribute("data-original-value"));
                currencyElement.textContent = originalValue.toFixed(2).replace('.', ',') + " €";
            });
        }
    });

    // Stocker les valeurs de prix initiales dans les attributs data-original-value
    document.querySelectorAll(".currency, .dropdown-currency").forEach(currencyElement => {
        let originalValue = parseDecimal(currencyElement.textContent.replace(' €', ''));
        currencyElement.setAttribute("data-original-value", originalValue);
    });

    // Fonction pour convertir une chaîne en décimal tout en conservant la virgule comme séparateur décimal
	function parseDecimal(value) {
		// Remplacer les virgules par des points pour que parseFloat puisse fonctionner correctement
		return parseFloat(value.replace(',', '.'));

	}
});

// Fonction pour fermer la dropdown lorsque l'utilisateur clique en dehors
function closeDropdownOnClickOutside(event) {
    var dropdown = document.querySelector(".dropdown");
    var detailsButton = document.getElementById("detailsButton");
    var detailsIcon = document.getElementById("detailsIcon");

    // Vérifier si l'événement de clic a eu lieu en dehors de la dropdown
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("open"); // Fermer la dropdown
        detailsButton.textContent = "Détails"; // Changer le texte du bouton en "Détails"
        detailsIcon.classList.remove('fa-angle-up'); // Changer l'icône en flèche vers le bas
        detailsIcon.classList.add('fa-angle-down');
        // Supprimer l'écouteur d'événement de clic en dehors de la dropdown
        document.removeEventListener("click", closeDropdownOnClickOutside);
    }
}

// Fonction pour basculer l'état de la dropdown
function toggleDetails() {
    var detailsButton = document.getElementById("detailsButton");
    var detailsIcon = document.getElementById("detailsIcon");
    var dropdown = document.querySelector(".dropdown");

    if (dropdown.classList.contains("open")) {
        detailsButton.textContent = "Détails";
        detailsIcon.classList.remove('fa-angle-up');
        detailsIcon.classList.add('fa-angle-down');
        dropdown.classList.remove("open");
    } else {
        detailsButton.textContent = "Fermer";
        detailsIcon.classList.remove('fa-angle-down');
        detailsIcon.classList.add('fa-angle-up');
        dropdown.classList.add("open");
        // Ajouter un écouteur d'événement de clic pour fermer la dropdown lorsque l'utilisateur clique en dehors
        document.addEventListener("click", closeDropdownOnClickOutside);
    }
}

// Fonction pour vérifier si la dropdown est ouverte
function isDropdownOpen() {
    var dropdown = document.querySelector(".dropdown");
    return dropdown.classList.contains("show");
}

// Exemple d'utilisation
if (isDropdownOpen()) {
    console.log("La dropdown est ouverte");
} else {
    console.log("La dropdown est fermée");
}



document.addEventListener("DOMContentLoaded", function() {
	// Sélectionne l'icône et le message d'erreur
	var emailIcon = document.getElementById('emailIcon');
	var errorFeedback = document.querySelector('.is-invalid~.invalid-feedback');

	// Vérifie si le message d'erreur est visible et ajuste la classe de l'icône en conséquence
	function adjustIconPosition() {
	  if (window.getComputedStyle(errorFeedback).display === 'block') {
		emailIcon.classList.add('email-icon-shifted');
	  } else {
		emailIcon.classList.remove('email-icon-shifted');
	  }
	}

	// Appel initial pour ajuster la position de l'icône au chargement de la page
	adjustIconPosition();
  });


// **********************CUSTOM VALIDATION***************************

document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("validationCustom01");

    emailInput.addEventListener("blur", function() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            // Si l'email n'est pas valide, afficher un message d'erreur
            emailInput.classList.add("is-invalid");
        } else {
            // Si l'email est valide, retirer la classe d'invalidité
            emailInput.classList.remove("is-invalid");
            emailInput.classList.add("is-valid");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const firstNameInput = document.getElementById("validationCustom12");
    const lastNameInput = document.getElementById("validationCustom31");
    function validateNameInput(inputElement) {
        const name = inputElement.value.trim();
        const nameRegex = /^[a-zA-ZÀ-ÿ\s-]{1,}$/;

        if (!nameRegex.test(name)) {
            inputElement.classList.add("is-invalid");
        } else {
            inputElement.classList.remove("is-invalid");
            inputElement.classList.add("is-valid");
        }
    }

    lastNameInput.addEventListener("blur", function() {
        validateNameInput(lastNameInput);
    });

	firstNameInput.addEventListener("blur", function() {
        validateNameInput(firstNameInput);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const firstNameInput2 = document.getElementById("validationCustom06");
    const lastNameInput2 = document.getElementById("validationCustom07");
    function validateNameInput(inputElement) {
        const name = inputElement.value.trim();
        const nameRegex = /^[a-zA-ZÀ-ÿ\s-]{1,}$/;

        if (!nameRegex.test(name)) {
            inputElement.classList.add("is-invalid");
        } else {
            inputElement.classList.remove("is-invalid");
            inputElement.classList.add("is-valid");
        }
    }



    lastNameInput2.addEventListener("blur", function() {
        validateNameInput(lastNameInput2);
    });

	firstNameInput2.addEventListener("blur", function() {
        validateNameInput(firstNameInput2);
    });
});

const titulaireDuCompteInput = document.getElementById("validationCustomUsername");

titulaireDuCompteInput.addEventListener("blur", function() {
    const titulaireDuCompte = titulaireDuCompteInput.value.trim();
    const titulaireDuCompteRegex = /^[a-zA-ZÀ-ÿ\s-]{1,}$/;

    if (!titulaireDuCompteRegex.test(titulaireDuCompte)) {
        titulaireDuCompteInput.classList.add("is-invalid");
    } else {
        titulaireDuCompteInput.classList.remove("is-invalid");
        titulaireDuCompteInput.classList.add("is-valid");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const cardHolderInput = document.getElementById("validationCustomCardHolder");

    cardHolderInput.addEventListener("blur", function() {
        const cardHolder = cardHolderInput.value.trim();
        const cardHolderRegex = /^[a-zA-ZÀ-ÿ\s-]{1,}$/;

        if (!cardHolderRegex.test(cardHolder)) {
            cardHolderInput.classList.add("is-invalid");
        } else {
            cardHolderInput.classList.remove("is-invalid");
            cardHolderInput.classList.add("is-valid");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const additionalInput = document.getElementById("validationCustom02");
    const ibanInput = document.getElementById("validationCustomIban");

    additionalInput.addEventListener("blur", function() {
        validateInput(additionalInput);
    });

    ibanInput.addEventListener("blur", function() {
        validateInput(ibanInput);
    });

    function validateInput(inputElement) {
        const value = inputElement.value.trim();
        const regex = /^[A-Z]{2}\d{2}\s*(\d{4}\s*){4}(\d{4}\s*)?$/;

        if (!regex.test(value)) {
            inputElement.classList.add("is-invalid");
        } else {
            inputElement.classList.remove("is-invalid");
            inputElement.classList.add("is-valid");
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const expirationInput = document.getElementById("validationCustom11");

    expirationInput.addEventListener("input", function(event) {
        let value = expirationInput.value.trim();

        // Supprimer tous les caractères non numériques
        value = value.replace(/\D/g, '');

        // Limiter la longueur de la valeur à 4 caractères
        if (value.length > 4) {
            value = value.slice(0, 4);
        }

        // Insérer le slash automatiquement après les deux premiers caractères
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }

        expirationInput.value = value;

        // Valider la date d'expiration
        validateExpiration(expirationInput);
    });

    // Fonction de validation de la date d'expiration
    function validateExpiration(inputElement) {
        const value = inputElement.value.trim();
        const regexExpiration = /^(0[1-9]|1[0-2])\/\d{2}$/;
        const today = new Date();
        const currentYear = today.getFullYear() % 100;
        const currentMonth = today.getMonth() + 1;

        if (!regexExpiration.test(value)) {
            inputElement.classList.add("is-invalid");
        } else {
            const [expMonth, expYear] = value.split('/');
            const expiryDate = new Date(2000 + parseInt(expYear), parseInt(expMonth) - 1);

            if (expiryDate < today || (parseInt(expYear) === currentYear && parseInt(expMonth) < currentMonth)) {
                inputElement.classList.add("is-invalid");
            } else {
                inputElement.classList.remove("is-invalid");
                inputElement.classList.add("is-valid");
            }
        }
    }

    // Valider la date d'expiration lorsque le champ perd le focus
    expirationInput.addEventListener("blur", function() {
        const value = expirationInput.value.trim();
        validateExpiration(expirationInput);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const cvcInput = document.getElementById("validationCustom32");

    cvcInput.addEventListener("input", function(event) {
        let value = cvcInput.value.trim();

        // Supprimer tous les caractères non numériques
        value = value.replace(/\D/g, '');

        // Limiter la longueur de la valeur à 4 caractères
        if (value.length > 4) {
            value = value.slice(0, 4);
        }

        cvcInput.value = value;

        // Valider le CVC si la longueur de la valeur est égale à 3 ou 4
        validateCVC(cvcInput);
    });

    // Fonction de validation du CVC
    function validateCVC(inputElement) {
        const value = inputElement.value.trim();
        const regexCVC = /^\d{3,4}$/;

        if (!regexCVC.test(value)) {
            inputElement.classList.add("is-invalid");
        } else {
            inputElement.classList.remove("is-invalid");
            inputElement.classList.add("is-valid");
        }
    }

    // Valider le CVC lorsque le champ perd le focus
    cvcInput.addEventListener("blur", function() {
        const value = cvcInput.value.trim();
        validateCVC(cvcInput);
    });
});

document.getElementById("toggleAdresseManuelle").addEventListener("click", function() {
    var adresseManuelleDiv = document.getElementById("adresseManuelle");
    if (adresseManuelleDiv.style.display === "none") {
        adresseManuelleDiv.style.display = "block";
    } else {
        adresseManuelleDiv.style.display = "none";
    }
});

// document.addEventListener("DOMContentLoaded", function() {
//     const sepaBtn = document.querySelector('.sepa-btn');
//     const cardBtn = document.querySelector('.card-btn');
//     const creditCardBlock = document.querySelectorAll('.creditCardBlock');
//     const sepaBlock = document.querySelectorAll('.sepaBlock');

//     function afficherSEPA(event) {
//         event.preventDefault(); // Empêcher le comportement par défaut du bouton
//         sepaBtn.classList.add('active');
//         cardBtn.classList.remove('active');
//         creditCardBlock.style.display = 'none';
//         sepaBlock.style.display = 'block';
//     }

//     function afficherCarte(event) {
//         event.preventDefault(); // Empêcher le comportement par défaut du bouton
//         cardBtn.classList.add('active');
//         sepaBtn.classList.remove('active');
//         creditCardBlock.style.display = 'block';
//         sepaBlock.style.display = 'none';
//     }

//     sepaBtn.addEventListener('click', afficherSEPA);
//     cardBtn.addEventListener('click', afficherCarte);
// });


// -----------------------TEST

document.addEventListener("DOMContentLoaded", function() {
    const sepaBtn = document.querySelector('.sepa-btn');
    const cardBtn = document.querySelector('.card-btn');
    const creditCardBlocks = document.querySelectorAll('.creditCardBlock');
    const sepaBlocks = document.querySelectorAll('.sepaBlock');

    function afficherSEPA(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du bouton
        sepaBtn.classList.add('active');
        cardBtn.classList.remove('active');
        creditCardBlocks.forEach(block => block.style.display = 'none');
        sepaBlocks.forEach(block => block.style.display = 'block');
    }

    function afficherCarte(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du bouton
        cardBtn.classList.add('active');
        sepaBtn.classList.remove('active');
        creditCardBlocks.forEach(block => block.style.display = 'block');
        sepaBlocks.forEach(block => block.style.display = 'none');
    }

    sepaBtn.addEventListener('click', afficherSEPA);
    cardBtn.addEventListener('click', afficherCarte);
});


// document.addEventListener("DOMContentLoaded", function() {
//     const radioUpsellInput = document.querySelector(".radio-upsell input[type='radio']");
//     const textCurrencyElements = document.querySelectorAll(".text_currency");
//     const prixParAn = "Puis 150,00 € par an";

//     radioUpsellInput.addEventListener("change", function() {
//         if (radioUpsellInput.checked) {
//             textCurrencyElements.forEach(function(element) {
//                 element.textContent = prixParAn;
//             });
//         } else {
//             // Remettre le texte d'origine si le radio input n'est pas activé
//             textCurrencyElements.forEach(function(element) {
//                 element.textContent = "Puis 15,55 € par mois";
//             });
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const radioBtn = document.getElementById("flexSwitchCheckDefault");

    radioBtn.addEventListener("change", function() {
        if (radioBtn.checked) {
            console.log("Le bouton radio est coché !");
        } else {
            console.log("Le bouton radio n'est pas coché !");
        }
    });
});


// function transformToInput() {
//     // Créer un input
//     var inputElement = document.createElement("input");
//     inputElement.setAttribute("type", "text");
//     inputElement.setAttribute("placeholder", "Ajouter un code promotionnel");

//     // Remplacer le texte par l'input
//     var promoContainer = document.getElementById("promo-container");
//     promoContainer.innerHTML = '';
//     promoContainer.appendChild(inputElement);

//     // Ajouter un événement de saisie à l'input
//     inputElement.addEventListener("input", showApplyButton);
//   }

//   function showApplyButton() {
//     var inputElement = document.querySelector("#promo-container input");

//     // Créer le bouton Appliquer
//     var applyButton = document.createElement("button");
//     applyButton.textContent = "Appliquer";
//     applyButton.setAttribute("type", "button");
//     applyButton.classList.add("btn", "btn-primary");

//     // Ajouter le bouton après l'input
//     inputElement.parentNode.insertBefore(applyButton, inputElement.nextSibling);

//     // Retirer l'événement de saisie de l'input pour éviter de créer plusieurs boutons
//     inputElement.removeEventListener("input", showApplyButton);
//   }

// function transformToInput() {
//     // Créer un div avec les classes Bootstrap nécessaires
//     var inputGroup = document.createElement("div");
//     inputGroup.classList.add("input-group", "mb-3");

//     // Créer l'input avec les attributs nécessaires
//     var inputElement = document.createElement("input");
//     inputElement.setAttribute("type", "text");
//     inputElement.classList.add("form-control");
//     inputElement.setAttribute("placeholder", "Ajouter un code promotionnel");
//     inputElement.setAttribute("aria-label", "Recipient's username");
//     inputElement.setAttribute("aria-describedby", "button-addon2");

//     // Créer le bouton avec les classes Bootstrap nécessaires
//     var applyButton = document.createElement("button");
//     applyButton.textContent = "Appliquer";
//     applyButton.setAttribute("type", "button");
//     applyButton.classList.add("btn", "btn-outline-secondary");
//     applyButton.setAttribute("id", "button-addon2");

//     // Ajouter l'input et le bouton au div de groupe d'entrée
//     inputGroup.appendChild(inputElement);
//     inputGroup.appendChild(applyButton);

//     // Remplacer le texte par le div de groupe d'entrée
//     var promoContainer = document.getElementById("promo-container");
//     promoContainer.innerHTML = '';
//     promoContainer.appendChild(inputGroup);

//     // Ajouter un événement de saisie à l'input
//     inputElement.addEventListener("input", showApplyButton);
//   }

//   function showApplyButton() {
//     var inputElement = document.querySelector("#promo-container input");

//     // Retirer l'événement de saisie de l'input pour éviter de créer plusieurs boutons
//     inputElement.removeEventListener("input", showApplyButton);
//   }

function transformToInput() {
    // Créer un div avec les classes Bootstrap nécessaires
    var inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group", "mb-3");

    // Créer l'input avec les attributs nécessaires
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.classList.add("form-control");
    inputElement.setAttribute("placeholder", "Ajouter un code promotionnel");
    inputElement.setAttribute("aria-label", "Recipient's username");
    inputElement.setAttribute("aria-describedby", "button-addon2");

    // Ajouter un événement de saisie à l'input pour afficher le bouton "Appliquer"
    inputElement.addEventListener("input", showApplyButton);

    // Ajouter l'input au div de groupe d'entrée
    inputGroup.appendChild(inputElement);

    // Remplacer le texte par le div de groupe d'entrée
    var promoContainer = document.getElementById("promo-container");
    promoContainer.innerHTML = '';
    promoContainer.appendChild(inputGroup);
  }

  function showApplyButton() {
    var inputElement = document.querySelector("#promo-container input");

    // Créer le bouton "Appliquer"
    var applyButton = document.createElement("button");
    applyButton.textContent = "Appliquer";
    applyButton.setAttribute("type", "button");
    applyButton.classList.add("btn", "btn-outline-secondary", "position-absolute", "end-0", "translate-middle", "y-50", "z-1");
    applyButton.setAttribute("id", "button-addon2");

    // Ajouter un événement de clic au bouton "Appliquer" pour le retirer
    applyButton.addEventListener("click", function() {
      applyButton.remove();
    });

    // Ajouter le bouton "Appliquer" à l'input
    inputElement.parentNode.appendChild(applyButton);

    // Retirer l'événement de saisie de l'input pour éviter de créer plusieurs boutons
    inputElement.removeEventListener("input", showApplyButton);
  }
