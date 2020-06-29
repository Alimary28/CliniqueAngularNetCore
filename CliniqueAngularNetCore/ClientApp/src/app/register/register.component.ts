import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';
import { CustomValidator } from '../custom-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public user: User;
    public errorMessage = [];
    public submitted = false;
    public form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthenticateService
    ) { }

    ngOnInit() {
        this.authService.logout();
        this.form = this.formBuilder.group({
            firstName: [null, Validators.compose([
                Validators.required,
                Validators.pattern(/^[a-zA-Z ]*$/)
            ])],
            lastName: [null, Validators.compose([
                Validators.required,
                Validators.pattern(/^[a-zA-Z ]*$/)
            ])],
            username: [null, Validators.compose([Validators.required])],
            email: [null, Validators.compose([
                Validators.email,
                Validators.required])
            ],
            password: [null, Validators.compose([
                Validators.required,
                CustomValidator.patternValidator(/\d/, { hasNumber: true }),
                CustomValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
                CustomValidator.patternValidator(/[a-z]/, { hasSmallCase: true }),
                Validators.minLength(8)])
            ],
            confirmedPassword: [null, Validators.compose([Validators.required])]

        },
            {
                validator: CustomValidator.mustMatch('password', 'confirmedPassword')
            });
    }

    addUser() {
        const pswd = this.form.get('password').value;
        const confPswd = this.form.get('confirmedPassword').value;
        if (pswd === confPswd) {
            this.authService.registerUser(this.form.value).subscribe(user => {
                this.router.navigate(['/login']);
                alert('User succesfully created!');
            },
                err => alert(err));
        } else {
            alert('Passwords are not the same!');
        }
    }

    onReset() {
        this.submitted = false;
        this.form.reset();
    }

}
