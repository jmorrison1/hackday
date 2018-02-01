import { UserListComponent } from './../../app/users/user-list/user-list';
import { ChecklistDraftsComponent } from './../../app/checklists/drafts/drafts';
import { NewsListComponent } from './../../app/news/news-list/news-list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTo(menu: string) {
    switch(menu) {
      case 'news': this.navCtrl.push(NewsListComponent); break;
      case 'checklists': this.navCtrl.push(ChecklistDraftsComponent); break;
      case 'users': this.navCtrl.push(UserListComponent); break;
    }

  }

}
