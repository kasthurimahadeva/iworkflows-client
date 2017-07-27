import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TodoService } from './todo.service';

@Component({
    selector   : 'fuse-todo',
    templateUrl: './todo.component.html',
    styleUrls  : ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy
{
    hasSelectedTodos: boolean;
    isIndeterminate: boolean;
    filters: any[];
    tags: any[];

    onSelectedTodosChanged: Subscription;
    onFiltersChanged: Subscription;
    onTagsChanged: Subscription;

    constructor(private todoService: TodoService)
    {
    }

    ngOnInit()
    {
        this.onSelectedTodosChanged =
            this.todoService.onSelectedTodosChanged
                .subscribe(selectedTodos => {

                    setTimeout(() => {
                        this.hasSelectedTodos = selectedTodos.length > 0;
                        this.isIndeterminate = (selectedTodos.length !== this.todoService.todos.length && selectedTodos.length > 0);
                    }, 0);
                });

        this.onFiltersChanged =
            this.todoService.onFiltersChanged
                .subscribe(folders => {
                    this.filters = this.todoService.filters;
                });

        this.onTagsChanged =
            this.todoService.onTagsChanged
                .subscribe(tags => {
                    this.tags = this.todoService.tags;
                });
    }

    ngOnDestroy()
    {
        this.onSelectedTodosChanged.unsubscribe();
        this.onFiltersChanged.unsubscribe();
        this.onTagsChanged.unsubscribe();
    }

    toggleSelectAll()
    {
        this.todoService.toggleSelectAll();
    }

    selectTodos(filterParameter?, filterValue?)
    {
        this.todoService.selectTodos(filterParameter, filterValue);
    }

    deselectTodos()
    {
        this.todoService.deselectTodos();
    }

    toggleTagOnSelectedTodos(tagId)
    {
        this.todoService.toggleTagOnSelectedTodos(tagId);
    }

}
