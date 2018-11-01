import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';
import {ProjectDashboardDb} from './dashboard-projects';
import {TodoFakeDb} from './todo';

export class FakeDbService implements InMemoryDbService {
    createDb(): {} | Observable<{}> | Promise<{}> {
        return {
            // Dashboards
            'project-dashboard-projects': ProjectDashboardDb.projects,
            'project-dashboard-widgets': ProjectDashboardDb.widgets,

            // Todo
            'todo-todos'  : TodoFakeDb.todos,
            'todo-filters': TodoFakeDb.filters,
            'todo-tags'   : TodoFakeDb.tags,
        };
    }
}