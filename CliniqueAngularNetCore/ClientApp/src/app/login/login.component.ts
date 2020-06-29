import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthenticateService,
        private router: Router
    ) { }

    ngOnInit() {
        this.authService.logout();
        this.loginForm = this.formBuilder.group({
            username: [null, Validators.compose([Validators.required])],
            password: [null, Validators.compose([Validators.required])],
        });
    }

    loginUser() {
        this.authService.loginUser(this.loginForm.value).subscribe(
            user => {
                localStorage.setItem('token', user.token);
                this.authService.decodeToken();
                this.authService.changeLoggedInUser(user.username);
                alert('Succesfully logged in!');
                this.router.navigate(['/medical-service-list']);
            },
            err => alert('Invalid username or password!')
        );

    }

}
