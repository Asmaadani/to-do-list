const p=require('prompt-sync')();

let tab=[];

function Afficher(){
    console.table(tab);
}
function Ajouter() { 
    let tache = p("Entrer votre tâche : ");
    // let status = p("Entrer le statut (terminer / en attente) : ");
    // let isDone;

    // if (status === "terminer") {
    //     isDone = true;
    // } else {
    //     isDone = false;
    // }

    // tab.push({id: tab.length + 1,tache: tache,status: status, isDone: isDone});
    tab.push({id: tab.length + 1,tache: tache, isDone: false});

    console.log("Tâche ajoutée avec succès");
}

function Recherche() {
    let search = p("Entrer la tâche à chercher : ");
    let trouve = false;

    for (let i = 0; i < tab.length; i++) {
        if (tab[i].tache === search) {
            console.log("La tâche : " + search + " se trouve à l'index : " + i);
            trouve = true;
            break;
        }
    }

    if (trouve === false) {
        console.log("Pas trouvé");
    }
}
function Supprimer(){
    for(i=0;i<tab.length;i++){
        let id=Number(p("entrer l'id de tache que voux voulez supprimer :"))
        if(tab[i].id===id){
            tab.pop(id);
            console.log('la tache est supprimer avec succé');
        }
    }
    console.table(tab);
}
function Statut() {
    let choix = p("1: tâches terminées | 2: tâches en attente : ");

    for (let i = 0; i < tab.length; i++) {
        if (choix == 1 && tab[i].isDone === true) {
            console.log("- " + tab[i].tache);
        }
        else if (choix == 2 && tab[i].isDone === false) {
            console.log("- " + tab[i].tache);
        }
    }
}
function Modifier() {
    let id = Number(p("id :"));

    for (let i = 0; i < tab.length; i++) {
        if (tab[i].id === id) {
            tab[i].tache = p("nouveau nom :");
            console.log("modifié");
            break;
        }
    }
}

function remplacer() {
    let id = Number(p("id :"));

    for (let i = 0; i < tab.length; i++) {
        if (tab[i].id === id) {
            let status = p("terminer / en attente : ");
            tab[i].isDone = (status === "terminer");
            console.log("statut modifié");
            break;
        }
    }
}


while(true){
    console.log(
        `
        ===To-Do List===
        1. Afficher les Taches
        2. Ajouter une Tache
        3. Rechercher une Tache
        4. Modifier une Tache
        5. Supprimer une Tache 
        6. Marquer une Tache comme terminée 
        7. Afficher taches terminées / en attente 
        0. Quitter
        `
    )
    let choix=Number(p("entrer le nombre qui dépend votre choix :"))
    if(choix===0){
        console.log("fin de programme")
        break;
    }
    switch(choix){
        case 1:
            Afficher();
            break;
        case 2: 
            Ajouter();
            break;
        case 3:
            Recherche();
            break;
        case 4:
            Modifier();
            break;
        case 5:
            Supprimer();
            break;
        case 6:
            remplacer();
            break;
        case 7:
            Statut();
            break;
    }
}