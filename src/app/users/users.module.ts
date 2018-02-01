import { UserService } from './users.service';
import { UserComponent } from './user/user';
import { UserListComponent } from './user-list/user-list';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        IonicModule
    ], 
    declarations: [
        UserListComponent, 
        UserComponent
    ], 
    providers: [
        UserService
    ],
    entryComponents: [
        UserComponent, 
        UserListComponent
    ]
})
export class UserModule {

}