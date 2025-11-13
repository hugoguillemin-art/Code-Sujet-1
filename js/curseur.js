let curseurListe = {};

function sliderAutomatique(min,max,valeurDefault,texte){
    let header = select('header');
  
    let div = createDiv();
    div.parent(header);
  
    let nom = createP(texte);
    nom.parent(div);
  
    let curseur = createSlider(min, max, valeurDefault);/// createSlider(min, max, défault)
    curseur.parent(div);
  
    curseurListe[texte] = curseur;
  
  }