import { UserComponent } from './../user/user';
import { NavController } from 'ionic-angular';
import { UserService } from './../users.service';
import { Component } from '@angular/core';
import { User } from '../users';

@Component({
    templateUrl: 'user-list.html',
    providers: [UserService]
})
export class UserListComponent {

    users: User[];

    constructor(private serivce: UserService,
        private nav: NavController) {

    }

    ionViewWillEnter() {
        this.serivce.getUsers()
            .then(users => {
                this.users = users;
            })
    }

    add() {
        this.nav.push(UserComponent);
    }

    delete(user: User) {
        this.serivce.deleteUser(user.id)
            .then(() => {
                this.users.splice(this.users.findIndex(t => t.id == user.id), 1);
            });
    }
}