function totalAvecRemise(total, remise) {
    let montantRemise = total * remise / 100;
    let totalFinal = total - montantRemise;
    return totalFinal;
}

let totalHT = Number(prompt("Entrez le total HT : "));
let remisePourcentage = Number(prompt("Entrez la remise en % : "));

let final = totalAvecRemise(totalHT, remisePourcentage);
console.log(`Le total final après une remise de ${remisePourcentage}% est : ${final.toFixed(2)}`); // .toFixed(2) pour un format monétaire