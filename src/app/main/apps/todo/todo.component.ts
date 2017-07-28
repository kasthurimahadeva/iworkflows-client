import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TodoService } from './todo.service';
import { FormControl } from '@angular/forms';
import { Todo } from './todo.model';
import { FuseUtils } from '../../../core/fuseUtils';

@Component({
    selector   : 'fuse-todo',
    templateUrl: './todo.component.html',
    styleUrls  : ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy
{
    hasSelectedTodos: boolean;
    isIndeterminate: boolean;
    todos: Todo[];
    filters: any[];
    tags: any[];
    searchInput: FormControl;

    onTodosChanged: Subscription;
    onSelectedTodosChanged: Subscription;
    onFiltersChanged: Subscription;
    onTagsChanged: Subscription;

    constructor(private todoService: TodoService)
    {
        this.searchInput = new FormControl('');
    }

    ngOnInit()
    {
        // Subscribe to update todos on changes
        this.onTodosChanged =
            this.todoService.onTodosChanged
                .subscribe(todos => {
                    this.todos = todos;
                });

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

        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(searchText => {
                if ( searchText !== '' )
                {
                    const newArr = FuseUtils.filterArrayByString(this.todos, searchText);
                    this.todoService.onTodosChanged.next(newArr);
                }
                else
                {
                    this.todoService.getTodos();
                }
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
