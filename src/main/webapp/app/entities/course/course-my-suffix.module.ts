import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MydemoSharedModule } from '../../shared';
import { MydemoAdminModule } from '../../admin/admin.module';
import {
    CourseMySuffixService,
    CourseMySuffixPopupService,
    CourseMySuffixComponent,
    CourseMySuffixDetailComponent,
    CourseMySuffixDialogComponent,
    CourseMySuffixPopupComponent,
    CourseMySuffixDeletePopupComponent,
    CourseMySuffixDeleteDialogComponent,
    courseRoute,
    coursePopupRoute,
} from './';

const ENTITY_STATES = [
    ...courseRoute,
    ...coursePopupRoute,
];

@NgModule({
    imports: [
        MydemoSharedModule,
        MydemoAdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        CourseMySuffixComponent,
        CourseMySuffixDetailComponent,
        CourseMySuffixDialogComponent,
        CourseMySuffixDeleteDialogComponent,
        CourseMySuffixPopupComponent,
        CourseMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        CourseMySuffixComponent,
        CourseMySuffixDialogComponent,
        CourseMySuffixPopupComponent,
        CourseMySuffixDeleteDialogComponent,
        CourseMySuffixDeletePopupComponent,
    ],
    providers: [
        CourseMySuffixService,
        CourseMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MydemoCourseMySuffixModule {}
