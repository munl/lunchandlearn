import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { SchoolMySuffix } from './school-my-suffix.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class SchoolMySuffixService {

    private resourceUrl = 'api/schools';

    constructor(private http: Http) { }

    create(school: SchoolMySuffix): Observable<SchoolMySuffix> {
        const copy = this.convert(school);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(school: SchoolMySuffix): Observable<SchoolMySuffix> {
        const copy = this.convert(school);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<SchoolMySuffix> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(school: SchoolMySuffix): SchoolMySuffix {
        const copy: SchoolMySuffix = Object.assign({}, school);
        return copy;
    }
}
