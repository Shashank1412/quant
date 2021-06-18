import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-photos-form',
  templateUrl: './photos-form.component.html',
  styleUrls: ['./photos-form.component.css']
})
export class PhotosFormComponent implements OnInit {
  redirectTo = '/photos';
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
      albumId: ['', Validators.required],
      id: ['', Validators.required],
      title: ['', Validators.required],
      url: [''],
      thumbnailUrl: [''],
    })
    this.activateEditMode(this.editMode.id)
  }

  get f() { return this.postForm.controls; }


  activateEditMode(id) {
    this.api.editFormRequest('photos', id)
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
