function inverserChaine(chaine) {
    let chaineInverse = '';
    for (let i = chaine.length - 1; i >= 0; i--) {
        chaineInverse += chaine[i];
    }
    return chaineInverse;
}

function compterCaracteres(chaine) {
    // Utilisation de la propriété length pour obtenir la longueur de la chaîne
    return chaine.length;
}

function mettrePremiereLettreMajuscule(phrase) {
    // Diviser la phrase en un tableau de mots en utilisant l'espace comme délimiteur
    let mots = phrase.split(' ');

    // Parcourir chaque mot du tableau
    for (let i = 0; i < mots.length; i++) {
        // Mettre en majuscule la première lettre de chaque mot et concaténer avec le reste du mot en minuscules
        mots[i] = mots[i].charAt(0).toUpperCase() + mots[i].slice(1).toLowerCase();
    }

    function trouverValeurMaximale(tableau) {
    // Vérifier si le tableau est vide
    if (tableau.length === 0) {
        return undefined; // Retourner undefined si le tableau est vide
    }

    let max = tableau[0]; // Initialiser la valeur maximale à la première valeur du tableau

    // Parcourir le tableau pour trouver la valeur maximale
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i]; // Mettre à jour la valeur maximale si une valeur plus grande est trouvée
        }
    }

    return max; // Retourner la valeur maximale
}

// Exemple d'utilisation de la fonction
let tableau = [10, 5, 20, 8, 15];
let valeurMaximale = trouverValeurMaximale(tableau);
console.log("La valeur maximale dans le tableau est : " + valeurMaximale);

function calculerSomme(tableau) {
    let somme = 0; // Initialiser la somme à zéro

    // Parcourir le tableau et ajouter chaque élément à la somme
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }

    return somme; // Retourner la somme
}

function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
}

// Exemple d'utilisation de la fonction
let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrer les nombres pairs
let nombresPairs = filtrerTableau(nombres, function(nombre) {
    return nombre % 2 === 0;
});

function factorielle(nombre) {
    // Vérifier si le nombre est inférieur à zéro (les factorielles ne sont pas définies pour les nombres négatifs)
    if (nombre < 0) {
        return NaN; // Retourner NaN (Not a Number) pour signaler une entrée invalide
    }

    // Initialiser le résultat à 1 (la factorielle de zéro est définie comme 1)
    let resultat = 1;

    // Calculer la factorielle en multipliant le résultat par chaque entier positif jusqu'à nombre
    for (let i = 2; i <= nombre; i++) {
        resultat *= i;
    }

    return resultat;
}

function estPremier(nombre) {
    // Vérifier si le nombre est inférieur à 2 (les nombres premiers sont strictement supérieurs à 1)
    if (nombre < 2) {
        return false; // Si le nombre est inférieur à 2, il n'est pas premier
    }

    // Parcourir tous les nombres de 2 à la racine carrée du nombre donné
    // Si le nombre est divisible par un de ces nombres, alors il n'est pas premier
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false; // Le nombre n'est pas premier si i divise le nombre
        }
    }

    return true; // Si aucun diviseur n'est trouvé, alors le nombre est premier
}

function fibonacci(n) {
    // Initialiser les deux premiers termes de la séquence
    let a = 0, b = 1;

    // Créer un tableau pour stocker la séquence de Fibonacci
    let sequence = [];

    // Ajouter les deux premiers termes à la séquence
    sequence.push(a);
    sequence.push(b);

    // Calculer les termes suivants jusqu'à atteindre le nombre de termes souhaité
    for (let i = 2; i < n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
        sequence.push(temp);
    }

    return sequence;
}
