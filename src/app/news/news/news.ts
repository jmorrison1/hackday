import { News } from './../news';
import {NavParams} from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'news.html'
})
export class NewsComponent {

    news: News;

    constructor(private navParams: NavParams) {
        
    }

    ngOnInit() {
        this.news = this.navParams.data;
    }
}