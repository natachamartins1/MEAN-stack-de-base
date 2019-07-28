import { Component, OnInit } from '@angular/core';
import { Astuce } from '../astuces';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-astuces',
  templateUrl: './astuces.component.html',
  styleUrls: ['./astuces.component.scss']
})
export class AstucesComponent implements OnInit {
astuces:Astuce[];
  constructor( private apiService: ApiService) { }

  ngOnInit() {
    this.getAstuces();

    //this.deleteTutos();
    //this.tableau.push("hhhhhhhhhhhhhhhhhhhhhh","yyyy");
  }


  getAstuces(){
  this.apiService.getAstuces().subscribe(
  (response:Astuce[]) =>{


  console.log(response);

  this.astuces=response;
  },
  ()=>{
    console.log("Vous n'êtes pas autorisé à voir le contenu"),

  
  ()=>console.log('completed'+this.astuces[0])

});


}
}
