import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
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
      id: ['', Validators.required],
      name: ['', Validators.required],
      username: [''],
      email: [''],
      street: [''],
      suite:[""],
      city:[""],
      zipcode:[""],
      lat:[""],
      lng:[""],
      phone:[""],
      website:[""],
      companyName:[""],
      catchPhrase:[""],
      bs:[""],
    })
    this.activateEditMode(this.editMode.id)
  }

  get f() { return this.postForm.controls; }


  activateEditMode(id) {
    this.api.editFormRequest('users', id)
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
