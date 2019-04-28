import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isLoading = false;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  onSignup(form: NgForm) {
    if ( form.invalid) {
      return;
    }
    this.isLoading =true;
    this.authService.createUser(form.value.email,
      form.value.password);
  }

}
