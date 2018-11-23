import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'processDefinitionKey'})
export class ProcessDefinitionKeyPipe implements PipeTransform {
    transform(processDefinitionId: string): string {
        return processDefinitionId.split(':')[0];
    }
}
