import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl,FormsModule,FormGroupDirective,ReactiveFormsModule, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';


import { Tuto }         from '../tutos';

@Component({
  selector: 'app-tutos-detail',
  templateUrl: './tutos-detail.component.html',
  styleUrls: ['./tutos-detail.component.scss']
})
export class TutosDetailComponent implements OnInit {
  title: "tutoriel";
  tuto=[];
tutoForm: FormGroup;
  titre:string='tet';
  texte:string;
  id:any;

  constructor(private route: ActivatedRoute,private router: Router, private apiService: ApiService, private formBuilder: FormBuilder) {
 this.createForm();
}
createForm() {
  this.tutoForm = this.formBuilder.group({
  '_id': [null, Validators.min(3)],
  'titre' : [null, Validators.required],
  'texte' : [null, Validators.required],
  });
 }
 onFormSubmit(form:NgForm) {




    const id = this.route.snapshot.paramMap.get('id');
    const titre = this.tutoForm.value["titre"];
    const texte = this.tutoForm.value["texte"];
    this.apiService.updateTuto(titre,id,texte).subscribe(res => {
      this.router.navigate(['/tutos']);
    }, (err) => {
      console.log(err);
    });

     }
updateTuto(){
  const id = this.route.snapshot.paramMap.get('id');
  const titre = this.tutoForm.value["titre"];
  const texte = this.tutoForm.value["texte"];
  this.apiService.updateTuto(titre,id,texte).subscribe(res => {
    this.router.navigate(['/tutos']);
  }, (err) => {
    console.log(err);
  });

}

        deleteTutos() {
        const id = this.route.snapshot.paramMap.get('id');

        this.apiService.deleteTuto(id)
          .subscribe(res => {
            // ne marche qu'avec des nulbers : this.conseils.splice(id, 1);
            this.router.navigate(['/tutos']);
            }, (err) => {
              console.log(err);
            }
          );

        }
          getTuto(): void {
            const id = this.route.snapshot.paramMap.get('id');
            this.apiService.getTuto(id)
              .subscribe(tuto => this.tuto = tuto);
          }



                  ngOnInit(): void {
                    this.getTuto();

                  }



}
