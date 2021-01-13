import { SideWalk } from "./side-walk"
import { Street } from "./street"
import { User } from "./user";

export class WorkUnit {
    id: number
    domainId: number
    sideWalk: SideWalk
    street: Street
    addressNumber: number
    creater: User
    creationDate: Date
    lastModifiedDate: Date
    lat: number;
    lng: number;
    associatedDocuments: Document[]   
}
