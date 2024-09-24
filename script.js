const dossierPrincipal = {
    nom: "Ada",
    contenu: [
        {
            nom: "Projets collectifs Ada",
            contenu: [
                {
                    nom: "Pico8",
                    contenu: [
                        {
                            nom: "mariokart.p8",
                        },
                    ],
                },
                {
                    nom: "Dataviz",
                    contenu: [
                        {
                            nom: "index.html",
                        },
                        {
                            nom: "script.js",
                        },
                    ],
                },
            ],
        },
        { nom: "CV.pdf" },
        {
            nom: "Projets persos",
            contenu: [
                {
                    nom: "Portfolio",
                    contenu: [
                        {
                            nom: "index.html",
                        },
                        {
                            nom: "script.js",
                        },
                    ],
                },
            ],
        },
    ],
};

// Etape 1: Crée une fonction afficherDossier qui va afficher le nom du dossier principal en utilisant la variable dossierPrincipal

function afficherDossier(dossier) {
    console.log("Etape 1");
    const Ada = dossier.nom;
    console.log("🗂️ " + Ada);
}
afficherDossier(dossierPrincipal);

// Etape 2:
/* Tu vas créer deux fonctions :
afficherDossierIteratif (l’utilisation des instructions for… est autorisée)
afficherDossierRecursif (il faut que cette fonction s’appelle elle-même!)
Ces deux fonctions afficheront les dossiers et le fichier que contient le dossier Ada.
*/
function afficherDossierIteratif(dossier) {
    console.log("Etape 2: fonction avec itération");
    //afficher le nom Ada
    console.log("🗂️ " + dossier.nom);
    const Contenu = dossier.contenu;
    console.log(Contenu);

    for (objet of Contenu) {
        if (objet.contenu) {
            console.log("🗂️ " + objet.nom);
        } else {
            console.log("📑 " + objet.nom);
        }
    }
}
afficherDossierIteratif(dossierPrincipal);

console.log("Etape 2: fonction avec résurvité");
function afficherDossierRecursif1(dossier) {
    // Afficher le nom du dossier ou du fichier
    const Contenu = dossier.contenu;
    if (!objet.contenu) {
        console.log("📑 " + objet.nom);

        /*// Appeler la fonction récursive pour chaque élément du contenu
        for (objet of Contenu) {
            if (objet.Contenu) {
                console.log("🗂️ " + objet.nom);
                afficherDossierRecursif1(objet);
            }
        }*/
    } else {
        for (objet of Contenu) {
            console.log("🗂️ " + objet.nom);
        }
    }
}
afficherDossierRecursif1(dossierPrincipal);
// Exercice 3:
/*
Complète la fonction pour afficher les dossiers de troisième niveau (ex: les dossiers “Pico 8” et “Dataviz” sont
des dossiers de troisième niveau car ils se trouvent dans un dossier “Projets collectifs, lui-même dans le dossier “Ada”).
*/
console.log("Etape 3");
function afficherDossierRecursif2(dossier) {
    if (!dossier.contenu) {
        console.log("📑 " + dossier.nom);
    } else {
        console.log("🗂️ " + dossier.nom);
        for (objet of dossier.contenu) {
            afficherDossierRecursif2(objet);
        }
    }
}

afficherDossierRecursif2(dossierPrincipal);
