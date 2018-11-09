export class Task {
    id?: string;
    name?: string;
    assignee?: string;
    created?: string;
    due?: string;
    followUp?: string;
    delegationState?: null;
    description?: string;
    executionId?: string;
    owner?: string;
    parentTaskId?: string;
    priority?: number;
    processDefinitionId?: string;
    processInstanceId?: string;
    taskDefinitionKey?: string;
    caseExecutionId?: string;
    caseInstanceId?: string;
    caseDefinitionId?: string;
    suspended?: boolean;
    formKey?: string;
    tenantId?: string;
}
