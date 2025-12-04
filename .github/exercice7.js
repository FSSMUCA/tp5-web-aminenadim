function verifierMotDePasse(mdp) {

    let aLaLongueurMinimale = mdp.length >= 8;

    let contientArobase = mdp.includes('@');

    return aLaLongueurMinimale && contientArobase;
}

let motDePasseUtilisateur = prompt("Veuillez entrer votre mot de passe : ");

if (verifierMotDePasse(motDePasseUtilisateur)) {
    console.log("Mot de passe valide");
} else {
    console.log("Mot de passe non valide");
}