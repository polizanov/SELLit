import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  post: IPost | null = null

  form: FormGroup;
  error: any;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      imageUrl: ["", [Validators.required, Validators.minLength(10), Validators.pattern(/https?/)]],
      description: ["", [Validators.required, Validators.minLength(8)]],
      condition: ["", Validators.required],
      price: ["", [Validators.required, Validators.pattern(/^([0-9]+)$/)]],
      phone: ["", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(14),
        Validators.pattern(/^([0-9|+]+)$/)]]
    })
  }

  editPost() {
    if(this.form.invalid){
      return
    }
    
    console.log(this.form.value)

    this.postService.editPost(this.form.value, this.activateRoute.snapshot.params.productId).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        this.error = error;
        this.router.navigate(['/edit'])
      }
    })
  }

}
