import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';

import { Tuto }         from '../tutos';
import { ApiService }  from '../api.service';
@Component({
  selector: 'app-tutos-detail',
  templateUrl: './tutos-detail.component.html',
  styleUrls: ['./tutos-detail.component.scss']
})
export class TutosDetailComponent implements OnInit {
  tuto=[];


  constructor(  private route: ActivatedRoute,
    private apiService: ApiService,
   private router: Router) { }
        ngOnInit(): void {
          this.getTuto();

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


}
