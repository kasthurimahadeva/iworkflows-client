import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";
import {ProjectDashboardDb} from "./dashboard-projects";

export class FakeDbService implements InMemoryDbService {
    createDb(): {} | Observable<{}> | Promise<{}> {
        return {
            // Dashboards
            'project-dashboard-projects': ProjectDashboardDb.projects,
            'project-dashboard-widgets': ProjectDashboardDb.widgets
        };
    }

}