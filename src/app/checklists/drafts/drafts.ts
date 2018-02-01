import { ChecklistEditComponent } from './../edit/edit';
import { NavController } from 'ionic-angular';
import { ChecklistService } from './../checklists.service';
import { Component } from '@angular/core';
import { ChecklistDraft } from '../checklist';

@Component({
    templateUrl: 'drafts.html',
    providers: [ChecklistService]
})
export class ChecklistDraftsComponent {

    drafts: ChecklistDraft[];

    constructor(private service: ChecklistService,
        private nav: NavController) {

    }

    ionViewWillEnter() {
        this.service.getDrafts()
            .then((drafts) => {
                this.drafts = drafts;
            });
    }

    edit(draft: ChecklistDraft) {
        this.nav.push(ChecklistEditComponent, {draft: draft});
    }
}