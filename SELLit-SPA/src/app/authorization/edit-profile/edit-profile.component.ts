import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/posts/service/post.service';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  form: FormGroup;
  error: any;


  constructor(
    private formBulder: FormBuilder,
    private authService: AuthorizationService,
    private router: Router
  ) { 
    this.form = this.formBulder.group({
      username: ["", [Validators.minLength(4), Validators.required]],
      imageUrl: ["", [Validators.required, Validators.minLength(10), Validators.pattern(/https?/)]]
    })
  }

  editProfile(){
    if(this.form.invalid) {
      return;
    }

    console.log(this.form.value);

    this.authService.editProfile(this.form.value).subscribe({
      next: () => {
        this.router.navigate(["/my-profile", this.authService.id]);
      },
      error: (error: any) => {
        this.error = error;
        this.router.navigate(["/edit-profile"]);
      }
    })
  }

  

}
