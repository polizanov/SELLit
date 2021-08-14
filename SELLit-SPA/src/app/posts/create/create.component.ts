import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  form: FormGroup;
  error: any;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      imageUrl: ["", [Validators.required, Validators.minLength(10), Validators.pattern(/https?/)]],
      description: ["", [Validators.required, Validators.minLength(8)]],
      condition: ["", Validators.required],
      price: ["",[ Validators.required, Validators.pattern(/^([0-9]+)$/)]],
      phone: ["",[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(14),
        Validators.pattern(/^([0-9|+]+)$/)]]
    })
  }

  createPost(){
    if (this.form.invalid) {
      return;
    }

  
    this.postService.sentPost(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        this.error = error;
        this.router.navigate(['/create'])
      }
    })
  }

}
