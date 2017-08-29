import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MydemoSharedModule } from '../../shared';
import {
    StudentMySuffixService,
    StudentMySuffixPopupService,
    StudentMySuffixComponent,
    StudentMySuffixDetailComponent,
    StudentMySuffixDialogComponent,
    StudentMySuffixPopupComponent,
    StudentMySuffixDeletePopupComponent,
    StudentMySuffixDeleteDialogComponent,
    studentRoute,
    studentPopupRoute,
    StudentMySuffixResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...studentRoute,
    ...studentPopupRoute,
];

@NgModule({
    imports: [
        MydemoSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        StudentMySuffixComponent,
        StudentMySuffixDetailComponent,
        StudentMySuffixDialogComponent,
        StudentMySuffixDeleteDialogComponent,
        StudentMySuffixPopupComponent,
        StudentMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        StudentMySuffixComponent,
        StudentMySuffixDialogComponent,
        StudentMySuffixPopupComponent,
        StudentMySuffixDeleteDialogComponent,
        StudentMySuffixDeletePopupComponent,
    ],
    providers: [
        StudentMySuffixService,
        StudentMySuffixPopupService,
        StudentMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MydemoStudentMySuffixModule {}
