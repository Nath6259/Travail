import { Component } from '@angular/core';
import { Recette } from '../Recette';
import { RECETTES } from '../RecetteList';

@Component({
  selector: 'app-liste-recette',
  templateUrl: './liste-recette.component.html',
  styleUrls: ['./liste-recette.component.scss']
})
export class ListeRecetteComponent{
  
  recetteList: Recette[] = RECETTES;
  recetteSelected?: Recette;
  constructor() { }

  ngOnInit(): void{
    console.table(this.recetteList);
  }

  selectRecette(recetteId: string): void{
    const index: number = parseInt(recetteId);
    const recette: Recette|undefined = this.recetteList.find(rec=>rec.id === index);
    if(recette){
    console.log(`Vous avez selectionné ${recette.name}`);
    }else{
      console.log("Aucune recette trouvé");
    }
    this.recetteSelected = recette;
  }
}
