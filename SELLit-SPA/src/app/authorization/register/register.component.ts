import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthorizationService } from '../authorization.service';
import { sameValue } from "../../shared/validators"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {

  removeSubscription = new Subject();
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authSevice: AuthorizationService,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, Validators.minLength(4), Validators.email]],
      password: ["", [Validators.required, Validators.minLength(4)]],
      repeatPassword: ["", [Validators.required, Validators.minLength(4), sameValue(
        () => this.form?.get('password'), this.removeSubscription
      )]],
    })
  }

  register(): void {
    if(this.form.invalid) {
      return;
    }

    console.log(this.form.value)
  }

  ngOnDestroy(): void {
    this.removeSubscription.next();
    this.removeSubscription.complete();
  }


}


