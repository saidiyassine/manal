/* Created by Tivotal */

const body = document.querySelector("body");
const modeToggle = body.querySelector(".mode-toggle");
const sidebar = body.querySelector("nav");
const sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
  sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  if (sidebar.classList.contains("close")) {
    localStorage.setItem("status", "close");
  } else {
    localStorage.setItem("status", "open");
  }
});

function formGenerate() {
  let nombreForms = parseInt(document.getElementById('nombreMatiere').value);
  let formContent = document.getElementById('formContent');
  
  // Supprime les anciennes entrées pour éviter les doublons
  formContent.innerHTML = '';

  // Génère les champs de matière et de coefficient en fonction du nombre saisi
  for (let i = 0; i < nombreForms; i++) {
    // Crée un élément <input> pour le nom de la matière
    let inputMatiere = document.createElement('input');
    inputMatiere.type = 'text';
    inputMatiere.id = `matiere${i}`;
    inputMatiere.placeholder = `Note${i + 1}`;
    inputMatiere.classList.add('form-control', 'mb-2'); // Ajout de classes Bootstrap
    inputMatiere.required = true;

    // Crée un élément <input> pour le coefficient
    let inputCoef = document.createElement('input');
    inputCoef.type = 'number';
    inputCoef.id = `coef${i}`;
    inputCoef.placeholder = `Coefficient ${i + 1}`;
    inputCoef.classList.add('form-control', 'mb-2'); // Ajout de classes Bootstrap
    inputCoef.min = 1;
    inputCoef.required = true;

    // Crée un conteneur pour aligner les champs sur une seule ligne
    let row = document.createElement('div');
    row.classList.add('row', 'mb-3');

    // Colonne pour le champ matière
    let colMatiere = document.createElement('div');
    colMatiere.classList.add('col');
    colMatiere.appendChild(inputMatiere);

    // Colonne pour le champ coefficient
    let colCoef = document.createElement('div');
    colCoef.classList.add('col');
    colCoef.appendChild(inputCoef);

    // Ajoute les colonnes à la ligne
    row.appendChild(colMatiere);
    row.appendChild(colCoef);

    // Ajoute la ligne complète dans formContent
    formContent.appendChild(row);
  }

  // Crée un bouton pour calculer la moyenne
  let button = document.createElement('button');
  button.textContent = 'Calculer la moyenne';
  button.classList.add('btn', 'btn-primary'); // Ajout de classes Bootstrap
  button.onclick = calculMoyen; // Ajout de l'événement onclick

  // Ajoute le bouton à la fin du contenu du formulaire
  formContent.appendChild(button);

  // Crée un label pour afficher la moyenne
  let label = document.createElement('label');
  label.id = 'moyenneLabel';
  label.classList.add('mt-3');
  label.textContent = ' Moyenne :'; // Texte initial
  formContent.appendChild(label);
}

// Fonction pour calculer la moyenne
function calculMoyen() {
  let nombreForms = parseInt(document.getElementById('nombreMatiere').value);
  let totalNote = 0;
  let totalCoef = 0;

  // Calcule la somme des notes et des coefficients
  for (let i = 0; i < nombreForms; i++) {
    let matiere = document.getElementById(`matiere${i}`).value;
    let coef = parseFloat(document.getElementById(`coef${i}`).value);

    if (matiere && coef) {
      totalNote += parseFloat(matiere) * coef; // Calcul de la note pondérée
      totalCoef += coef; // Ajout du coefficient
    }
  }

  let moyenne = totalNote / totalCoef;

  if(moyenne>=10){
    document.getElementById('moyenneLabel').textContent = ' Moyenne: ' + moyenne.toFixed(2);
    document.getElementById('moyenneLabel').className = 'green';
  }
  else{
    document.getElementById('moyenneLabel').textContent = ' Moyenne: ' + moyenne.toFixed(2);
    document.getElementById('moyenneLabel').className = 'red';
  }
}
