import { SqlService } from './../core/sql.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Checklist, ChecklistDraft } from './checklist';

@Injectable()
export class ChecklistService {

    constructor(private http: Http,
        private sql: SqlService) {

    }

    getTemplate() {
        return this.http.get('http://localhost:51957/public/form')
            .map(response => {
                return new Checklist(response.json());
            });
    }

    saveDraft(checklist: Checklist, draftId?: string) {
        if (draftId) {
            return this.sql.query('UPDATE tbl_Checklist SET formValues = ?, lastEdited = ? WHERE draftId = ?', [
                JSON.stringify(checklist.form.buildFormData()), new Date(), draftId
            ]);
        }
        else {
            return this.sql.query('INSERT INTO tbl_Checklist (draftId, title, lastEdited, formValues) VALUES (?,?,?,?)', [
                this.guid(), checklist.title, new Date(), JSON.stringify(checklist.form.buildFormData())
            ]);
        }
    }

    getDrafts() {
        return this.sql.query('SELECT * from tbl_Checklist')
            .then(data => {
                var drafts: ChecklistDraft[] = [];

                for(let i = 0; i < data.rows.length; i++) 
                    drafts.push(new ChecklistDraft(data.rows.item(i)));

                return drafts;
            });
    }

    private guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
}