import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiAlertService } from 'ng-jhipster';

import { CourseMySuffix } from './course-my-suffix.model';
import { CourseMySuffixService } from './course-my-suffix.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-course-my-suffix',
    templateUrl: './course-my-suffix.component.html'
})
export class CourseMySuffixComponent implements OnInit, OnDestroy {
courses: CourseMySuffix[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private courseService: CourseMySuffixService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.courseService.query().subscribe(
            (res: ResponseWrapper) => {
                this.courses = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInCourses();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: CourseMySuffix) {
        return item.id;
    }
    registerChangeInCourses() {
        this.eventSubscriber = this.eventManager.subscribe('courseListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
