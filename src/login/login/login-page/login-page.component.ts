import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      mobile: [null, Validators.compose([Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])],
      otp: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }

  ngOnInit(): void {
  }
  redirectTo(path) {
    this.router.navigate(path);
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) { return; }
    this.loading = true;

    if (this.loginForm.value.mobile == 1234567890 && this.loginForm.value.otp == 12345) {
      this.redirectTo(['pages']);
    } else {
      this.loading = false;
    }
  }
}
