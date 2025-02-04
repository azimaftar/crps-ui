import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

@Component({
    selector: 'app-login',
    imports: [CommonModule, FormsModule, RecaptchaModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  captchaResponse: string | null = null;

  constructor(private router: Router) {}

  onCaptchaResolved(response: string | null) {
    this.captchaResponse = response;
    console.log('Captcha resolved with response:', response);
  }

  onSubmit() {
    if (this.username && this.password) {
      // Login logic to do
      console.log("Logging in with", this.username, this.password);
      this.router.navigate(['/home']);
    }
    else {
      console.log('Please enter both username and password');
    }
  }
}
