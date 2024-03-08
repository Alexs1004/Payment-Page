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


document.addEventListener("DOMContentLoaded", function() {
    const fieldsToCopy = [
        { sourceId: "autocomplete", targetId: "autocomplete2" },
        { sourceId: "validationCustom31", targetId: "validationCustom06" },
        { sourceId: "validationCustom12", targetId: "validationCustom07" },
        // { sourceId: "validationCustom10", targetId: "validationCustom08" }
    ];

    fieldsToCopy.forEach(field => {
        const sourceInput = document.getElementById(field.sourceId);
        const targetInput = document.getElementById(field.targetId);

        sourceInput.addEventListener("input", function() {
            targetInput.value = sourceInput.value;
        });
    });
});

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


/*Modal for payment*/
// document.addEventListener('DOMContentLoaded', function () {
// 	const form = document.querySelector('form');
// 	const modal = document.querySelector('.modal');

// 	form.addEventListener('submit', function (event) {
// 	  event.preventDefault(); // Prevent form submission

// 	  modal.classList.add('show');
// 	  modal.style.display = 'block';

// 	  setTimeout(function () {
// 		modal.classList.remove('show');
// 		modal.style.display = 'none';
// 	  }, 500000000); // Adjust the time as needed
// 	});
//   });




window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});



function showSEPA() {
    document.getElementById('sepaBlock').style.display = 'block';
    document.getElementById('creditCardBlock').style.display = 'none';
}

function showCreditCard() {
    document.getElementById('sepaBlock').style.display = 'none';
    document.getElementById('creditCardBlock').style.display = 'block';
}

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

if (document.getElementById('btnradio1').checked) {
    showSEPA();
} else {
    showCreditCard();
}



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
	        const inputValue = parseFloat(document.getElementById("input-modal").value);

        // Mise à jour des prix pour toutes les occurrences de .currency et .dropdown-currency
        document.querySelectorAll(".currency, .dropdown-currency").forEach(currencyElement => {
            let currencyValue = parseFloat(currencyElement.textContent);
            currencyValue *= inputValue;
            currencyElement.textContent = currencyValue.toFixed(2) + " €";
        });

        // Mise à jour du texte pour toutes les occurrences de .qte-btn-page et .qte-btn_text
        document.querySelectorAll(".qte-btn-page, .qte-btn_text").forEach(btnElement => {
            btnElement.textContent = "Qté " + inputValue;
        });

        const modal = document.getElementById("qteModal");
        const modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
    });

    // Réinitialiser les prix lorsque la quantité est réinitialisée à 1
    document.getElementById("input-modal").addEventListener("input", function() {
        const inputValue = parseFloat(this.value);
        if (inputValue === 1) {
            document.querySelectorAll(".currency, .dropdown-currency").forEach(currencyElement => {
                let originalValue = parseFloat(currencyElement.getAttribute("data-original-value"));
                currencyElement.textContent = originalValue.toFixed(2) + " €";
            });
        }
    });
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
    const expiryInput = document.getElementById("validationCustom11");

    expiryInput.addEventListener("input", function() {
        const value = expiryInput.value.trim();

        // Vérifie si la longueur de la valeur est égale à 2 et si le dernier caractère est un chiffre
        if (value.length === 2 && !isNaN(parseInt(value.charAt(value.length - 1)))) {
            // Ajoute automatiquement "/"
            expiryInput.value = value + "/";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const expiryInput = document.getElementById("validationCustom11");

    expiryInput.addEventListener("blur", function() {
        validateExpiry(expiryInput);
    });

    function validateExpiry(inputElement) {
        const value = inputElement.value.trim();
        const regexExpiry = /^(0[1-9]|1[0-2])\/\d{2}$/;

        if (!regexExpiry.test(value)) {
            inputElement.classList.add("is-invalid");
        } else {
            inputElement.classList.remove("is-invalid");
            inputElement.classList.add("is-valid");
        }
    }
});

// document.addEventListener("DOMContentLoaded", function() {
//     const expiryInput = document.getElementById("validationCustom11");

//     expiryInput.addEventListener("input", function() {
//         const value = expiryInput.value.trim();

//         // Si la longueur de la valeur est égale à 5 (incluant le "/") et que les 4 premiers caractères sont des chiffres
//         if (value.length === 5 && !isNaN(parseInt(value.substring(0, 2))) && !isNaN(parseInt(value.substring(3)))) {
//             // Valide le champ automatiquement
//             validateExpiry(expiryInput);
//         } else {
//             expiryInput.classList.remove("is-invalid");
//             expiryInput.classList.remove("is-valid");
//         }
//     });

//     expiryInput.addEventListener("blur", function() {
//         // Valide le champ lorsqu'il perd le focus si la longueur de la valeur est égale à 5
//         if (expiryInput.value.trim().length === 5) {
//             validateExpiry(expiryInput);
//         }
//     });

//     function validateExpiry(inputElement) {
//         const value = inputElement.value.trim();
//         const regexExpiry = /^(0[1-9]|1[0-2])\/\d{2}$/;

//         if (!regexExpiry.test(value)) {
//             inputElement.classList.add("is-invalid");
//         } else {
//             inputElement.classList.remove("is-invalid");
//             inputElement.classList.add("is-valid");
//         }
//     }
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const expiryInput = document.getElementById("validationCustom11");

//     expiryInput.addEventListener("input", function(event) {
//         const value = expiryInput.value.trim();

//         // Si la longueur de la valeur est égale à 5 (incluant le "/") et que les 4 premiers caractères sont des chiffres
//         if (value.length === 5 && value.charAt(2) === "/" && !isNaN(parseInt(value.substring(0, 2))) && !isNaN(parseInt(value.substring(3)))) {
//             // Valide le champ automatiquement
//             validateExpiry(expiryInput);
//         } else {
//             expiryInput.classList.remove("is-invalid");
//             expiryInput.classList.remove("is-valid");
//         }

//         // Empêche l'entrée de nouveaux caractères si la longueur de la valeur est déjà de 5 caractères
//         if (value.length >= 5) {
//             event.preventDefault();
//         }
//     });

//     expiryInput.addEventListener("blur", function() {
//         // Valide le champ lorsqu'il perd le focus si la longueur de la valeur est égale à 5
//         if (expiryInput.value.trim().length === 5) {
//             validateExpiry(expiryInput);
//         }
//     });

//     function validateExpiry(inputElement) {
//         const value = inputElement.value.trim();
//         const regexExpiry = /^(0[1-9]|1[0-2])\/\d{2}$/;

//         if (!regexExpiry.test(value)) {
//             inputElement.classList.add("is-invalid");
//         } else {
//             inputElement.classList.remove("is-invalid");
//             inputElement.classList.add("is-valid");
//         }
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    const expiryInput = document.getElementById("validationCustom11");

    expiryInput.addEventListener("input", function(event) {
        let value = expiryInput.value.trim();

        // Supprimer tous les caractères non numériques
        value = value.replace(/\D/g, '');

        // Limiter la longueur de la valeur à 4 caractères
        if (value.length > 4) {
            value = value.slice(0, 4);
        }

        // Formater la valeur pour ajouter le slash
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }

        expiryInput.value = value;

        // Valider la date d'expiration si la longueur de la valeur est égale à 5
        if (value.length === 5) {
            validateExpiry(expiryInput);
        }
    });

    // Fonction de validation de la date d'expiration
    function validateExpiry(inputElement) {
        const value = inputElement.value.trim();
        const regexExpiry = /^(0[1-9]|1[0-2])\/\d{2}$/;
        const today = new Date();
        const currentYear = today.getFullYear() % 100;
        const currentMonth = today.getMonth() + 1;

        if (!regexExpiry.test(value)) {
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
    expiryInput.addEventListener("blur", function() {
        if (expiryInput.value.trim().length === 5) {
            validateExpiry(expiryInput);
        }
    });
});







// document.addEventListener("DOMContentLoaded", function() {
//     const ibanInput = document.getElementById("validationCustomIban");

//     ibanInput.addEventListener("blur", function() {
//         const iban = ibanInput.value.trim();
//         const ibanRegex = /^[A-Z]{2}\d{2}\s*(\d{4}\s*){4}(\d{4}\s*)?$/;

//         if (!ibanRegex.test(iban)) {
//             ibanInput.classList.add("is-invalid");
//         } else {
//             ibanInput.classList.remove("is-invalid");
//             ibanInput.classList.add("is-valid");
//         }
//     });
// });


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
