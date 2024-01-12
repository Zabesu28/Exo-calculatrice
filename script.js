
// Exo 1

document.getElementById('formulaire').addEventListener('submit', function(event) {

  event.preventDefault();

  // Récupérer les valeurs du formulaire
  let nb1 = document.getElementById('nb1').value;
  let nb2 = document.getElementById('nb2').value;
  let operateur = document.getElementById('operateurs').value;
  let nb1Int = parseInt(nb1);
  let nb2Int = parseInt(nb2);
  let resultat = getResultat(operateur , nb1Int, nb2Int);

  alert(nb1 + operateur + nb2 + ' = ' + resultat);
  
});

function getResultat(operateur, nb1Int, nb2Int){
  if(operateur == '+'){
    return nb1Int + nb2Int;
  }
  else if(operateur == '-'){
    return nb1Int - nb2Int;
  }
  else if(operateur == '*'){
    return nb1Int * nb2Int;
  }
  else if(operateur == '/'){
    return nb1Int / nb2Int;
  }
}

// Exo 2

let links = document.querySelector('#lien').children;
let calculatrice = document.querySelector('#calculatrice')

// boucle sur les 2 liens possibles
for(let i = 0; i < links.length; i++) {
  let leLien = links[i];
  // event qui fait spawn ou despawn la calculatrice au click selon le lien
  leLien.addEventListener('click', function () {
      spawnOrDespawn(leLien);
  });
}

function spawnOrDespawn(leLien){
  if(leLien.id == 'spawn') {
    //fait apparaitre la calculatrice
    calculatrice.classList.replace(calculatrice.classList.value, 'spawn')
  }
  else{
    //fait disparaitre la calculatrice
    calculatrice.classList.replace(calculatrice.classList.value, 'despawn')
  }
}

// Exo 3

let elements = document.querySelector('#formulaire').children;
let message = document.querySelector('#message');

// boucle sur les elements du formulaire sauf le dernier (bouton)
for(let i=0; i<elements.length-1; i++){

  let element = elements[i];

  afficherMessage(element)
}

// afficher et désaffiche le message en fonction de s'il a sa souris dessus ou non
function afficherMessage(element){
  // affiche le message
  element.addEventListener('mouseover', function() {
    // le texte du message
    message.textContent = element.title;
    // classe qui fait apparaitre le message
    message.classList.add('spawn');
    
  });
  
  // fait disparaitre le message
  element.addEventListener('mouseout', function() {
    message.classList.remove('spawn');
  });
}