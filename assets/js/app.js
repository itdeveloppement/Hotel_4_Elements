

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
    // btn envoyer formulaire vers modale => 
    // ciblage
    let btn_envoyer = document.querySelector(".btn_envoyer")
    // ecouteur
    btn_envoyer.addEventListener("click", (event)=>{
        // pour ne pas recharger la page
        event.preventDefault();
        // element à ouvrir portant la class modal
        let classElement = "modal";
        openOrCloseElement(classElement);
        // integration des données dans la modale
        dataModaleInfosGenerale();
        dataReservation () ;
        dataService ();
        dataRegime();
        tarification () 

    });

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

// ciblage
let telephone = document.getElementById("telephone");

// ecouteur
telephone.addEventListener("change", ()=>{
    testTelephone ();
});

// validation champs numero de telephone

function testTelephone () {
    console.log("test1")
    // si le champs est vide
    if (telephone.value == "") {
        // appel de la fonction afficher message
        afficherMessage("telephone", "Un numero de telephone est requis")
    }
    // enlever le message
    enleveMessage("telephone")
}

// si le champs comporte autres caracteres que des chiffres sauf les espaces


// a la soumission du formulaire
    // rappeller les fonction de test

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