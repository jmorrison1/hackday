import { Form, FormData } from './../form-builder/form-builder';

export class Checklist {

    id: string;
    title: string;
    form: Form;

    constructor(json: any) {
        this.id = json.id;
        this.title = json.title;

        if(json.json) {
            this.form = new Form(JSON.parse(json.json));
        }
    }
    
    combineValues(formData: FormData) {
        if(this.form) {
            this.form.combineFormValues(formData);
        }
    }
}

export class ChecklistDraft {

    public draftId: string;
    public title: string;
    public lastEdited: Date;
    public formData: FormData;

    constructor(json: any) {
        this.draftId = json.draftId;
        this.title = json.title;        
        this.lastEdited = json.lastEdited;
        this.formData =  new FormData(JSON.parse(json.formValues));
    }
}