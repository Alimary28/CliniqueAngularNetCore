import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { AuthenticateService } from './services/authenticate.service';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {

    @Input() appHasRole: string[];
    isVisible = false;

    constructor(
        private authService: AuthenticateService,
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>,
    ) { }

    ngOnInit() {
        const userRoles = this.authService.decodedToken.role;

        if (!userRoles) {
            this.viewContainerRef.clear();
        }

        if (this.authService.roleMatch(this.appHasRole)) {
            if (!this.isVisible) {
                this.isVisible = true;
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            } else {
                this.isVisible = false;
                this.viewContainerRef.clear();
            }
        }
    }
}
