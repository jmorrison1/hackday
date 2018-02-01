import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { Form } from './../../form-builder/form-builder';
import { ChecklistService } from './../checklists.service';
import { Component } from '@angular/core';
import { Checklist, ChecklistDraft } from '../checklist';

@Component({
    templateUrl: 'edit.html',
    providers: [ChecklistService]
})
export class ChecklistEditComponent {

    checklist: Checklist;

    draftId: string;

    constructor(private service: ChecklistService,
        private loading: LoadingController,
        private nav: NavController,
        private navParams: NavParams) {

    }

    ngOnInit() {
        this.service.getTemplate()
            .subscribe((checklist) => {
                this.checklist = checklist;
                // if they are editing - combine the values
                if(this.navParams.data.draft) {                    
                    var draft: ChecklistDraft = this.navParams.data.draft;
                    this.draftId = draft.draftId;
                    this.checklist.combineValues(draft.formData);                    
                }
            });
    }

    save() {
        this.service.saveDraft(this.checklist, this.draftId)
            .then(() => {
                this.nav.pop();
            });
    }
}