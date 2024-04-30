var phoneInput = document.getElementById("validationCustom21");
var emailInput = document.getElementById("validationCustom01");

// Vérifier si la classe is-invalid est présente
if (phoneInput.classList.contains("is-invalid")) {
    // Appliquer le style border-bottom: none
    phoneInput.style.borderTop = "";
    // Supprimer le style border-top: none s'il est appliqué
    emailInput.style.borderBottom = "none"
}

