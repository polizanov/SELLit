import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  
  error: any;
  

  constructor(
    private formBuilder: FormBuilder,
    private authSevice: AuthorizationService,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.minLength(4)]]
    })
  }

  login(): void {
    if(this.form.invalid) {
      return;
    }

    this.authSevice.login(this.form.value).subscribe({
      
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error: any ) => {
        this.error = error;
        this.authSevice.clearLocalStorage();
        this.router.navigate(['/login']);
      }
    })
  }


}
