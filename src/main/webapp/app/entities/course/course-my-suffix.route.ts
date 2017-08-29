import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { CourseMySuffixComponent } from './course-my-suffix.component';
import { CourseMySuffixDetailComponent } from './course-my-suffix-detail.component';
import { CourseMySuffixPopupComponent } from './course-my-suffix-dialog.component';
import { CourseMySuffixDeletePopupComponent } from './course-my-suffix-delete-dialog.component';

export const courseRoute: Routes = [
    {
        path: 'course-my-suffix',
        component: CourseMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Courses'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'course-my-suffix/:id',
        component: CourseMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Courses'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const coursePopupRoute: Routes = [
    {
        path: 'course-my-suffix-new',
        component: CourseMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Courses'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'course-my-suffix/:id/edit',
        component: CourseMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Courses'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'course-my-suffix/:id/delete',
        component: CourseMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Courses'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
