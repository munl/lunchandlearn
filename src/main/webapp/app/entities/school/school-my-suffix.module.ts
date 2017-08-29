import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MydemoSharedModule } from '../../shared';
import { MydemoAdminModule } from '../../admin/admin.module';
import {
    SchoolMySuffixService,
    SchoolMySuffixPopupService,
    SchoolMySuffixComponent,
    SchoolMySuffixDetailComponent,
    SchoolMySuffixDialogComponent,
    SchoolMySuffixPopupComponent,
    SchoolMySuffixDeletePopupComponent,
    SchoolMySuffixDeleteDialogComponent,
    schoolRoute,
    schoolPopupRoute,
    SchoolMySuffixResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...schoolRoute,
    ...schoolPopupRoute,
];

@NgModule({
    imports: [
        MydemoSharedModule,
        MydemoAdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        SchoolMySuffixComponent,
        SchoolMySuffixDetailComponent,
        SchoolMySuffixDialogComponent,
        SchoolMySuffixDeleteDialogComponent,
        SchoolMySuffixPopupComponent,
        SchoolMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        SchoolMySuffixComponent,
        SchoolMySuffixDialogComponent,
        SchoolMySuffixPopupComponent,
        SchoolMySuffixDeleteDialogComponent,
        SchoolMySuffixDeletePopupComponent,
    ],
    providers: [
        SchoolMySuffixService,
        SchoolMySuffixPopupService,
        SchoolMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MydemoSchoolMySuffixModule {}
