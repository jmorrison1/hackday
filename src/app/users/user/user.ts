import { NavController } from 'ionic-angular';
import { UserService } from './../users.service';
import { Component } from '@angular/core';
import { User } from '../users';

@Component({
    templateUrl: 'user.html'
})
export class UserComponent {

    user: User = new User();

    constructor(private service: UserService,
        private nav: NavController) {

    }

    save() {
        this.service.addUser(this.user)
            .then(() => {
                this.nav.pop();
            });
    }
}