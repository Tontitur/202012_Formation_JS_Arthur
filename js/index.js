// alert('le fichier est bien en place');
// declaration d'une fonction
function initialisationJS(prenom) {
    // On crée une variable et on affecte la valeur à DeviceOrientationEvent. 
    // Ajouter le prenom est un attribut que l'on définit
    var balise = document.querySelector('#jsload');
    // modification du contenu html de la balise dans la var
    balise.style.backgroundColor = "GREEN";
    // Modif du style CSS dans la varaiable
    balise.innerHTML = "JS CHARGE POUR " + prenom
    // on ajoute la concaténation de l'attribut prenom
}
// usage d'une fonction
initialisationJS('Arthur');
// on définit que la variable prenom à pour cette initialisation la valeur 'Arthur'
function formSubmited(evt) {
    evt.preventDefault();
    // C'est une fonction qui demande de ne pas faire le fonctionnement normal
    console.log('Mon formulaire est "submit"');
    console.log(evt.target[0].value);
    console.log(evt.target[1].value);
    console.log(evt.target[2].value);
    console.log(evt.target[3].value);
}
document.querySelector('form').addEventListener('submit',formSubmited)
// on sélectionne dans le document. On utilise la fonction querySelector pour sélectionner une balise form. 
// A cette balise j'appelle une fonction d'écouteur d'evenement. 
// Je donne un nom à cette fonction : submit. Puis je lui dis quelle fonction à executer (sans l'executer de suite).

