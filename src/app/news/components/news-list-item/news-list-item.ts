import { NewsComponent } from './../../news/news';
import { NavController } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { News } from '../../news';

@Component({
    templateUrl: 'news-list-item.html',
    selector: 'news-item'
})
export class NewsListItemComponent {

    @Input() newsItem: News;
    
    constructor(private nav: NavController) {

    }

    openNews(news: News) {
        this.nav.push(NewsComponent, news);
    }
}