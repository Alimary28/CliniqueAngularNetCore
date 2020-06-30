import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{

    isExpanded = false;
    loggedInUser: string;

    constructor(
        private authService: AuthenticateService,
        private router: Router
    ) { }

    ngOnInit() {
        this.authService.currentLoggedInUser.subscribe(loggedInUser => {
            this.loggedInUser = loggedInUser;
        });
    }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
    }

  loggedIn() {
        return this.authService.isLoggedIn();
    }

  logout() {
     this.authService.logout();
     alert('User logged out!');
     this.router.navigate(['/medical-service-list']);
    }

    testUserRoles() {
        this.authService.roleMatch('Admin, Moderator');
    }
}
