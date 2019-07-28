import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl,FormsModule,FormGroupDirective,ReactiveFormsModule, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  auths=false;
/*
public username: string;
public password: string;
 */
public error: string;


  constructor(private route: ActivatedRoute,private router: Router,
     private formBuilder: FormBuilder,
    private auth: AuthService) {

 this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
    'password': [null, Validators.min(3)],
    'username' : [null, Validators.required],

    });
   }

   onFormSubmit(form:NgForm) {




     const username = this.loginForm.value["username"];
     const password = this.loginForm.value["password"];
     this.auth.login(username, password).subscribe(
         result => this.router.navigate(['astuces']),
       //  err => this.error = 'Could not authenticate'
       );
       }
  public submit() {
    const username = this.loginForm.value["username"];
    const password = this.loginForm.value["password"];
    this.auth.login(username, password).subscribe(
        result =>{
          this.auths=true;
           this.router.navigate(['astuces'])
        },
        err => this.error = 'Could not authenticate'
      );
  }
}
