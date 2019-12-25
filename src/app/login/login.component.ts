import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) { }

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });

  ngOnInit() {
  }

  goToRegister() {
    this.router.navigate(['/register'])
  }

}
