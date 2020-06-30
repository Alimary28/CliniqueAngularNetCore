import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    private id: number;
    public currentUser: User;
    public profileForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthenticateService
    ) {
        this.profileForm = this.formBuilder.group({
            firstName: new FormControl(''),
            lastName: new FormControl(''),
            username: new FormControl(''),
            email: new FormControl(''),
        });
    }

    ngOnInit() {
        this.getUserDetails();
        this.createUserProfileForm();
  }

    createUserProfileForm() {
        this.profileForm = this.formBuilder.group({
            firstName: ['', Validators.pattern(/^[a-zA-Z ]*$/)],
            lastName: ['', Validators.pattern(/^[a-zA-Z ]*$/)],
            username: ['', Validators.required],
            email: ['', Validators.email]
        });

    }

    getUserDetails() {
        this.id = this.authService.decodedToken.nameid;
        this.authService.getUserById(this.id).subscribe(
            user => {
                this.currentUser = user;
                this.profileForm.patchValue(
                    {
                        firstName: this.currentUser.firstName,
                        lastName: this.currentUser.lastName,
                        username: this.currentUser.username,
                        email: this.currentUser.email
                    }
                );
            }
        );
    }

    saveUserData() {
        this.currentUser = this.profileForm.value;
        this.authService.updateUser(this.id, this.currentUser).subscribe(_ => {
            localStorage.setItem('loggedInUser', this.profileForm.value.username);
            this.authService.changeLoggedInUser(this.profileForm.value.username);
            this.router.navigate(['/medical-service-list']);
        }, error => alert(error)
        );
    }
    goBack() {
        this.router.navigate(['/medical-service-list']);
    }

}
