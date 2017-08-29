import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { StudentMySuffixComponent } from './student-my-suffix.component';
import { StudentMySuffixDetailComponent } from './student-my-suffix-detail.component';
import { StudentMySuffixPopupComponent } from './student-my-suffix-dialog.component';
import { StudentMySuffixDeletePopupComponent } from './student-my-suffix-delete-dialog.component';

@Injectable()
export class StudentMySuffixResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const studentRoute: Routes = [
    {
        path: 'student-my-suffix',
        component: StudentMySuffixComponent,
        resolve: {
            'pagingParams': StudentMySuffixResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Students'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'student-my-suffix/:id',
        component: StudentMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Students'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const studentPopupRoute: Routes = [
    {
        path: 'student-my-suffix-new',
        component: StudentMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Students'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'student-my-suffix/:id/edit',
        component: StudentMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Students'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'student-my-suffix/:id/delete',
        component: StudentMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Students'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
