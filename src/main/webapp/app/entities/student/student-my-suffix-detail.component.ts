import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager  } from 'ng-jhipster';

import { StudentMySuffix } from './student-my-suffix.model';
import { StudentMySuffixService } from './student-my-suffix.service';

@Component({
    selector: 'jhi-student-my-suffix-detail',
    templateUrl: './student-my-suffix-detail.component.html'
})
export class StudentMySuffixDetailComponent implements OnInit, OnDestroy {

    student: StudentMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private studentService: StudentMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInStudents();
    }

    load(id) {
        this.studentService.find(id).subscribe((student) => {
            this.student = student;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInStudents() {
        this.eventSubscriber = this.eventManager.subscribe(
            'studentListModification',
            (response) => this.load(this.student.id)
        );
    }
}
