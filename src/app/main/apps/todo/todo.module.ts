import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import { MainSidenavComponent } from './sidenavs/main/main-sidenav.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

const routes: Routes = [
    {
        path     : 'all',
        component: TodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'all/:todoId',
        component: TodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'tag/:tagHandle',
        component: TodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'tag/:tagHandle/:todoId',
        component: TodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'filter/:filterHandle',
        component: TodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'filter/:filterHandle/:todoId',
        component: TodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path      : '**',
        redirectTo: 'all'
    }
];

@NgModule({
    declarations: [
        TodoComponent,
        MainSidenavComponent,
        TodoListItemComponent,
        TodoListComponent,
        TodoDetailsComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers   : [
        TodoService
    ]
})
export class FuseTodoModule
{
}
