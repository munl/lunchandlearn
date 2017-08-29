import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MydemoSchoolMySuffixModule } from './school/school-my-suffix.module';
import { MydemoStudentMySuffixModule } from './student/student-my-suffix.module';
import { MydemoCourseMySuffixModule } from './course/course-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        MydemoSchoolMySuffixModule,
        MydemoStudentMySuffixModule,
        MydemoCourseMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MydemoEntityModule {}
