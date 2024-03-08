

/* ----- SECTION REGIME ALIMENTAIRE  ----- */

    // ciblage 
    let chauffeur = document.getElementById("chauffeur");
    let ptDejeuner = document.getElementById("ptDejeuner");
    let repasMidi = document.getElementById("repasMidi");
    let repasSoir = document.getElementById("repasSoir");
    let repasPonctuel = document.getElementById("repasPonctuel");
    
    // tableau des checkbox
    let tabCheckbox = [ptDejeuner,repasMidi, repasSoir, repasPonctuel]
    
    // savoir si la box est cochée
    function checkboxTrue () {
        for (let i=0; i < tabCheckbox.length; i++) {
            if (tabCheckbox[i].checked) {
                return true;
            }
        } 
        return false;
        }  
    
    // ouvre ou ferme la section
    function openOrCloseRegime (result) {
         // recuperation element section
        let elementCheckbox = document.querySelector(".regime");
        // recuperation classe section : si true classe active = ferme / si false pas de class active = ouvert
        let classActive = elementCheckbox.classList.contains("active");
        // checked true / class true
        if (result === true && classActive === true ) {  
            elementCheckbox.classList.remove("active")   
            // checked true / class false      
        } else if (result === true && classActive === false ){
            elementCheckbox.classList.remove("active") 
                // checked false / class true
        } else if ((result === false && classActive === true )){
            elementCheckbox.classList.add("active")
            // checked false / class false
        } else {
            elementCheckbox.classList.add("active")
        } 
    }

    // ecouteur
    ptDejeuner.addEventListener("click", ()=> {
        // recuperation resultat checkbox est cochée (true) ou non (false))
        let result = checkboxTrue();
        // appel fermer ou ouvrir la section 
        openOrCloseRegime (result)
    })
    // ecouteur
    repasMidi.addEventListener("click", ()=> {
         // recuperation resultat checkbox est cochée (true) ou non (false))
         let result = checkboxTrue();
         // appel fermer ou ouvrir la section 
         openOrCloseRegime (result)
    })
    // ecouteur
    repasSoir.addEventListener("click", ()=> {
         // recuperation resultat checkbox est cochée (true) ou non (false))
         let result = checkboxTrue();
         // appel fermer ou ouvrir la section 
         openOrCloseRegime (result)
    })
    // ecouteur
    repasPonctuel.addEventListener("click", ()=> {
         // recuperation resultat checkbox est cochée (true) ou non (false))
         let result = checkboxTrue();
         // appel fermer ou ouvrir la section 
         openOrCloseRegime (result)
    })

    /**ouverture ou fermeture element du dom
     * 
     * @param {} classElement 
     */
    function openOrCloseElement(classElement) {
        let element = document.querySelector(`.${classElement}`);
        // valeur de display
        let valueDisplay = element.style.getPropertyValue("display")
        if (valueDisplay === "block") {
        element.style.display = "none"; 
        } else {
            element.style.display = "block";
        }
    };

/* ----- MODALE ----- */

/** calcul la tarification
 * 
 */
function tarification ()  {
// nombre de personne 
let nombPersonne = document.getElementById("nombPersonne").value;

// chambre 
let chambre = document.getElementById("chambres").value;
let prixChambre = 0;
if (chambre === "igloos") {
    prixChambre = 560;
} else if (chambre === "laponne"){ 
    prixChambre = 880;
}

// ---  tarification service 

// chauffeur
let chauffeur = document.getElementById("chauffeur");
let prixChauffeur = 0;
if (chauffeur.checked === true) { 
prixChauffeur = 11;
}
// pt dej
let ptDejeuner = document.getElementById("ptDejeuner");
let prixPtDejeuner = 0;
if (ptDejeuner.checked === true) { 
prixPtDejeuner = 15 * nombPersonne;
}
 // Repas de midi
 let repasMidi = document.getElementById("repasMidi");
 let prixRepasMidi = 0;
 if (repasMidi.checked === true) { 
prixRepasMidi = 25 * nombPersonne;
}
 // Repas soir
 let repasSoir = document.getElementById("repasSoir");
 let prixRepasSoir = 0;
 if (repasSoir.checked === true) { 
prixRepasSoir = 25 * nombPersonne;
}
// visite
let visite = document.getElementById("visite");
let prixVisite = 0;
if (visite.checked === true) { 
prixVisite = 20;
}
// total tarification
let tarification = prixChambre + prixChauffeur + prixPtDejeuner + prixRepasMidi + prixRepasSoir + prixVisite;

let tarificationMod = document.getElementById("tarification");tarificationMod.textContent = tarification;

}

/* --- recuperation des données et transfert vers modale --*/

/**recuperation données transfert vers modale section info generale 
 * 
 */
function dataModaleInfosGenerale(){
    // ciblage donnée initiale / ciblage element à renseignier / 
    // nom
    let nom = document.getElementById("nom").value;
    let nomMod = document.getElementById("nomMod");nomMod.textContent = nom;
    // prenom
    let prenom = document.getElementById("prenom").value;
    let prenomMod = document.getElementById("prenomMod");prenomMod.textContent = prenom;
    // email
    let email = document.getElementById("email").value;
    let emailMod = document.getElementById("emailMod");emailMod.textContent = email;
    // telephone
    let telephone = document.getElementById("telephone").value;
    let telMod = document.getElementById("telMod");telMod.textContent = telephone;
    // adresse numero rue
    let numRue = document.getElementById("numRue").value;
    let numRueMod = document.getElementById("numRueMod");numRueMod.textContent = numRue;
    // adresse nom rue
    let nomRue = document.getElementById("nomRue").value;
    let nomRueMod = document.getElementById("nomRueMod");nomRueMod.textContent = nomRue;
    // adresse code postal
    let codePostal = document.getElementById("codePostal").value;
    let codePostalMod = document.getElementById("codePostalMod");codePostalMod.textContent = codePostal;
    // adresse nomrue
    let ville = document.getElementById("ville").value;
    let villeMod = document.getElementById("villeMod");villeMod.textContent = ville;
}
/**recuperation données transfert vers modale section reservation
 * 
 */
function dataReservation () {
    // chambre
    let chambre = document.getElementById("chambres").value;
    let chambreMod = document.getElementById("chambreMod");
    chambreMod.textContent = chambre;
    // nombre de personne
    let nombPersonne = document.getElementById("nombPersonne").value;
    let nombPersonneMod = document.getElementById("nombPersonneMod");
    nombPersonneMod.textContent = nombPersonne
     // date arrivéé
     let dateArrivee = document.getElementById("dateArrive").value;
     let dateArriveeMod = document.getElementById("dateArriveeMod");
     dateArriveeMod.textContent = dateArrivee
    // date depart
    let dateDepart = document.getElementById("dateDepart").value;
    let dateDepartMod = document.getElementById("dateDepartMod");
    dateDepartMod.textContent = dateDepart
}
//**recuperation données transfert vers modale section reservation
 /* 
 */
function dataService () {
    // chauffeur
    let chauffeur = document.getElementById("chauffeur");
    if (chauffeur.checked === true) { 
    let chauffeurMod = document.getElementById("chauffeurMod");
    chauffeurMod.textContent = "oui";
    } else {
        chauffeurMod.textContent = "non";
    }
    // pt dej
    let ptDejeuner = document.getElementById("ptDejeuner");
    if (ptDejeuner.checked === true) { 
    let ptDejeunerMod = document.getElementById("ptDejeunerMod");
    ptDejeunerMod.textContent = "oui";
    } else {
        ptDejeunerMod.textContent = "non";
    }
     // Repas de midi
     let repasMidi = document.getElementById("repasMidi");
     if (repasMidi.checked === true) { 
        let repasMidiMod = document.getElementById("repasMidiMod");
        repasMidiMod.textContent = "oui";
        } else {
            repasMidiMod.textContent = "non";
        }
     // Repas soir
     let repasSoir = document.getElementById("repasSoir");
     if (repasSoir.checked === true) { 
        let repasSoirMod = document.getElementById("repasSoirMod");
        repasSoirMod.textContent = "oui";
        } else {
            repasSoirMod.textContent = "non";
        }
    // Repas ponctuel (ne reconnais pas l'id !!!!!!!!)
    let repasPonctuel = document.getElementById("repasPonctuel").value;
    if (repasPonctuel.checked === true) { 
        let repasPonctuelMod = document.getElementById("repasPonctuelMod");
        repasPonctuelMod.textContent = "oui";
        } else {
            repasPonctuelMod.textContent = "non";
        }
    // visite
    let visite = document.getElementById("visite");
    if (visite.checked === true) { 
    let visiteMod = document.getElementById("visiteMod");
    visiteMod.textContent = "oui";
    } else {
        visiteMod.textContent = "non";
    }
}
//**recuperation données transfert vers modale section regime
 /* 
 */
function dataRegime () {
    // sans glutene
    let gluten = document.getElementById("gluten");
    if (gluten.checked === true) { 
    let glutenMod = document.getElementById("glutenMod");
    glutenMod.textContent = "oui";
    } else {
        glutenMod.textContent = "non";
    }
    // sans lactose
    let lactose = document.getElementById("lactose");
    if (lactose.checked === true) { 
    let lactoseMod = document.getElementById("lactoseMod");
    lactoseMod.textContent = "oui";
    } else {
        lactoseMod.textContent = "non";
    }
    // autres
    let autresAlergie = document.getElementById("autresAlergie").value;
    let autresAlergieMod = document.getElementById("autresAlergieMod");
    autresAlergieMod.textContent += autresAlergie

}
/* ------ BOUTON MODALE ET FORMUMAIRE -------*/

    // btn annuler modale => 
    // ciblage
    let btn_annuler = document.querySelector(".btn_annuler")
    // ecouteur
    btn_annuler.addEventListener("click", (event)=>{
        // pour ne pas recharger la page
        event.preventDefault();
        // element à ouvrir portant la class modal
        let classElement = "modal";
        openOrCloseElement(classElement)
    });
    
    // btn envoyer formulaire modale
    // ciblage
    let btn_payement = document.querySelector(".btn_payement")
    // ecouteur
    btn_payement.addEventListener("click", (event)=>{
        // pour ne pas recharger la page
        event.preventDefault();
        // element à ouvrir portant la class modal
        let classElement = "modal";
        openOrCloseElement(classElement)
    });
        // retour à la page formulaire

 
/* VALIDATION DES DONNEE A LA SAISIE*/

// ciblage section info generale

let nomVerif = document.getElementById("nom");
let prenomVerif = document.getElementById("prenom");
let telephoneVerif = document.getElementById("telephone");
let emailVerif = document.getElementById("email");
let nomRueVerif = document.getElementById("nomRue");
let numRueVerif = document.getElementById("numRue");
let codePostalVerif = document.getElementById("codePostal");
let villeVerif = document.getElementById("ville");
// ciblage section reservation

let nombPersonneVerif = document.getElementById("nombPersonne");
let dateArriveeVerif = document.getElementById("dateArrive");
let dateDepartVerif = document.getElementById("dateDepart");

// ecouteur infos generale

nomVerif.addEventListener("change", ()=>{
    testNom ();
});
telephoneVerif.addEventListener("change", ()=>{
    testTelephone ();
});
emailVerif.addEventListener("change", ()=>{
    testEmail ();
});
prenomVerif.addEventListener("change", ()=>{
    testPrenom ();
})
numRueVerif.addEventListener("change", ()=>{
    testNumRue ();
})
nomRueVerif.addEventListener("change", ()=>{
    testNomRue ();
})
codePostalVerif.addEventListener("change", ()=>{
    testCodePostal ();
})
villeVerif.addEventListener("change", ()=>{
    testVille ();
})

// ecouteur reservation

nombPersonneVerif.addEventListener("change", ()=>{
    testNombPersonne ();
})
dateArriveeVerif.addEventListener("change", ()=>{
    testDateArrivee ();
})
dateDepartVerif.addEventListener("change", ()=>{
    testDateDepart ();
})

// verification infos generales

/** validation des données "nom" saisies par l'utilisateur
 * 
 * @returns {boolean} false si erreur de saisie
 * @returns {boolean} true aucune erreur de saisie
 */
function testNom(){
    let reg=/^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
     // si champ vide
    if(nomVerif.value==""){
        // affiche le message d'erreur
        // on met la bordure rouge sur l'input
        afficherMessage ("nom", "Ce champs ne peux pas être vide")
        return false
    
    }else if(reg.test(nomVerif.value)===false){
         // si l'utilisateur a bien utliser des caractere alphanumerique avec accentuation possible
         afficherMessage ("nom", "Ce champ comporte des caractère non autorisés")
            return false
        }else if(hasCode(nomVerif.value)){ // ne fonctionne pas
            //est ce que notre utilisateur n'est pas entrain d'injecter du code
            afficherMessage("nom", "Vous ne pouvez pas injecter du code ici!")
            return false
        }else if((nomVerif.value.length >=50) || (nomVerif.value.length < 2) ){
            console.log(nomVerif.value.length)
            // si la chaine ne fait pas plus de x caracteres
            afficherMessage ("nom", "vous devez indiquer un à 50 caractere")
            return false
        }
    enleveMessage("nom")
    return true
}
/** validation des données "prenom" saisies par l'utilisateur
 * 
 * @returns {boolean} false si erreur de saisie
 * @returns {boolean} true aucune erreur de saisie
 */
function testPrenom(){
    let reg=/^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
     // si champ vide
    if(prenomVerif.value==""){
        // affiche le message d'erreur
        // on met la bordure rouge sur l'input
        afficherMessage ("prenom", "Ce champs ne peux pas être vide")
        return false
    
    }else if(reg.test(prenomVerif.value)===false){
         // si l'utilisateur a bien utliser des caractere alphanumerique avec accentuation possible
         afficherMessage ("prenom", "Ce champ comporte des caractère non autorisés")
            return false
        }else if(hasCode(prenomVerif.value)){ // ne fonctionne pas
            //est ce que notre utilisateur n'est pas entrain d'injecter du code
            afficherMessage("prenom", "Vous ne pouvez pas injecter du code ici!")
            return false
        }else if(prenomVerif.value.length >=40){
            // si la chaine ne fait pas plus de x caracteres
            afficherMessage ("prenom", "Vous avez tapé un prenom trop long!")
            return false
        }
    enleveMessage("prenom")
    return true
}
/** validation des données "numero de telephone" saisies par l'utilisateur
 * 
 * @returns {boolean} false si erreur de saisie
 * @returns {boolean} true aucune erreur de saisie
 */
function testTelephone () {   
    // doit etre au format xx xx xx xx xx / chaque caractere en biniome doit etre des chiffres
    let reg= /^\d{2} \d{2} \d{2} \d{2} \d{2}$/;
    // si le champs est vide
    if (telephoneVerif.value == "") {
        afficherMessage("telephone", "Un numero de telephone est requis");
        return false;
    } else if (reg.test(telephoneVerif.value) === false) {
        afficherMessage("telephone", "le format demandé est xx xx xx xx xx");
        return false;
    }
 enleveMessage("telephone")
 return true;
}
/** validation des données saisies par l'utilisateur
 * 
 * @returns {boolean} false si erreur de saisie
 * @returns {boolean} true aucune erreur de saisie
 */
function testEmail () {   
    // dooit etre au format exemple-.@exemple.extension
    let reg= /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    // si le champs est vide
    if (emailVerif.value == "") {
        afficherMessage("email", "L'email doit etre rempli");
        return false;
    } else if (reg.test(emailVerif.value) === false) {
        afficherMessage("email", "L'email doit etre au format exemple@exemple.extension");
        return false;
    }
 enleveMessage("email")
 return true;
}
/** validation des données "nom" saisies par l'utilisateur
 * 
 * @returns {boolean} false si erreur de saisie
 * @returns {boolean} true aucune erreur de saisie
 */
function testNomRue(){
    let reg=/^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
     // si champ vide
    if(nomRueVerif.value==""){
        // affiche le message d'erreur
        // on met la bordure rouge sur l'input
        afficherMessage ("nomRue", "Ce champs ne peux pas être vide")
        return false
    
    }else if(reg.test(nomRueVerif.value)===false){
         // si l'utilisateur a bien utliser des caractere alphanumerique avec accentuation possible
         afficherMessage ("nomRue", "Ce champ comporte des caractère non autorisés")
            return false
        }else if(hasCode(nomRueVerif.value)){ // ne fonctionne pas
            //est ce que notre utilisateur n'est pas entrain d'injecter du code
            afficherMessage("nomRue", "Vous ne pouvez pas injecter du code ici!")
            return false
        }else if((nomVerif.value.length >=50) || (nomVerif.value.length < 2) ){
            // si la chaine ne fait pas plus de x caracteres
            afficherMessage ("nomRue", "vous devez indiquer un à 50 caractere")
            return false
        }
    enleveMessage("nomRue")
    return true
}
/** validation des données "numero rue" saisies par l'utilisateur
 * 
 * @returns {boolean} false si erreur de saisie
 * @returns {boolean} true aucune erreur de saisie
 */
function testNumRue(){
    let reg=/^\d+$/;
     // si champ vide
    if(numRueVerif.value==""){
        // affiche le message d'erreur
        // on met la bordure rouge sur l'input
        afficherMessage ("numRue", "Ce champs ne peux pas être vide")
        return false
    }else if(reg.test(numRueVerif.value)===false){
         // si l'utilisateur a bien utliser des chiffres
         afficherMessage ("numRue", "Ce champ comporte des caractère non autorisés")
            return false
        }else if(hasCode(numRueVerif.value)){ // ne fonctionne pas
            //est ce que notre utilisateur n'est pas entrain d'injecter du code
            afficherMessage("numRue", "Vous ne pouvez pas injecter du code ici!")
            return false
        }else if(numRueVerif.value.length >=40){
            // si la chaine ne fait pas plus de x caracteres
            afficherMessage ("numRue", "Vous avez tapé un numero trop long!")
            return false
        }
    enleveMessage("numRue")
    return true
}
/** validation des données "Nom Rue" saisies par l'utilisateur
 * 
 * @returns {boolean} false si erreur de saisie
 * @returns {boolean} true aucune erreur de saisie
 */
function testCodePostal(){
    let reg=/^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
     // si champ vide
    if(nomRueVerif.value==""){
        // affiche le message d'erreur
        // on met la bordure rouge sur l'input
        afficherMessage ("nomRue", "Ce champs ne peux pas être vide")
        return false
    
    }else if(reg.test(nomRueVerif.value)===false){
         // si l'utilisateur a bien utliser des caractere alphanumerique avec accentuation possible
         afficherMessage ("nomRue", "Ce champ comporte des caractère non autorisés")
            return false
        }else if(hasCode(nomRueVerif.value)){ // ne fonctionne pas
            //est ce que notre utilisateur n'est pas entrain d'injecter du code
            afficherMessage("nomRue", "Vous ne pouvez pas injecter du code ici!")
            return false
        }else if(nomRueVerif.value.length >=40){
            // si la chaine ne fait pas plus de x caracteres
            afficherMessage ("nomRue", "Vous avez tapé un nom trop long!")
            return false
        }
    enleveMessage("nomRue")
    return true
}
/** validation des données "numero rue" saisies par l'utilisateur
 * 
 * @returns {boolean} false si erreur de saisie
 * @returns {boolean} true aucune erreur de saisie
 */
function testCodePostal(){
    let reg=/^[0-9]{5}$/;
     // si champ vide
    if(codePostalVerif.value==""){
        // affiche le message d'erreur
        // on met la bordure rouge sur l'input
        afficherMessage ("codePostal", "Ce champs ne peux pas être vide")
        return false
    }else if(reg.test(codePostalVerif.value)===false){
         // si l'utilisateur a bien utliser des chiffres
         afficherMessage ("codePostal", "Ce champ doit comporter cinq chiffres")
            return false
        }else if(hasCode(codePostalVerif.value)){ // ne fonctionne pas
            //est ce que notre utilisateur n'est pas entrain d'injecter du code
            afficherMessage("codePostal", "Vous ne pouvez pas injecter du code ici!")
            return false
        }else if(codePostalVerif.value.length >=10){
            // si la chaine ne fait pas plus de x caracteres
            afficherMessage ("codePostal", "Vous avez tapé un numero trop long!")
            return false
        }
    enleveMessage("codePostal")
    return true
}
/** validation des données "Ville" saisies par l'utilisateur
 * 
 * @returns {boolean} false si erreur de saisie
 * @returns {boolean} true aucune erreur de saisie
 */
function testVille(){
    let reg=/^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
     // si champ vide
    if(villeVerif.value==""){
        // affiche le message d'erreur
        // on met la bordure rouge sur l'input
        afficherMessage ("ville", "Ce champs ne peux pas être vide")
        return false
    
    }else if(reg.test(villeVerif.value)===false){
         // si l'utilisateur a bien utliser des caractere alphanumerique avec accentuation possible
         afficherMessage ("ville", "Ce champ comporte des caractère non autorisés")
            return false
        }else if(hasCode(villeVerif.value)){ // ne fonctionne pas
            //est ce que notre utilisateur n'est pas entrain d'injecter du code
            afficherMessage("ville", "Vous ne pouvez pas injecter du code ici!")
            return false
        }else if(villeVerif.value.length >=40){
            // si la chaine ne fait pas plus de x caracteres
            afficherMessage ("ville", "Vous avez tapé un nom trop long!")
            return false
        }
    enleveMessage("ville")
    return true
}

// verification reservation

/** validation des données "nombre de personne" saisies par l'utilisateur
 * 
 * @returns {boolean} false si erreur de saisie
 * @returns {boolean} true aucune erreur de saisie
 */
function testNombPersonne(){
    let reg=/^[12]$/;
     // si champ vide
    if(nombPersonneVerif.value==""){
        // affiche le message d'erreur
        // on met la bordure rouge sur l'input
        afficherMessage ("nombPersonne", "Ce champs ne peux pas être vide")
        return false
    } else if(reg.test(nombPersonneVerif.value)===false){
        // si l'utilisateur a bien utliser des caractere alphanumerique avec accentuation possible
        afficherMessage ("nombPersonne", "La reservation est valide pour 1 ou 2 personne")
           return false
         }
    enleveMessage("nombPersonne")
    return true
}
/** validation des données "date arrivee" saisies par l'utilisateur
 * 
 * @returns {boolean} false si erreur de saisie
 * @returns {boolean} true aucune erreur de saisie
 */
function testDateArrivee(){
    // si la date est inferieur à la date du jour
    // si l'année fait plus de 4 caracteres
    console.log(dateArriveeVerif.value)
    let reg=/^[12]$/;
     // si champ vide
    if(dateArriveeVerif.value==""){
        // affiche le message d'erreur
        // on met la bordure rouge sur l'input
        afficherMessage ("nombPersonne", "Ce champs ne peux pas être vide")
        return false
    } else if(reg.test(nombPersonneVerif.value)===false){
        // si l'utilisateur a bien utliser des caractere alphanumerique avec accentuation possible
        afficherMessage ("nombPersonne", "La reservation est valide pour 1 ou 2 personne")
           return false
         }
    enleveMessage("nombPersonne")
    return true
}
/** validation des données "nombre de personne" saisies par l'utilisateur
 * 
 * @returns {boolean} false si erreur de saisie
 * @returns {boolean} true aucune erreur de saisie
 */
function testDateDepart(){
    let reg=/^[12]$/;
     // si champ vide
    if(nombPersonneVerif.value==""){
        // affiche le message d'erreur
        // on met la bordure rouge sur l'input
        afficherMessage ("nombPersonne", "Ce champs ne peux pas être vide")
        return false
    } else if(reg.test(nombPersonneVerif.value)===false){
        // si l'utilisateur a bien utliser des caractere alphanumerique avec accentuation possible
        afficherMessage ("nombPersonne", "La reservation est valide pour 1 ou 2 personne")
           return false
         }
    enleveMessage("nombPersonne")
    return true
}

/** recherche dans une chaine de caractere si il y a une balise script
 * 
 * @param {string} text 
 * @returns true : y'a du code
 * @returns false :y'a pas de code
 */
function hasCode(text){
    let reg = /<script/
    return reg.test(text);
}
/** affiche le message d'erreur
 * 
 * @param {*} id  l'id de l'element message
 * @retur : rien
 */
function afficherMessage (id, messageErreur) {
    // affiche la bordure rouge sur l'intput
    let messageInput = document.getElementById(id);
    messageInput.classList.add("input-erreur");
    // affiche le paragraphe message
    let messageP = document.getElementById("erreur-"+id);
    messageP.classList.remove("d-none");
    messageP.innerText = messageErreur;
}
/** supprime le message d'erreur
 * 
 * @param {*} id  l'id de l'element message
 * @retur : rien
 */
function enleveMessage (id) {
    // enleve la bordure rouge input
    let messageInput = document.getElementById(id);
    messageInput.classList.remove("input-erreur")
    // vide le message
    let messageP = document.getElementById("erreur-"+id)
    messageP.innerText ="";
    // enleve le message
    messageP.classList.add("d-none");
}

// A finir 
    // notament controle des champs date
    // selection hotel
    // forma modale

/* soumission du formulaure */

// A l'evenement soumission du formulaire 
// relance les teste
// si les testes sont ok 
    // ouverture moadle
    // affichage
    // si click sur paiement = envoi formulaire
    // si click sur annuler retour au formulaire / fermeture modale

let formReservation = document.getElementById('formReservation')

formReservation.addEventListener("submit",(e)=>{
    e.preventDefault()
    let test1 = testNom()
    let test2 = testPrenom ();
    let test3 = testTelephone()
    let test4 = testEmail()
    let test5 = testNumRue ();
    let test6 = testNomRue ();
    let test7 = testCodePostal ();
    let test8 = testVille ();
    let test9 = testNombPersonne ();
    
    // si les testes prealable sont validés (true)
    if(test1===true && 
        test2 === true && 
        test3 ===true && 
        test4 === true &&
        test5 === true &&
        test6 === true &&
        test7 === true &&
        test8 === true &&
        test9 === true 
        ){
        
        // ouvrir la modale
        let classElement = "modal";
        openOrCloseElement(classElement);
        // integration des données dans la modale et affichage
        dataModaleInfosGenerale();
        dataReservation () ;
        dataService ();
        dataRegime();
        tarification () 

        // au click sur paiement je soumais le formulaire
        document.querySelector(".btn_payement").addEventListener("click", function() {
            formReservation.submit();
    } 
)};
});
