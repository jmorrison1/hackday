import { FormBuilderModule } from './../form-builder/form-builder.module';
import { IonicModule } from 'ionic-angular';
import { ChecklistEditComponent } from './edit/edit';
import { ChecklistDraftsComponent } from './drafts/drafts';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        IonicModule,
        FormBuilderModule

    ], 
    declarations: [
        ChecklistDraftsComponent,
        ChecklistEditComponent
    ], 
    entryComponents: [
        ChecklistDraftsComponent,
        ChecklistEditComponent
    ]
})
export class ChecklistModule {

}