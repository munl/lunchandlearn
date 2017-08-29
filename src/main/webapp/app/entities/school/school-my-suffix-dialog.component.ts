import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { SchoolMySuffix } from './school-my-suffix.model';
import { SchoolMySuffixPopupService } from './school-my-suffix-popup.service';
import { SchoolMySuffixService } from './school-my-suffix.service';
import { User, UserService } from '../../shared';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-school-my-suffix-dialog',
    templateUrl: './school-my-suffix-dialog.component.html'
})
export class SchoolMySuffixDialogComponent implements OnInit {

    school: SchoolMySuffix;
    isSaving: boolean;

    users: User[];

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private schoolService: SchoolMySuffixService,
        private userService: UserService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.userService.query()
            .subscribe((res: ResponseWrapper) => { this.users = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.school.id !== undefined) {
            this.subscribeToSaveResponse(
                this.schoolService.update(this.school));
        } else {
            this.subscribeToSaveResponse(
                this.schoolService.create(this.school));
        }
    }

    private subscribeToSaveResponse(result: Observable<SchoolMySuffix>) {
        result.subscribe((res: SchoolMySuffix) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: SchoolMySuffix) {
        this.eventManager.broadcast({ name: 'schoolListModification', content: 'OK'});
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

    trackUserById(index: number, item: User) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-school-my-suffix-popup',
    template: ''
})
export class SchoolMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private schoolPopupService: SchoolMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.schoolPopupService
                    .open(SchoolMySuffixDialogComponent as Component, params['id']);
            } else {
                this.schoolPopupService
                    .open(SchoolMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
