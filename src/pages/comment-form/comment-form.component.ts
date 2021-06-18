import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  redirectTo = '/cart';
  postForm: FormGroup;
  editMode = {
    id: null,
    data: null,
    status: null
  }
  submitted = false;
  params;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private api: ApiServiceService) {
    this.params = this.route.paramMap.subscribe(params => {
      let routeParam = params['params'];
      this.editMode.id = routeParam['id'];
    });
  }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      postId: ['', Validators.required],
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      body: [''],
    })
    this.activateEditMode(this.editMode.id)
  }

  get f() { return this.postForm.controls; }


  activateEditMode(id) {
    this.api.editFormRequest('comments', id)
      .subscribe((response: any) => {
        this.editMode.data = response;
        for (let key in this.f) {
          this.f[key].setValue(this.editMode.data[key]);
        }
      }, error => {
        console.log(error);
      });
  }

}

