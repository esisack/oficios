export class BusinessTask {
    id: number;
    parentId: number;
    name: string;
    description: string;
    status: string;
    priority: number;
    actualOwner: string;
    skipable: boolean;
    createdOn: Date;
    activationTime: Date;
    containerId: string;
    processId: string;
    processVariables: Map<string, object>
}