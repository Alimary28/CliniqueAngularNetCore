import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticateService } from './services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
    title = 'app';
    jwtHelper = new JwtHelperService();

    constructor(private authService: AuthenticateService) {

    }

    ngOnInit(): void {
        const token = localStorage.getItem('token');
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
            this.authService.changeLoggedInUser(this.authService.decodedToken.unique_name);
        }
    }
}
