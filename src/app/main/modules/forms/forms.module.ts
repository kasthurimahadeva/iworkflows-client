import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule
} from '@angular/material';

import {FuseSharedModule} from '@fuse/shared.module';
import {LeaveFormComponent} from './leave-form/leave-form.component';
import {LeaveFormRoutingModule} from '../../routing/leave-form-routing.module';
import {LeaveFormDataResolver} from './leave-form/leave-form-data.resolver';
import {LeaveFormService} from './leave-form/leave-form.service';
import {UploadModule} from '../upload/upload.module';

@NgModule({
    declarations: [
        LeaveFormComponent
    ],
    imports: [

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
        MatStepperModule,
        MatDatepickerModule,
        MatNativeDateModule,
        LeaveFormRoutingModule,
        MatRadioModule,

        UploadModule,

        FuseSharedModule,
    ],
    providers: [
        LeaveFormService,
        LeaveFormDataResolver
    ]
})
export class FormsModule {
}
