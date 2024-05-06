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

 window.onload = function () {

    document.getElementById('currencyElement1').innerHTML = newPrices.productPrice;
    document.getElementById('upsell-currency-fs').innerHTML = newPrices.productAnnualPrice;
    document.getElementById('upsell-currency').innerHTML = newPrices.productAnnualPrice;


 };

 var dropdown = document.querySelector(".dropdown");
 var detailsButton = document.getElementById("detailsButton");
 var detailsIcon = document.getElementById("detailsIcon");


 function addOption(selectElement, optionText) {
    const option = document.createElement("option");
    option.text = optionText;
    selectElement.add(option);
 }


 const dropdownPays = document.getElementById("paysDropdown");
 countries.forEach(country => {
    addOption(dropdownPays, country);
 });


 const dropdownPays2 = document.getElementById("paysDropdown2");
 countries.forEach(country => {
    addOption(dropdownPays2, country);
 });


 document.addEventListener("DOMContentLoaded", function () {
    const dynamicElements = document.querySelectorAll(".currency, .byMonth-text");


    const defaultValues = [];
    dynamicElements.forEach(element => {
       defaultValues.push(element.textContent);
    });

    const radioBtn = document.getElementById("flexSwitchCheckDefault");
    const radioBtn2 = document.getElementById("flexSwitchCheckDefault2");
    radioBtn.addEventListener("change", function () {
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

          dynamicElements.forEach((element, index) => {
             element.textContent = defaultValues[index];
          });
       }
    });
 });


 document.addEventListener('DOMContentLoaded', function () {
    var qteBtn = document.querySelector('.qte-btn');
    qteBtn.addEventListener('click', function () {
       var qteModal = new bootstrap.Modal(document.getElementById('qteModal'), {
          keyboard: true
       });
       qteModal.show();
    });
 });


 document.addEventListener('DOMContentLoaded', function () {
    const inDdButton = document.querySelector('.in_dd_button');
    inDdButton.addEventListener('click', function () {
       const qteModal = new bootstrap.Modal(document.getElementById('qteModal'), {
          keyboard: true
       });
       qteModal.show();
    });
 });

 document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('invalidCheck_checked');
    const deliveryFormContainers = document.querySelectorAll('.delivery-form-container');
    const cgCheckbox = document.getElementById("cg_checkbox");

    if (checkbox && deliveryFormContainers) {
       checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
             deliveryFormContainers.forEach(function (container) {
                container.classList.add('d-none');
             });
          } else {
             deliveryFormContainers.forEach(function (container) {
                container.classList.remove('d-none');
             });
          }
       });
    } else {
       console.error('L\'élément checkbox ou delivery-form-container est introuvable.');
    }
 });


 window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
       navbar.classList.add('navbar-scrolled');
    } else {
       navbar.classList.remove('navbar-scrolled');
    }
 });

 document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('.input-number');

    inputs.forEach(function (input) {
       input.addEventListener('input', function () {
          if (this.value == 1) {
             this.classList.add('value-one');
          } else {
             this.classList.remove('value-one');
          }
       });
    });

    var incrementButtons = document.querySelectorAll('.input-number-increment');
    var decrementButtons = document.querySelectorAll('.input-number-decrement');

    incrementButtons.forEach(function (button) {
       button.addEventListener('click', function () {
          var input = this.closest('.input-number-group').querySelector('.input-number');
          var val = parseInt(input.value, 10);
          if (val < 99) {
             input.value = val + 1;
          }
       });
    });

    decrementButtons.forEach(function (button) {
       button.addEventListener('click', function () {
          var input = this.closest('.input-number-group').querySelector('.input-number');
          var val = parseInt(input.value, 10);
          if (val > 1) {
             input.value = val - 1;
          }
       });
    });
 });

 document.addEventListener("DOMContentLoaded", function () {
    const modifyButton = document.querySelector(".modal-modify-btn");

    modifyButton.addEventListener("click", function () {
       const inputValue = parseDecimal(document.getElementById("input-modal").value);


       document.querySelectorAll(".currency, .dropdown-currency").forEach(currencyElement => {
          let originalValue = parseDecimal(currencyElement.getAttribute("data-original-value"));
          let updatedValue = (originalValue * inputValue).toFixed(2);
          currencyElement.textContent = updatedValue.replace('.', ',') + " €";
       });


       document.querySelectorAll(".qte-btn-page, .qte-btn_text").forEach(btnElement => {
          btnElement.textContent = "Qté " + inputValue.toString().replace('.', ',');
       });

       const modal = document.getElementById("qteModal");
       const modalInstance = bootstrap.Modal.getInstance(modal);
       modalInstance.hide();
    });


    document.getElementById("input-modal").addEventListener("input", function () {
       const inputValue = parseDecimal(this.value);
       if (inputValue === 1) {
          document.querySelectorAll(".currency, .dropdown-currency").forEach(currencyElement => {
             let originalValue = parseDecimal(currencyElement.getAttribute("data-original-value"));
             currencyElement.textContent = originalValue.toFixed(2).replace('.', ',') + " €";
          });
       }
    });


    document.querySelectorAll(".currency, .dropdown-currency").forEach(currencyElement => {
       let originalValue = parseDecimal(currencyElement.textContent.replace(' €', ''));
       currencyElement.setAttribute("data-original-value", originalValue);
    });


    function parseDecimal(value) {

       return parseFloat(value.replace(',', '.'));

    }
 });


 document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("validationCustom01");
    const emailError = document.getElementById("emailError");

    emailInput.addEventListener("blur", function () {
       const email = emailInput.value.trim();
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

       if (!emailRegex.test(email)) {

          emailInput.classList.add("is-invalid");
          emailError.style.display = "block";
       } else {

          emailInput.classList.remove("is-invalid");
          emailInput.classList.add("is-valid");
          emailError.style.display = "none";
       }
    });
 });


 document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("validationCustom21");

    phoneInput.addEventListener("blur", function () {
       const phoneNumber = phoneInput.value.trim();
       const phoneRegex = /^0[1-9]([ .-]?[0-9]{2}){4}$/;

       if (!phoneRegex.test(phoneNumber)) {

          phoneInput.classList.add("is-invalid");
          document.getElementById("phoneError").style.display = "block";
       } else {

          phoneInput.classList.remove("is-invalid");
          phoneInput.classList.add("is-valid");
          document.getElementById("phoneError").style.display = "none";
       }
    });
 });

 const titulaireDuCompteInput = document.getElementById("validationCustomUsername");

 titulaireDuCompteInput.addEventListener("blur", function () {
    const titulaireDuCompte = titulaireDuCompteInput.value.trim();
    const titulaireDuCompteRegex = /^[a-zA-ZÀ-ÿ\s-]{1,}$/;

    if (!titulaireDuCompteRegex.test(titulaireDuCompte)) {
       titulaireDuCompteInput.classList.add("is-invalid");
    } else {
       titulaireDuCompteInput.classList.remove("is-invalid");
       titulaireDuCompteInput.classList.add("is-valid");
    }
 });


 document.addEventListener("DOMContentLoaded", function () {
    const additionalInput = document.getElementById("validationCustom02");
    const ibanInput = document.getElementById("validationCustomIban");
    const errorMessage = document.getElementById("errorMessage");

    additionalInput.addEventListener("blur", function () {
       validateInput(additionalInput);
    });

    ibanInput.addEventListener("blur", function () {
       validateInput(ibanInput);
    });

    function validateInput(inputElement) {
       const value = inputElement.value.trim();
       const regex = /^[A-Z]{2}\d{2}\s*(\d{4}\s*){4}(\d{4}\s*)?$/;

       if (!regex.test(value)) {
          inputElement.classList.add("is-invalid");
          errorMessage.style.display = "block";
       } else {
          inputElement.classList.remove("is-invalid");
          inputElement.classList.add("is-valid");
          errorMessage.style.display = "none";
       }
    }
 });

 document.addEventListener("DOMContentLoaded", function () {
    const cardInput = document.getElementById("validationCustom02");
    const cardErrorMessage = document.getElementById("cardErrorMessage");

    cardInput.addEventListener("blur", function () {
       validateCardInput(cardInput);
    });

    function validateCardInput(inputElement) {
       const value = inputElement.value.trim();
       const regex = /^[A-Z]{2}\d{2}\s*(\d{4}\s*){4}(\d{4}\s*)?$/;

       if (!regex.test(value)) {
          inputElement.classList.add("is-invalid");
          cardErrorMessage.style.display = "block";
       } else {
          inputElement.classList.remove("is-invalid");
          inputElement.classList.add("is-valid");
          cardErrorMessage.style.display = "none";
       }
    }
 });


 document.addEventListener("DOMContentLoaded", function () {
    const expirationInput = document.getElementById("validationCustom11");
    const cardDateErrorMessage = document.getElementById("cardDateErrorMessage");

    expirationInput.addEventListener("input", function (event) {
       let value = expirationInput.value.trim();


       value = value.replace(/\D/g, '');


       if (value.length > 4) {
          value = value.slice(0, 4);
       }


       if (value.length > 2) {
          value = value.slice(0, 2) + '/' + value.slice(2);
       }

       expirationInput.value = value;


       validateExpiration(expirationInput);
    });


    function validateExpiration(inputElement) {
       const value = inputElement.value.trim();
       const regexExpiration = /^(0[1-9]|1[0-2])\/\d{2}$/;
       const today = new Date();
       const currentYear = today.getFullYear() % 100;
       const currentMonth = today.getMonth() + 1;


       const month = parseInt(value.slice(0, 2));
       if (month < 1 || month > 12) {
          inputElement.classList.add("is-invalid");
          cardDateErrorMessage.textContent = "Le mois d'expiration de votre carte doit être compris entre 01 et 12.";
          cardDateErrorMessage.style.display = "block";
          return;
       }

       if (!regexExpiration.test(value)) {
          inputElement.classList.add("is-invalid");
          cardDateErrorMessage.textContent = "La date d'expiration de votre carte est incomplète.";
          cardDateErrorMessage.style.display = "block";
       } else {
          const [expMonth, expYear] = value.split('/');
          const expiryDate = new Date(2000 + parseInt(expYear), parseInt(expMonth) - 1);

          if (expiryDate < today) {
             inputElement.classList.add("is-invalid");
             cardDateErrorMessage.textContent = "L'année d'expiration de votre carte est définie dans le passé.";
             cardDateErrorMessage.style.display = "block";
          } else {
             inputElement.classList.remove("is-invalid");
             inputElement.classList.add("is-valid");
             cardDateErrorMessage.style.display = "none";
          }
       }
    }


    expirationInput.addEventListener("blur", function () {
       validateExpiration(expirationInput);
    });
 });

 document.addEventListener("DOMContentLoaded", function () {
    const sepaButton = document.querySelector(".sepa-btn");
    const cardErrorMessage = document.getElementById("cardErrorMessage");
    const cardDateErrorMessage = document.getElementById("cardDateErrorMessage");
    const cardCVCErrorMessage = document.getElementById("cardCVCErrorMessage");

    sepaButton.addEventListener("click", function () {

       cardErrorMessage.style.display = "none";
       cardDateErrorMessage.style.display = "none";
       cardCVCErrorMessage.style.display = "none";
    });
 });


 document.addEventListener("DOMContentLoaded", function () {
    const cvcInput = document.getElementById("validationCustom32");
    const cvcErrorMessage = document.getElementById("cardCVCErrorMessage");

    cvcInput.addEventListener("input", function (event) {
       let value = cvcInput.value.trim();


       value = value.replace(/\D/g, '');


       if (value.length > 4) {
          value = value.slice(0, 4);
       }

       cvcInput.value = value;


       validateCVC(cvcInput);
    });


    function validateCVC(inputElement) {
       const value = inputElement.value.trim();
       const regexCVC = /^\d{3,4}$/;

       if (!regexCVC.test(value)) {
          inputElement.classList.add("is-invalid");
          cvcErrorMessage.textContent = "Le code de sécurité de votre carte est incomplet.";
          cvcErrorMessage.style.display = "block";
       } else {
          inputElement.classList.remove("is-invalid");
          inputElement.classList.add("is-valid");
          cvcErrorMessage.style.display = "none";
       }
    }


    cvcInput.addEventListener("blur", function () {
       validateCVC(cvcInput);
    });
 });


 document.getElementById("toggleAdresseManuelle").addEventListener("click", function () {
    var adresseManuelleDiv = document.getElementById("adresseManuelle");
    if (adresseManuelleDiv.style.display === "none") {
       adresseManuelleDiv.style.display = "block";
    } else {
       adresseManuelleDiv.style.display = "none";
    }
 });


 document.addEventListener('DOMContentLoaded', function () {
    const promoBtn = document.querySelector('.promo-btn');

    promoBtn.addEventListener('click', function (event) {

       event.preventDefault();


       dropdown.classList.toggle('open');
    });
    console.log(promoBtn);
    console.log(dropdown);
 });


 function transformToInput(event) {

    event.stopPropagation();


    var inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group", "mb-3");


    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.classList.add("form-control");
    inputElement.setAttribute("placeholder", "Ajouter un code promotionnel");
    inputElement.setAttribute("aria-label", "Recipient's username");
    inputElement.setAttribute("aria-describedby", "button-addon2");


    inputElement.addEventListener("input", showApplyButton);


    inputGroup.appendChild(inputElement);


    var promoContainer = document.getElementById("promo-container");
    promoContainer.innerHTML = '';
    promoContainer.appendChild(inputGroup);


    setTimeout(function () {
       inputElement.focus();
    }, 0);


    inputElement.style.borderBottomRightRadius = "6px";
    inputElement.style.borderTopRightRadius = "6px";
 }


 function showApplyButton() {
    var inputElement = document.querySelector("#promo-container input");


    var applyButton = document.createElement("button");
    applyButton.textContent = "Appliquer";
    applyButton.setAttribute("type", "button");
    applyButton.classList.add("btn", "btn-outline-secondary", "position-absolute", "end-0", "y-50", "z-1");
    applyButton.setAttribute("id", "button-addon2");


    applyButton.addEventListener("click", function (event) {
       event.preventDefault();
       applyButton.remove();
    });


    inputElement.parentNode.appendChild(applyButton);


    if (inputElement.value.trim() === "") {
       applyButton.style.display = "none";
    }


    inputElement.addEventListener("input", function () {
       if (inputElement.value.trim() === "") {
          applyButton.style.display = "none";
       } else {
          applyButton.style.display = "block";
       }
    });


    inputElement.removeEventListener("input", showApplyButton);
 }


 document.addEventListener("DOMContentLoaded", function () {
    const sepaBtn = document.querySelector('.sepa-btn');
    const cardBtn = document.querySelector('.card-btn');
    const creditCardBlocks = document.querySelectorAll('.creditCardBlock');
    const sepaBlocks = document.querySelectorAll('.sepaBlock');

    function afficherSEPA(event) {
       event.preventDefault();
       sepaBtn.classList.add('active');
       cardBtn.classList.remove('active');
       creditCardBlocks.forEach(block => block.style.display = 'none');
       sepaBlocks.forEach(block => block.style.display = 'block');
    }

    function afficherCarte(event) {
       event.preventDefault();
       cardBtn.classList.add('active');
       sepaBtn.classList.remove('active');
       creditCardBlocks.forEach(block => block.style.display = 'block');
       sepaBlocks.forEach(block => block.style.display = 'none');
    }

    sepaBtn.addEventListener('click', afficherSEPA);
    cardBtn.addEventListener('click', afficherCarte);
 });

 document.addEventListener('DOMContentLoaded', function () {

    var boutonToggle = document.getElementById('toggleAdresseManuelle');
    var boutonToggle2 = document.getElementById('toggleAdresseManuelle2');
    var conteneurChamps = document.getElementById('conteneurChamps');
    var conteneurChamps2 = document.getElementById('conteneurChamps2');


    function toggleAdresseManuelle(event) {

       event.preventDefault();


       conteneurChamps.style.display = conteneurChamps.style.display === 'none' ? 'block' : 'none';
       conteneurChamps2.style.display = conteneurChamps2.style.display === 'none' ? 'block' : 'none';
    }


    boutonToggle.addEventListener('click', toggleAdresseManuelle);
    boutonToggle.addEventListener('click', toggleAdresseManuelle2);
 });

 document.addEventListener('DOMContentLoaded', function () {

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


    function toggleAdresseManuelle(event) {

       event.preventDefault();


       adressField.classList.add('d-none');
       codePostale.classList.remove('d-none');
       ville.classList.remove('d-none');
       conteneurChamps.style.display = 'block';
       conteneurChamps2.style.display = 'block';


       boutonToggle.style.display = 'none';
    }

    function toggleAdresseManuelle2(event) {

       event.preventDefault();


       adressField2.classList.add('d-none');
       codePostale2.style.display = 'block';
       ville2.style.display = 'block';
       conteneurChamps3.style.display = 'block';
       conteneurChamps4.style.display = 'block';


       boutonToggle2.style.display = 'none';
    }


    boutonToggle.addEventListener('click', toggleAdresseManuelle);
    boutonToggle2.addEventListener('click', toggleAdresseManuelle2);
 });


 document.addEventListener("DOMContentLoaded", function () {
    var politiqueModal = new bootstrap.Modal(document.getElementById('politiqueModal'), {
       keyboard: true
    });


    var openModals = document.querySelectorAll(".open-modal");

    var modalMentionsLegalesBtn = document.querySelector(".modal-mentions-légales");
    var modalRemboursementBtn = document.querySelector(".modal-remboursement");
    var modalContactBtn = document.querySelector(".modal-contact");

    var modalMentionsBlock = document.querySelector(".modal-body-mentions");
    var remboursementsModalBlock = document.querySelector(".remboursements-modal");
    var contactModalBlock = document.querySelector(".contact-modal");

    openModals.forEach(function (openModal) {
       openModal.addEventListener('click', function (event) {
          event.preventDefault();
          console.log("1111");
          var dataPolitique = this.getAttribute("data-politique");
          console.log(this);
          console.log(dataPolitique);
          politiqueModal.show();

          var clicOnModal = document.querySelector(".modal-" + dataPolitique);
          clicOnModal.click();
          clicOnModal.focus();
       });
    });


    modalMentionsLegalesBtn.addEventListener("click", function () {

       modalMentionsBlock.classList.remove("d-none");

       remboursementsModalBlock.classList.add("d-none");
       contactModalBlock.classList.add("d-none");
    });

    modalRemboursementBtn.addEventListener("click", function () {

       remboursementsModalBlock.classList.remove("d-none");

       modalMentionsBlock.classList.add("d-none");
       contactModalBlock.classList.add("d-none");
    });

    modalContactBtn.addEventListener("click", function () {

       contactModalBlock.classList.remove("d-none");

       modalMentionsBlock.classList.add("d-none");
       remboursementsModalBlock.classList.add("d-none");
    });
 });


 const bsDropdown = new bootstrap.Dropdown(dropdown);
 const dropdownBack = document.querySelector(".dropdownBack");

 function toggleDetails() {

    var promoTextDiv = document.getElementById("promo-text");
    var fakeClickEvent = new Event("click");
    transformToInput(fakeClickEvent);


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

 document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
       bsDropdown.hide();
    }
 });
