import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { StudentMySuffix } from './student-my-suffix.model';
import { StudentMySuffixPopupService } from './student-my-suffix-popup.service';
import { StudentMySuffixService } from './student-my-suffix.service';
import { CourseMySuffix, CourseMySuffixService } from '../course';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-student-my-suffix-dialog',
    templateUrl: './student-my-suffix-dialog.component.html'
})
export class StudentMySuffixDialogComponent implements OnInit {

    student: StudentMySuffix;
    isSaving: boolean;

    courses: CourseMySuffix[];

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private studentService: StudentMySuffixService,
        private courseService: CourseMySuffixService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.courseService.query()
            .subscribe((res: ResponseWrapper) => { this.courses = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.student.id !== undefined) {
            this.subscribeToSaveResponse(
                this.studentService.update(this.student));
        } else {
            this.subscribeToSaveResponse(
                this.studentService.create(this.student));
        }
    }

    private subscribeToSaveResponse(result: Observable<StudentMySuffix>) {
        result.subscribe((res: StudentMySuffix) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: StudentMySuffix) {
        this.eventManager.broadcast({ name: 'studentListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }

    trackCourseById(index: number, item: CourseMySuffix) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}

@Component({
    selector: 'jhi-student-my-suffix-popup',
    template: ''
})
export class StudentMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private studentPopupService: StudentMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.studentPopupService
                    .open(StudentMySuffixDialogComponent as Component, params['id']);
            } else {
                this.studentPopupService
                    .open(StudentMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
