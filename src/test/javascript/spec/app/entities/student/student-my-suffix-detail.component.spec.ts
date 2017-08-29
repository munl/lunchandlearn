/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { MydemoTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { StudentMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/student/student-my-suffix-detail.component';
import { StudentMySuffixService } from '../../../../../../main/webapp/app/entities/student/student-my-suffix.service';
import { StudentMySuffix } from '../../../../../../main/webapp/app/entities/student/student-my-suffix.model';

describe('Component Tests', () => {

    describe('StudentMySuffix Management Detail Component', () => {
        let comp: StudentMySuffixDetailComponent;
        let fixture: ComponentFixture<StudentMySuffixDetailComponent>;
        let service: StudentMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [MydemoTestModule],
                declarations: [StudentMySuffixDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    StudentMySuffixService,
                    JhiEventManager
                ]
            }).overrideTemplate(StudentMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(StudentMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(StudentMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new StudentMySuffix(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.student).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
