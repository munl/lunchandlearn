/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { MydemoTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { SchoolMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/school/school-my-suffix-detail.component';
import { SchoolMySuffixService } from '../../../../../../main/webapp/app/entities/school/school-my-suffix.service';
import { SchoolMySuffix } from '../../../../../../main/webapp/app/entities/school/school-my-suffix.model';

describe('Component Tests', () => {

    describe('SchoolMySuffix Management Detail Component', () => {
        let comp: SchoolMySuffixDetailComponent;
        let fixture: ComponentFixture<SchoolMySuffixDetailComponent>;
        let service: SchoolMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [MydemoTestModule],
                declarations: [SchoolMySuffixDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    SchoolMySuffixService,
                    JhiEventManager
                ]
            }).overrideTemplate(SchoolMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SchoolMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SchoolMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new SchoolMySuffix(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.school).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
