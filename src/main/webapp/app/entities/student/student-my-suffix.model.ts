import { BaseEntity } from './../../shared';

export class StudentMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public age?: number,
        public courses?: BaseEntity[],
    ) {
    }
}
