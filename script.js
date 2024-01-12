
// Exo 1

document.getElementById('formulaire').addEventListener('submit', function(event) {

  event.preventDefault();

  // Récupérer les valeurs du formulaire
  let nb1 = document.getElementById('nb1').value;
  let nb2 = document.getElementById('nb2').value;
  let operateur = document.getElementById('operateurs').value;
  let nb1Int = parseInt(nb1);
  let nb2Int = parseInt(nb2);
  let resultat;

  if(operateur == '+'){
    resultat = nb1Int + nb2Int;
  }
  else if(operateur == '-'){
    resultat = nb1Int - nb2Int;
  }
  else if(operateur == '*'){
    resultat = nb1Int * nb2Int;
  }
  else if(operateur == '/'){
    resultat = nb1Int / nb2Int;
  }

  alert(nb1 + operateur + nb2 + ' = ' + resultat);
  
});

// Exo 2

let links = document.querySelector('#lien').children;
let calculatrice = document.querySelector('#calculatrice')

for(let i = 0; i < links.length; i++) {
  let leLien = links[i];
  leLien.addEventListener('click', function () {
      spawnOrDespawn(leLien);
  });
}

function spawnOrDespawn(leLien){
  if(leLien.id == 'spawn') {
    calculatrice.classList.replace(calculatrice.classList.value, 'spawn')
  }
  else{
    calculatrice.classList.replace(calculatrice.classList.value, 'despawn')
  }
}

// Exo 3

let elements = document.querySelector('#formulaire').children;
let message = document.querySelector('#message');

for(let i=0; i<elements.length-1; i++){

  let element = elements[i];

  afficherMessage(element)
}

function afficherMessage(element){
  element.addEventListener('mouseover', function() {
    message.textContent = element.title;
    message.classList.add('spawn');
    
  });
  
  element.addEventListener('mouseout', function() {
    message.classList.remove('spawn');
  });
}