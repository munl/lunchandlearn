import { BaseEntity, User } from './../../shared';

export class CourseMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public subject?: string,
        public teacher?: User,
        public school?: BaseEntity,
        public students?: BaseEntity[],
    ) {
    }
}
