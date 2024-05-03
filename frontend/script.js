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

const newPrices = {
    productName: "La revue de l'herboriste",
    productPrice: "14,90",
    productAnnualPrice: "49,00",
    productDescription: "Abonnement trimestriel à La revue de l'Herboriste au format électronique",
    subTotal: "14,90",
    totalDue: "14,90"
  };

  window.onload = function(){


    // const annualPrice = parseFloat(productAnnualPrice.replace(',', '.'));

    // console.log(annualPrice);

    // const result = parseFloat(newPrices.productPrice * 4 - newPrices.productAnnualPrice);


    document.getElementById('currencyElement1').innerHTML = newPrices.productPrice;
    document.getElementById('upsell-currency-fs').innerHTML = newPrices.productAnnualPrice;
    document.getElementById('upsell-currency').innerHTML = newPrices.productAnnualPrice;
    // document.getElementById('economy').innerHTML = newPrices.productPrice;
    // document.getElementById('economy').innerHTML = newPrices.productPrice * 4 - newPrices.productAnnualPrice;
};

  var dropdown = document.querySelector(".dropdown");
  var detailsButton = document.getElementById("detailsButton");
  var detailsIcon = document.getElementById("detailsIcon");


function addOption(selectElement, optionText) {
    const option = document.createElement("option");
    option.text = optionText;
    selectElement.add(option);
}

// Ajouter les options au premier dropdown
const dropdownPays = document.getElementById("paysDropdown");
countries.forEach(country => {
    addOption(dropdownPays, country);
});

// Dupliquer les options pour le deuxième dropdownPays
const dropdownPays2 = document.getElementById("paysDropdown2");
countries.forEach(country => {
    addOption(dropdownPays2, country);
});


document.addEventListener("DOMContentLoaded", function() {
    const dynamicElements = document.querySelectorAll(".currency, .byMonth-text");

    // Stockez les valeurs par défaut
    const defaultValues = [];
    dynamicElements.forEach(element => {
        defaultValues.push(element.textContent);
    });

    const radioBtn = document.getElementById("flexSwitchCheckDefault");
    const radioBtn2 = document.getElementById("flexSwitchCheckDefault2");
    radioBtn.addEventListener("change", function() {
        if (radioBtn.checked || radioBtn2.checked) {
            console.log("Le bouton radio est coché !");
            dynamicElements.forEach(element => {
                if (element.classList.contains("currency")) {
                    element.textContent = "49,00 €";
                } else if (element.classList.contains("byMonth-text")) {
                    element.textContent = " par an";
                }
            });
        } else {
            console.log("Le bouton radio n'est pas coché !");
            // Restaurez les valeurs par défaut
            dynamicElements.forEach((element, index) => {
                element.textContent = defaultValues[index];
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var qteBtn = document.querySelector('.qte-btn');
    qteBtn.addEventListener('click', function() {
        var qteModal = new bootstrap.Modal(document.getElementById('qteModal'), {
            keyboard: true
        });
        qteModal.show();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const inDdButton = document.querySelector('.in_dd_button');
    inDdButton.addEventListener('click', function() {
        const qteModal = new bootstrap.Modal(document.getElementById('qteModal'), {
            keyboard: true
        });
        qteModal.show();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('invalidCheck_checked');
    const deliveryFormContainers = document.querySelectorAll('.delivery-form-container');
    const cgCheckbox = document.getElementById("cg_checkbox");

    if (checkbox && deliveryFormContainers) {
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                deliveryFormContainers.forEach(function(container) {
                    container.classList.add('d-none');
                });
            } else {
                deliveryFormContainers.forEach(function(container) {
                    container.classList.remove('d-none');
                });
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



// **********************CUSTOM VALIDATION***************************



document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("validationCustom01");
    const emailError = document.getElementById("emailError");

    emailInput.addEventListener("blur", function() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            // Si l'email n'est pas valide, afficher un message d'erreur
            emailInput.classList.add("is-invalid");
            emailError.style.display = "block"; // Afficher le message d'erreur
        } else {
            // Si l'email est valide, retirer la classe d'invalidité et cacher le message d'erreur
            emailInput.classList.remove("is-invalid");
            emailInput.classList.add("is-valid");
            emailError.style.display = "none"; // Cacher le message d'erreur
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const phoneInput = document.getElementById("validationCustom21");

    phoneInput.addEventListener("blur", function() {
        const phoneNumber = phoneInput.value.trim();
        const phoneRegex = /^0[1-9]([ .-]?[0-9]{2}){4}$/;

        if (!phoneRegex.test(phoneNumber)) {
            // Si le numéro de téléphone n'est pas valide, afficher un message d'erreur
            phoneInput.classList.add("is-invalid");
            document.getElementById("phoneError").style.display = "block";
        } else {
            // Si le numéro de téléphone est valide, retirer la classe d'invalidité
            phoneInput.classList.remove("is-invalid");
            phoneInput.classList.add("is-valid");
            document.getElementById("phoneError").style.display = "none";
        }
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
    const additionalInput = document.getElementById("validationCustom02");
    const ibanInput = document.getElementById("validationCustomIban");
    const errorMessage = document.getElementById("errorMessage"); // Ajout de l'élément du message d'erreur

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
            errorMessage.style.display = "block"; // Afficher le message d'erreur
        } else {
            inputElement.classList.remove("is-invalid");
            inputElement.classList.add("is-valid");
            errorMessage.style.display = "none"; // Masquer le message d'erreur s'il est valide
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const cardInput = document.getElementById("validationCustom02"); // Input de la carte
    const cardErrorMessage = document.getElementById("cardErrorMessage"); // Message d'erreur pour la carte

    cardInput.addEventListener("blur", function() {
        validateCardInput(cardInput);
    });

    function validateCardInput(inputElement) {
        const value = inputElement.value.trim();
        const regex = /^[A-Z]{2}\d{2}\s*(\d{4}\s*){4}(\d{4}\s*)?$/;

        if (!regex.test(value)) {
            inputElement.classList.add("is-invalid");
            cardErrorMessage.style.display = "block"; // Afficher le message d'erreur
        } else {
            inputElement.classList.remove("is-invalid");
            inputElement.classList.add("is-valid");
            cardErrorMessage.style.display = "none"; // Masquer le message d'erreur s'il est valide
        }
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const expirationInput = document.getElementById("validationCustom11");
    const cardDateErrorMessage = document.getElementById("cardDateErrorMessage");

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

        // Validation supplémentaire pour les deux premiers caractères
        const month = parseInt(value.slice(0, 2));
        if (month < 1 || month > 12) {
            inputElement.classList.add("is-invalid");
            cardDateErrorMessage.textContent = "Le mois d'expiration de votre carte doit être compris entre 01 et 12.";
            cardDateErrorMessage.style.display = "block"; // Afficher le message d'erreur
            return; // Arrêter la validation si le mois n'est pas valide
        }

        if (!regexExpiration.test(value)) {
            inputElement.classList.add("is-invalid");
            cardDateErrorMessage.textContent = "La date d'expiration de votre carte est incomplète.";
            cardDateErrorMessage.style.display = "block"; // Afficher le message d'erreur
        } else {
            const [expMonth, expYear] = value.split('/');
            const expiryDate = new Date(2000 + parseInt(expYear), parseInt(expMonth) - 1);

            if (expiryDate < today) {
                inputElement.classList.add("is-invalid");
                cardDateErrorMessage.textContent = "L'année d'expiration de votre carte est définie dans le passé.";
                cardDateErrorMessage.style.display = "block"; // Afficher le message d'erreur
            } else {
                inputElement.classList.remove("is-invalid");
                inputElement.classList.add("is-valid");
                cardDateErrorMessage.style.display = "none"; // Masquer le message d'erreur
            }
        }
    }

    // Valider la date d'expiration lorsque le champ perd le focus
    expirationInput.addEventListener("blur", function() {
        validateExpiration(expirationInput);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sepaButton = document.querySelector(".sepa-btn");
    const cardErrorMessage = document.getElementById("cardErrorMessage");
    const cardDateErrorMessage = document.getElementById("cardDateErrorMessage");
    const cardCVCErrorMessage = document.getElementById("cardCVCErrorMessage");

    sepaButton.addEventListener("click", function() {
        // Rendre les messages d'erreur invisibles en modifiant leur style CSS
        cardErrorMessage.style.display = "none";
        cardDateErrorMessage.style.display = "none";
        cardCVCErrorMessage.style.display = "none";
    });
});






document.addEventListener("DOMContentLoaded", function() {
    const cvcInput = document.getElementById("validationCustom32");
    const cvcErrorMessage = document.getElementById("cardCVCErrorMessage");

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
            cvcErrorMessage.textContent = "Le code de sécurité de votre carte est incomplet.";
            cvcErrorMessage.style.display = "block"; // Afficher le message d'erreur
        } else {
            inputElement.classList.remove("is-invalid");
            inputElement.classList.add("is-valid");
            cvcErrorMessage.style.display = "none"; // Masquer le message d'erreur
        }
    }

    // Valider le CVC lorsque le champ perd le focus
    cvcInput.addEventListener("blur", function() {
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


document.addEventListener('DOMContentLoaded', function() {
    const promoBtn = document.querySelector('.promo-btn');

    promoBtn.addEventListener('click', function(event) {
        // Empêcher le rechargement de la page
        event.preventDefault();

        // Ouvrir la dropdown
        dropdown.classList.toggle('open');
    });
    console.log(promoBtn);
    console.log(dropdown);
});


function transformToInput(event) {
    // Empêcher la propagation de l'événement de clic
    event.stopPropagation();

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

    // Mettre le focus sur l'input après un court délai
    setTimeout(function() {
        inputElement.focus();
    }, 0);

    // Appliquer les coins arrondis uniquement aux côtés supérieurs
    inputElement.style.borderBottomRightRadius = "6px";
    inputElement.style.borderTopRightRadius = "6px";
}



function showApplyButton() {
    var inputElement = document.querySelector("#promo-container input");

    // Créer le bouton "Appliquer"
    var applyButton = document.createElement("button");
    applyButton.textContent = "Appliquer";
    applyButton.setAttribute("type", "button");
    applyButton.classList.add("btn", "btn-outline-secondary", "position-absolute", "end-0", "y-50", "z-1");
    applyButton.setAttribute("id", "button-addon2");

    // Ajouter un événement de clic au bouton "Appliquer" pour le retirer
    applyButton.addEventListener("click", function(event) {
        event.preventDefault(); // Empêcher le rechargement de la page
        applyButton.remove();
    });

    // Ajouter le bouton "Appliquer" à l'input
    inputElement.parentNode.appendChild(applyButton);

    // Cacher le bouton si le champ est vide
    if (inputElement.value.trim() === "") {
        applyButton.style.display = "none";
    }

    // Ajouter un écouteur d'événement pour vérifier si le champ est vide à chaque saisie
    inputElement.addEventListener("input", function() {
        if (inputElement.value.trim() === "") {
            applyButton.style.display = "none";
        } else {
            applyButton.style.display = "block";
        }
    });

    // Retirer l'événement de saisie de l'input pour éviter de créer plusieurs boutons
    inputElement.removeEventListener("input", showApplyButton);
}




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

document.addEventListener('DOMContentLoaded', function() {
// Sélection du bouton et du conteneur des champs
var boutonToggle = document.getElementById('toggleAdresseManuelle');
var boutonToggle2 = document.getElementById('toggleAdresseManuelle2');
var conteneurChamps = document.getElementById('conteneurChamps');
var conteneurChamps2 = document.getElementById('conteneurChamps2');

// Fonction pour ajouter des champs d'adresse
function toggleAdresseManuelle(event) {
    // Empêcher le comportement par défaut du clic sur le bouton
    event.preventDefault();

    // Afficher ou masquer le conteneur des champs d'adresse
    conteneurChamps.style.display = conteneurChamps.style.display === 'none' ? 'block' : 'none';
    conteneurChamps2.style.display = conteneurChamps2.style.display === 'none' ? 'block' : 'none';
}

// Écouteur d'événement sur le clic du bouton
boutonToggle.addEventListener('click', toggleAdresseManuelle);
boutonToggle.addEventListener('click', toggleAdresseManuelle2);
});

document.addEventListener('DOMContentLoaded', function() {
    // Sélection du bouton et du conteneur des champs
    var boutonToggle = document.getElementById('toggleAdresseManuelle');
    var boutonToggle2 = document.getElementById('toggleAdresseManuelle2');
    var conteneurChamps = document.getElementById('conteneurChamps');
    var conteneurChamps2 = document.getElementById('conteneurChamps2');
    var conteneurChamps3 = document.getElementById('conteneurChamps3');
    var conteneurChamps4 = document.getElementById('conteneurChamps4');
    var adressField = document.querySelector('.adress-form');
    var adressField2 = document.querySelector('.adress-form2');
    var codePostale = document.getElementById('code-postal');
    var codePostale2 = document.getElementById('code-postal2');
    var ville = document.getElementById('ville');
    var ville2 = document.getElementById('ville2');

    // Fonction pour afficher les champs d'adresse et masquer le bouton
    function toggleAdresseManuelle(event) {
        // Empêcher le comportement par défaut du clic sur le bouton
        event.preventDefault();

        // Afficher les conteneurs des champs d'adresse
        adressField.classList.add('d-none');
        codePostale.classList.remove('d-none');
        ville.classList.remove('d-none');
        conteneurChamps.style.display = 'block';
        conteneurChamps2.style.display = 'block';

        // Masquer le bouton
        boutonToggle.style.display = 'none';
    }

    function toggleAdresseManuelle2(event) {
        // Empêcher le comportement par défaut du clic sur le bouton
        event.preventDefault();

        // Afficher les conteneurs des champs d'adresse
        adressField2.classList.add('d-none');
        codePostale2.style.display = 'block';
        ville2.style.display = 'block';
        conteneurChamps3.style.display = 'block';
        conteneurChamps4.style.display = 'block';

        // Masquer le bouton
        boutonToggle2.style.display = 'none';
    }

    // Écouteur d'événement sur le clic du bouton
    boutonToggle.addEventListener('click', toggleAdresseManuelle);
    boutonToggle2.addEventListener('click', toggleAdresseManuelle2);
});


//BON CODE POUR MODAL
document.addEventListener("DOMContentLoaded", function() {
    var politiqueModal = new bootstrap.Modal(document.getElementById('politiqueModal'), {
        keyboard: true
    });

    // var politiqueBtn = document.getElementById('politiqueBtn');
    // var mentionsLegalesBtn = document.getElementById('mentionsLegalesBtn');
    // var remboursementBtn = document.getElementById('remboursementBtn');
    // var contactBtn = document.getElementById('contactBtn');
    // Récupérer les boutons et les blocs de la modal
    var openModals = document.querySelectorAll(".open-modal");

    var modalMentionsLegalesBtn = document.querySelector(".modal-mentions-légales");
    var modalRemboursementBtn = document.querySelector(".modal-remboursement");
    var modalContactBtn = document.querySelector(".modal-contact");

    var modalMentionsBlock = document.querySelector(".modal-body-mentions");
    var remboursementsModalBlock = document.querySelector(".remboursements-modal");
    var contactModalBlock = document.querySelector(".contact-modal");

    openModals.forEach(function(openModal) {
    openModal.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("1111");
        var dataPolitique = this.getAttribute("data-politique");
        console.log(this);
        console.log(dataPolitique);
        politiqueModal.show();
        // document.querySelector('#politiqueModal .modal-'+dataPolitique).classList.remove("d-none");
        var clicOnModal = document.querySelector(".modal-"+dataPolitique);
        clicOnModal.click(); // Simuler le clic sur modal-remboursement
        clicOnModal.focus(); // Mettre le focus sur modal-remboursement
    });
});

$(".openModal").onClick
    // Associer la même fonction à tous les boutons
    // politiqueBtn.addEventListener('click', function(event) {
    //     console.log("1111");
    //     handleButtonClick(event, document.querySelector('#politiqueModal .modal-remboursement'));
    //     modalRemboursementBtn.click(); // Simuler le clic sur modal-remboursement
    //     modalRemboursementBtn.focus(); // Mettre le focus sur modal-remboursement
    // });


    // mentionsLegalesBtn.addEventListener('click', function(event) {
    //     console.log("222");
    //     handleButtonClick(event, document.querySelector('#politiqueModal .modal-mentions-légales'));
    //     modalMentionsLegalesBtn.click(); // Simuler le clic sur modal-mentions-légales
    //     modalMentionsLegalesBtn.focus(); // Mettre le focus sur modal-mentions-légales
    // });

    // remboursementBtn.addEventListener('click', function(event) {
    //     console.log("333");
    //     handleButtonClick(event, document.querySelector('#politiqueModal .modal-remboursement'));
    //     modalRemboursementBtn.click(); // Simuler le clic sur modal-remboursement
    //     modalRemboursementBtn.focus(); // Mettre le focus sur modal-remboursement
    // });

    // contactBtn.addEventListener('click', function(event) {
    //     console.log("444");
    //     handleButtonClick(event, document.querySelector('#politiqueModal .modal-contact'));
    //     modalContactBtn.click(); // Simuler le clic sur modal-contact
    //     modalContactBtn.focus(); // Mettre le focus sur modal-contact
    // });



    // Ajouter des écouteurs d'événements pour les clics sur les boutons de la modal
    modalMentionsLegalesBtn.addEventListener("click", function() {
        // Afficher le bloc modal-body-mentions
        modalMentionsBlock.classList.remove("d-none");
        // Cacher les autres blocs
        remboursementsModalBlock.classList.add("d-none");
        contactModalBlock.classList.add("d-none");
    });

    modalRemboursementBtn.addEventListener("click", function() {
        // Afficher le bloc remboursements-modal
        remboursementsModalBlock.classList.remove("d-none");
        // Cacher les autres blocs
        modalMentionsBlock.classList.add("d-none");
        contactModalBlock.classList.add("d-none");
    });

    modalContactBtn.addEventListener("click", function() {
        // Afficher le bloc contact-modal
        contactModalBlock.classList.remove("d-none");
        // Cacher les autres blocs
        modalMentionsBlock.classList.add("d-none");
        remboursementsModalBlock.classList.add("d-none");
    });
});


        const bsDropdown = new bootstrap.Dropdown(dropdown);
        const dropdownBack = document.querySelector(".dropdownBack");

        function toggleDetails() {
            // Appeler la fonction transformToInput avec un événement factice
            var promoTextDiv = document.getElementById("promo-text");
            var fakeClickEvent = new Event("click");
            transformToInput(fakeClickEvent);

            // Ensuite, afficher la dropdown
            bsDropdown.show();
        }

    dropdown.addEventListener('show.bs.dropdown', event => {
        detailsButton.textContent = "Fermer";
        detailsIcon.classList.add('fa-angle-up');
        detailsIcon.classList.remove('fa-angle-down');
        dropdownBack.classList.remove('displayNone');
      })
      dropdown.addEventListener('hide.bs.dropdown', event => {
        detailsButton.textContent = "Détails";
        detailsIcon.classList.remove('fa-angle-up');
        detailsIcon.classList.add('fa-angle-down');
        dropdownBack.classList.add('displayNone');
    })

    function toggleClose() {
        bsDropdown.hide();
    }

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            bsDropdown.hide();
        }
    });

    // ****************************************AUTOCOMPLETE"***************************************


//     let autocomplete;
// let address1Field;
// let address2Field;
// let postalField;


// function initAutocomplete() {
//   address1Field = document.querySelector("#ship-address");
//   address2Field = document.querySelector("#address2");
//   postalField = document.querySelector("#postcode");
//   // Create the autocomplete object, restricting the search predictions to
//   // addresses in the US and Canada.
//   autocomplete = new google.maps.places.Autocomplete(address1Field, {
//     componentRestrictions: { country: ["us", "ca"] },
//     fields: ["address_components", "geometry"],
//     types: ["address"],
//   });
//   address1Field.focus();
//   // When the user selects an address from the drop-down, populate the
//   // address fields in the form.
//   autocomplete.addListener("place_changed", fillInAddress);
// }

// function fillInAddress() {
//   // Get the place details from the autocomplete object.
//   const place = autocomplete.getPlace();
//   let address1 = "";
//   let postcode = "";

//   // Get each component of the address from the place details,
//   // and then fill-in the corresponding field on the form.
//   // place.address_components are google.maps.GeocoderAddressComponent objects
//   // which are documented at http://goo.gle/3l5i5Mr
//   for (const component of place.address_components) {
//     // @ts-ignore remove once typings fixed
//     const componentType = component.types[0];

//     switch (componentType) {
//       case "street_number": {
//         address1 = `${component.long_name} ${address1}`;
//         break;
//       }

//       case "route": {
//         address1 += component.short_name;
//         break;
//       }

//       case "postal_code": {
//         postcode = `${component.long_name}${postcode}`;
//         break;
//       }

//       case "postal_code_suffix": {
//         postcode = `${postcode}-${component.long_name}`;
//         break;
//       }
//       case "locality":
//         document.querySelector("#locality").value = component.long_name;
//         break;
//       case "administrative_area_level_1": {
//         document.querySelector("#state").value = component.short_name;
//         break;
//       }
//       case "country":
//         document.querySelector("#country").value = component.long_name;
//         break;
//     }
//   }

//   address1Field.value = address1;
//   postalField.value = postcode;
//   // After filling the form with address components from the Autocomplete
//   // prediction, set cursor focus on the second address line to encourage
//   // entry of subpremise information such as apartment, unit, or floor number.
//   address2Field.focus();
// }

// window.initAutocomplete = initAutocomplete;

