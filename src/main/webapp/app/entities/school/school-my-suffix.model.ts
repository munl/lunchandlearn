import { BaseEntity, User } from './../../shared';

export class SchoolMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public district?: number,
        public address?: string,
        public principal?: User,
        public courses?: BaseEntity[],
    ) {
    }
}
