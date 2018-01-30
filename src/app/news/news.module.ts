import { NewsListItemComponent } from './components/news-list-item/news-list-item';
import { NewsComponent } from './news/news';
import { NewsService } from './news.service';
import {HttpModule} from '@angular/http';
import { NewsListComponent } from './news-list/news-list';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        IonicModule, 
        HttpModule
    ],
    declarations: [
        NewsListComponent, 
        NewsComponent, 
        NewsListItemComponent
    ],
    bootstrap: [

    ],
    entryComponents: [
        NewsListComponent, 
        NewsComponent
    ],
    providers: [
        NewsService
    ]
})
export class NewsModule {

}