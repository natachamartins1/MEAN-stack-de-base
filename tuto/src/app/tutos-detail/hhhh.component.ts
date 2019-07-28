import { Component, OnInit,Renderer2, ElementRef, } from '@angular/core';
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

  constructor(private renderer:Renderer2,private el:ElementRef ,private route: ActivatedRoute,private router: Router, private apiService: ApiService, private formBuilder: FormBuilder) {
 this.createForm();

}
createForm() {
  this.tutoForm = this.formBuilder.group({
  '_id': [null, Validators.min(3)],
  'titre' : [null, Validators.required],
  'texte' : [null, Validators.required],
  'image': [null,Validators.min(3)]
  });

 }

 modifier(form:NgForm){




    let formb=document.getElementById("form");
    let input= this.renderer.createElement("input");
    this.renderer.setAttribute(input,"formControlName", "titre");

    this.renderer.appendChild(formb,input);
    const idt = this.route.snapshot.paramMap.get('id');
  //  const titre = this.tutoForm.value["titre"];

  const id= this.tutoForm.value["_id"];
this.tutoForm.setValue({
  titre:'jjjk',texte:'', image:'',_id:''
});
  const titrec=this.tutoForm.value["titre"];
    const texte = this.tutoForm.value["texte"];
        const image = this.tutoForm.value["image"];
    this.apiService.updateTuto(titrec,idt,texte,image).subscribe(res => {


    })

  }
 onFormSubmit(form:NgForm) {




    const id = this.route.snapshot.paramMap.get('id');
    const titre = this.tutoForm.value["titre"];
    const texte = this.tutoForm.value["texte"];
    const image = this.tutoForm.value["image"];
    this.apiService.updateTuto(titre,id,texte,image).subscribe(res => {
      this.router.navigate(['/tutos']);
    }, (err) => {
      console.log(err);
    });

     }
updateTuto(){
  const id = this.route.snapshot.paramMap.get('id');
  const titre = this.tutoForm.value["titre"];
  const texte = this.tutoForm.value["texte"];
  const image = this.tutoForm.value["image"];
  this.apiService.updateTuto(titre,id,texte,image).subscribe(res => {
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
          onChanges(): void {
            this.tutoForm.valueChanges.subscribe(val => {
     let titre=  (document.getElementById('titre') as HTMLInputElement).value;
     console.log(titre);
            });
          }


                  ngOnInit(): void {
                    this.getTuto();
                    this.createForm();
                      this.onChanges();


                  }



}
