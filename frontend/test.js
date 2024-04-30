<title>Complexe Cérébral</title>

<link rel="icon" type="image/svg+xml" href="https://cdn.cellinnov.com/images/logo/Logo_mini_sante.svg" />

<script>
    //Logo
    var logoCin = 'https://cdn.cellinnov.com/images/logo/logo_sante.svg'
    //Product type
    var typeProduct_singular = 'boîte';
    var typeProduct_plurial = typeProduct_singular + 's';
    //Renew price
    var renewPrice_1 = '';
    var renewPrice_2 = 'Puis 129.60€ ';
    var renewPrice_3 = 'Puis 239.40€ ';
    //Economy product
    var economy_A = '';
    var economy_B = '63.30€';
    var economy_C = '139.80€';
    var economy_D = '';
    var economy_E = '49.90€';
    var economy_F = '99.80€';
    //Old price
    var oldPrice_A = '';
    var oldPrice_B = '<s>149.70€</s>';
    var oldPrice_C = '<s>299.40€</s>';
    var oldPrice_D = '';
    var oldPrice_E = '<s>149.70€</s>';
    var oldPrice_F = '<s>299.40€</s>';
    //Box price
    let fieldBoxPrice_A = false;
    let fieldBoxPrice_B = true;
    let fieldBoxPrice_C = true;
    let fieldBoxPrice_D = false;
    let fieldBoxPrice_E = true;
    let fieldBoxPrice_F = true;
    // Button UPS Panier
    var text_ups_A = 'les frais de port';
    var text_ups_B = '13€';
    var text_ups_C = '40€';
    //Img general
    var link_Image = 'https://cdn.cellinnov.info/uploads/CIN/images/produits/BRN/BRN_color.png';
    // Create array for carousel images
    var featuredImage = [
        'https://cdn.cellinnov.info/uploads/CIN/images/produits/BRN/BRN_2plus1.gif',
        'https://cdn.cellinnov.info/uploads/CIN/images/produits/BRN/BRN_4plus2.gif',
        'https://cdn.cellinnov.info/uploads/CIN/images/produits/BRN/BRN_1.png',
    ]
</script>

<style>
    :root {
        --primary-color: #BA0C2F;
        --secondary-color: #002A3A;
    }
</style>



<!-- Global CSS -->
    <link rel="stylesheet" href="https://bdc.cellinnov.com/common/CSS/cinfr_bdc_neo.css">

    <!-- Global JS -->
    <script src="https://bdc.cellinnov.com/common/JS/cinfr_bdc_neo.js"></script>

    <!-- TrustBox script -->
    <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
    <!-- End TrustBox script -->

    <!-- Avis-Vérifiés -->
    <script charset="utf-8" src="https://cl.avis-verifies.com/fr/cache/f/6/7/f67da593-0a81-aef4-2dc9-938caa042c20/AWS/PRODUCT_API/tag.min.js"></script>

    <!-- FontAwesome 5 -->
    <script src="https://kit.fontawesome.com/e51344c838.js" crossorigin="anonymous"></script>

    <!--Bootstrap Icons-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">

    <!--Lucky Orange Analytics-->
    <script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=15a8d9dc"></script>

	/** FONTS **/
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');

/*******************************
* COMMON
*******************************/

/*******************************
* COMMON
*******************************/

/*******************************
* COMMON
*******************************/

*
{
    font-family: 'Montserrat', sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    overflow-x: hidden;
    color: #002A3A;
}

.fs-1{font-size:calc(1.375rem + 1.5vw)!important}
.fs-2{font-size:calc(1.325rem + .9vw)!important}
.fs-3{font-size:calc(1.3rem + .6vw)!important}
.fs-4{font-size:calc(1.275rem + .3vw)!important}
.fs-5{font-size:1.1rem!important}
.fs-6{font-size:1rem!important}

.mw-100 { max-width: 100%; }
.mw-90 { max-width: 90%; }
.mw-80 { max-width: 80%; }
.mw-70 { max-width: 70%; }
.mw-60 { max-width: 60%; }
.mw-50 { max-width: 50%; }
.mw-40 { max-width: 40%; }
.mw-30 { max-width: 30%; }
.mw-20 { max-width: 20%; }
.mw-10 { max-width: 10%; }

.primary-color {
    color: var(--primary-color);
}

.secondary-color {
    color: var(--secondary-color);
}

.green {
    color: #97D700;
}

.dark_blue {
    color: #002A3A;
}

.red {
    color: #BA0C2F;
}

.orange {
    color: #ED8B00;
}

.purple {
    color: #5C068C;
}

.blue {
    color: #00A6D6;
}

.cyan {
    color: #5CB8B2;
}

.pink {
    color: #F04E98;
}

.bg-orange {
    background-color: #ED8B00;
}

.bg-orange-light {
    background-color: rgb(237 139 0 / 10%);
}

.coral {
    color: #FFCD00;
}

.drop-shadow {
    filter: drop-shadow(5px 4px 2px #ccc);
}

.pop {
    cursor: zoom-in;
}

.livraison {
    font-size: 12px !important;
}

h1 {
    font-size: 2.5rem;
    font-weight: 100;
}

h2 {
    color: var(--primary-color);
}

a {
    color: var(--primary-color);
}

a:hover {
        color: #002A3A;
    }

button:focus,
button:focus-visible {
    outline: unset;
}

.btn-outline-primary {
    color: var(--secondary-color);
    border-color: var(--secondary-color);
    background-color: #ffffff;
    border: 2px solid;
}

.btn-outline-primary:hover,
.btn-outline-primary:not(:disabled):not(.disabled):active {
    color: #ffffff;
    border-color: var(--secondary-color);
    background-color: var(--secondary-color);
    border: 2px solid;
}

/* EFFET CLIGNOTANT */
.blinking {
    animation: animate 2s linear infinite;
}

@keyframes animate {
    0% {
        opacity: 0.2;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0.2;
    }
}

/* EFFET PULSE */
.pulsing-button {
    cursor: pointer;
    box-shadow: 0 0 0 0 rgba(237, 139, 0, 1);
    transform: scale(1);
    animation: pulse 2s infinite;
}

.pulsing-button:hover {
    background: #ffb54d;
    color: #FFF;
    animation: none;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(237, 139, 0, 0.7);
    }

    70% {
        box-shadow: 0 0 0 20px rgba(237, 139, 0, 0);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(237, 139, 0, 0);
    }
}

/*******************************
* NAV BAR
*******************************/

.shadow-bar {
    box-shadow: 0 15px 10px -15px rgb(0 0 0 / 10%);
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link:focus {
    background-color: #ffffff;
    border: none;
    color: var(--primary-color)!important;
    font-weight: 700;
}

#pageTop,
#a-propos-container,
#avis-container,
#a-propos-cellinnov,
#contactContainer {
    top: -60px;
}

/*******************************
* CAROUSEL
*******************************/

#carouselWithImageIndicators .carousel-inner {
    max-width: 200px;
}

#carouselWithImageIndicators .carousel-indicators {
    position: absolute;
    right: unset!important;
    bottom: 0;
    left: 0;
    top: 0;
    z-index: 1!important;
    display: flex;
    justify-content: center;
    padding-left: 0;
    margin-right: unset!important;
    margin-left: unset!important;
}

#carouselWithImageIndicators .carousel-indicators li {
  border: 2px solid var(--primary-color);
  background-color: #fff;
  height: 30px;
  width: 30px;
  margin-top: 2px;
  margin-bottom: 2px;
  opacity: 0.5;
}

#carouselWithImageIndicators .carousel-indicators .active {
  opacity: 1;
}

/*******************************
* OFFRE
*******************************/

#offer-container .choice-button-container button,
#offer-container .choice-button-container a {
    color: #FFF;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 3px;
    border: none;
    padding: 1rem 2.75rem;
    border-radius: 50px;
    background: linear-gradient(90deg, rgb(100% 70.98% 30.196%) 0%, rgb(98.757% 68.081% 24.881%) 6.25%, rgb(97.67% 65.544% 20.229%) 12.5%, rgb(96.727% 63.344% 16.196%) 18.75%, rgb(95.919% 61.458% 12.739%) 25%, rgb(95.235% 59.862% 9.812%) 31.25%, rgb(94.665% 58.531% 7.372%) 37.5%, rgb(94.197% 57.441% 5.374%) 43.75%, rgb(93.824% 56.569% 3.775%) 50%, rgb(93.532% 55.889% 2.529%) 56.25%, rgb(93.313% 55.378% 1.592%) 62.5%, rgb(93.157% 55.012% 0.922%) 68.75%, rgb(93.051% 54.767% 0.472%) 75%, rgb(92.988% 54.618% 0.199%) 81.25%, rgb(92.955% 54.542% 0.059%) 87.5%, rgb(92.943% 54.514% 0.007%) 93.75%, rgb(92.941% 54.51% 0%) 100% );
}

#offer-container .choice-button-container button:hover,
#offer-container .choice-button-container a:hover {
    background: #ffb54d;
}

.old_price {font-size: 0.8rem;}
.custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:none}
.custom-radio .custom-control-input:checked~.custom-control-label::before{box-shadow:inset 0 0 0 2px #fff}
.custom-control .custom-control-label::before{left:1em;top:1em;border-color:#484848}
.custom-control-input:checked~.custom-control-label::before{color:#fff;border-color:var(--primary-color);background-color:var(--primary-color)}

.custom-control-input:checked~.custom-control-label {border-color: var(--primary-color)!important; border-width: 2px!important;}
.custom-control .custom-control-label:hover {border-color: var(--secondary-color)!important;}

.badge-primary {
    background-color: #ED8B00;
}

.badge-success {
    /* color: #002A3A!important; */
    background-color: var(--primary-color)!important;
    top: -15%;
    left: -4px;
}

.badge {white-space: break-spaces!important;}

.fixed-bottom {
z-index: 9!important;
}


/*******************************
* INGREDIENT
*******************************/

.border-ingredient {border: 4px solid var(--primary-color);}

#ingredients-container .ingredients-list-images .active img {
    opacity: 1;
}

#ingredients-container .ingredients-list-images img {
    max-width: 100px;
    opacity: .3;
}

#ingredients-container .ingredients-list-images img:hover {
    cursor: pointer;
    opacity: 1;
    transform: scale(1.1);
}

#ingredients-container #pills-tab a:hover {
    text-decoration: none;
}

/*******************************
* ACCORDION
*******************************/

.accordion>.card>.card-header {
    border: unset;
    padding-left: unset;
    background-color: unset;
    padding: 1rem;
}

.accordion>.card>.card-header h2 button {
    font-size: 1.1rem !important;
}

.accordion .card-body {
    margin-right: 1.25rem;
}

.accordionChevron::before {
    content: '+';
    position: absolute;
    top: 38px;
    right: 2rem;
    transform: translateY(-50%);
    display: block;
    font-size: 1.5rem;
}

.accordionChevron[aria-expanded='true']::before {
    content: '-';
    color: #fff;
    top: 36px;
}

.accordion>.card {
    border-style: solid;
    border-width: 1px 0px;
    border-radius: unset;
}

.accordion>.card:first-of-type {
    border: unset;
}

.accordion>.card>.card-header .btn[aria-expanded=true] {
    background: var(--primary-color);
    color: #FFFFFF;
}

.accordion>.card>.card-header .btn:hover {
    background: var(--primary-color);
    color: #FFFFFF;
}

.btn:focus,
.btn.focus {
    outline: unset !important;
    box-shadow: unset !important;
}

/*******************************
* Picto
*******************************/

.picto {
    background: rgb(237 139 0 / 10%);
}

/*******************************
* FOOTER
*******************************/
footer {
    background-color: #002A3A;
    color: #FFF;
    position: relative;
    z-index: 1031;
}

footer h5 {
    margin-bottom: 1.5rem;
    font-size: 600!important;
}

footer ul li {
    margin-bottom: 0.6rem;
}

footer a {
    text-decoration: none;
    font-style: normal;
    color: #FFFFFF;
}

footer a:hover {
    color: #fff;
}

footer .delivery {
    max-width: 170px;
}

.footer-copyright {
    font-size: 80%;
}

svg:hover path#pageUp_circle {
    fill: var(--primary-color);
    transition: all ease 0.3s;
}

svg path#pageUp_chevron {
    fill: var(--primary-color);
}

svg:hover path#pageUp_chevron {
    fill: #FFFFFF;
    transition: all ease 0.3s;
}

footer .creditCard {
    max-width: 250px;
}

/*footer palyance*/

footer .palyance-logo-container {
    background-color: #FFF;
    max-width: 42px;
    border-radius: 2px;
    cursor: pointer;
}

footer .palyance-logo-container img {
    padding: 2px;
}


/*******************************
* MODALS
*******************************/

.modal-content {
    border: unset;
}

.modal-header {
    border-bottom: unset;
}

.modal-body {
    padding: 1.5rem;
}

.modal-footer {
    border-top: unset;
}

.modal_call {
    text-decoration: none;
    font-style: normal;
}

.close {
    opacity: unset;
}

/*modal footer palyance */

#palyance-info .modal-body {
word-break: break-word;
}

#palyance-info h5 {
color: #00599D;
text-transform: uppercase;
font-weight: normal;
text-align: center;
margin-bottom: 1.5rem;
}

#palyance-info img {
max-width: 150px;
display: block;
margin-left: auto;
margin-right: auto;
margin-bottom: 1.5rem;
}

/*******************************
* PANIER
*******************************/

/* #panier h2 {
    font-size: 1.6rem;
} */

#panier button.close {
    z-index: 10;
}

#panier .border {
    border-radius: 4px;
}

#panier .alert-warning {
    font-size: smaller;
    margin: 1rem;
}

#panier button.close {
    position: absolute;
    right: 10px;
    top: 10px;
}

#panier .numbers {
    background-color: var(--primary-color);
    color: white;
    border: 1px solid var(--primary-color);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    text-align: center;
}

.btn-link {
    color: var(--secondary-color);
}

.btn-link:hover {
    color: var(--secondary-color)!important;
}

/* Ã©vite l'effet au clic de fermeture */
.modal.modal-static .modal-dialog {
-webkit-transform: none !important;
transform: none !important;
}

.modal.fade.right:not(.show) .modal-dialog {
    -webkit-transform: translate3d(50%, 0, 0);
    transform: translate3d(50%, 0, 0)
}

.modal .modal-dialog.modal-right {
    right: 0;
    z-index: 1000;
}

.modal-full-height {
    position: absolute;
    top: 0;
    right: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 100% !important;
    margin: 0;
}

.modal-right {
    max-width: 100%;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    background: #fff;
}

.modal-right .modal-content {
    border-radius: unset;
    height: max-content !important;
}

/* BUTTON UPSELL PANIER */
.btn-ups-panier {
    top: 0;
    left: 0;
    transition: all .15s linear 0s;
    position: relative;
    display: inline-block;
    padding: 0.75rem 1.25rem 0.95rem;
    background-color: #fff;
    border-radius: 4px;
    color: #002A3A;
    font-weight: 600;
    box-shadow: 5px 5px 0 rgb(237 139 0 / 30%);
    text-decoration: none;
    border-width: 2px;
    border-color: #ED8B00;
    border-style: solid;
    cursor: pointer;
}

.btn-ups-panier:hover {
    top: 5px;
    left: 4px;
    box-shadow: 0 0 0 rgb(237 139 0 / 30%);
    background-color: #fff;
    border-color: #ED8B00;
    color: #002A3A;
    text-decoration: none;
}

.border-tertiary {
    border-color: var(--primary-color)!important;
}

#ups_panier {
    max-width: 500px;
}

/*******************************
* FORM
*******************************/
.form-check{
    margin-left: 15px;
    margin-right: 15px;
}
.form-check-input {
    margin-top: .4rem;
}

.form-check .form-check-input[type=checkbox] {
    border-radius: .25em;
    height: 15px;
    width: 15px;
    top: -4px;
}

.form-group {
    position: relative;
}

.form-fields .vanguard-contact-form-label {
    font-weight: 400 !important;
    position: absolute;
    top: -16px;
    left: 20px;
    padding: 0 5px;
    font-size: 0.9rem!important;
    background-color: #ffffff;
    width: auto!important;
}

.vanguard-optins-container {
    font-size: 0.8rem;
}

.vanguard-form-title {
    border-bottom: unset !important;
    padding-left: 20px !important;
}

.vanguard-billing-form .form-check {
    margin-left: unset;
    margin-top: 0.5rem;
}

.vanguard-billing-form .form-control {
    height: 40px !important;
}

.vanguard-shipping-form .col-sm-12 .form-group,
.vanguard-billing-form .col-sm-12 .form-group {
    display: block;
    width: 50%;
    float: left;
    margin: 0 0 25px 0;
    padding: 0 15px;
}

.vanguard-shipping-form .col-sm-12,
.vanguard-billing-form .col-sm-12 {
    margin: 0;
    padding: 0;
    display: block;
}

.vanguard-shipping-form .col-sm-12:after,
.vanguard-billing-form .col-sm-12:after {
    display: table;
    content: '';
    clear: both;
}

@media screen and (max-width: 640px) {

    .vanguard-shipping-form .col-sm-12 .form-group,
    .vanguard-billing-form .col-sm-12 .form-group {
        width: 100%;
    }
}

/*******************************
* RECAP DE PAIEMENT
*******************************/
#panier .module-block-recapitulative {
    border: unset !important;
    background-color: unset !important;
    padding: 0px 20px !important;
    margin-top: unset !important;
}

#panier .module-block-offer-choice-name div span.text-muted {
    display: none;
}

#panier .module-block-offer-choice-name {
    margin-bottom: 10px;
}

#panier .module-block-offer-choice-name div:nth-child(1) {
    display: none;
}

#panier .module-block-offer-choice-name div:nth-child(2) {
    max-width: 100%;
    flex: 100%;
}

#panier .module-block-recapitulative h4 {
    display:none;
}

#panier .module-block-payment-at-order-time {
    display: none;
}

#panier .module-block-offer-long-description {
    margin-bottom: 1.5rem !important;
}

#panier .module-block-offer-long-description div:nth-child(1) {
    display: none;
}

#panier .module-block-offer-long-description div:nth-child(2) {
    max-width: 100%;
    flex: 100%;
}


#panier .module-block-offer-price .text-right,
.module-block-offer-total .text-right,
.module-block-offer-delivery .text-right,
.module-block-offer-choice-payment-method .text-right {
    text-align: unset !important;
    color: var(--primary-color);
    font-weight: 700;
}

.module-block-recapitulative .module-block-recapitulative-max-width {
    max-width: unset !important;
}

.vanguard-payment-method-switch .vanguard-payment-method-switch-bank-card {
    line-height: 50px !important;
    text-align: center !important;
}

.vanguard-payment-method-switch {
    border-radius: 50px !important;
    max-width: 300px !important;
    margin: auto !important;
    height: 50px !important;
}

.vanguard-payment-method-switch .vanguard-payment-method-switch-indicator {
    border-radius: 50px !important;
}

.vanguard-payment-iframe-container {
    margin-top: unset !important;
}

.vanguard-shipping-fees {
    color: #4169E1 !important;
    margin-top: unset !important;
    font-weight: 600 !important;
    text-align: unset !important;
    font-size: 0.9rem !important;
}

option[value="ASM"],
option[value="GUM"],
option[value="ISR"],
option[value="MNP"],
option[value="PRI"],
option[value="VIR"],
option[value="UMI"],
option[value="FXX"],
option[value="USA"],
option[value="AFG"],
option[value="ALB"],
option[value="AGO"],
option[value="IRQ"],
option[value="PRK"],
option[value="CHE"],
option[value="SYR"],
option[value="GHA"],
option[value="GBR"]  {
    display: none !important;
}


/*******************************
* MEDIA QUERIES
*******************************/
@media only screen and (min-width:375px){
    .container{max-width:540px}
    #carouselWithImageIndicators .carousel-inner{max-width: 265px;}
}

@media screen and (max-width: 400px) {
    .fs-5{font-size: 1rem!important;}
}

@media only screen and (min-width:425px){
    #carouselWithImageIndicators .carousel-inner{max-width: 300px;}
}

@media screen and (max-width: 480px) {
    .mw-90,
    .mw-80,
    .mw-70,
    .mw-60,
    .mw-50,
    .mw-40,
    .mw-30,
    .mw-20,
    .mw-10 {
        max-width: 100%;
    }
}

@media only screen and (max-width:767px){
    #ingredients-container .ingredients-list-images img{opacity: 1;}
    .nav-justified>.nav-link, .nav-justified .nav-item {flex-basis: auto!important;}

}

@media only screen and (min-width:768px){
    .container{max-width:720px}
    #carouselWithImageIndicators .carousel-inner{max-width: 350px;}
}

@media only screen and (max-width:768px){
    h1{font-size: 1.8rem;}
    h2{font-size: 1.4rem;}
    h3{font-size: 1.15rem;}
    #pageTop, #a-propos-container, #avis-container, #a-propos-cellinnov, #contactContainer {top: -216px;}
}

@media only screen and (min-width:992px){
    .container{max-width:960px}
}

@media only screen and (min-width:1200px){
    .fs-1{font-size:2.5rem!important}
    .fs-2{font-size:2rem!important}
    .fs-3{font-size:1.75rem!important}
    .fs-4{font-size:1.5rem!important}
}

@media only screen and (min-width:1260px){
.container{max-width:1200px}
#carouselWithImageIndicators .carousel-inner{max-width: 400px;}
}
