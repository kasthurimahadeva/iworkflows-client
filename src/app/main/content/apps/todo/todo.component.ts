import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TodoService } from './todo.service';
import { FormControl } from '@angular/forms';
import { Todo } from './todo.model';
import { fuseAnimations } from '../../../../core/animations';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector   : 'fuse-todo',
    templateUrl: './todo.component.html',
    styleUrls  : ['./todo.component.scss'],
    animations : fuseAnimations
})
export class FuseTodoComponent implements OnInit, OnDestroy
{
    hasSelectedTodos: boolean;
    isIndeterminate: boolean;
    filters: any[];
    tags: any[];
    searchInput: FormControl;
    currentTodo: Todo;

    onSelectedTodosChanged: Subscription;
    onFiltersChanged: Subscription;
    onTagsChanged: Subscription;
    onCurrentTodoChanged: Subscription;

    constructor(private todoService: TodoService)
    {
        this.searchInput = new FormControl('');
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

        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(searchText => {
                this.todoService.onSearchTextChanged.next(searchText);
            });

        this.onCurrentTodoChanged =
            this.todoService.onCurrentTodoChanged
                .subscribe(([currentTodo, formType]) => {
                    if ( !currentTodo )
                    {
                        this.currentTodo = null;
                    }
                    else
                    {
                        this.currentTodo = currentTodo;
                    }
                });
    }

    deSelectCurrentTodo()
    {
        this.todoService.onCurrentTodoChanged.next([null, null]);
    }

    ngOnDestroy()
    {
        this.onSelectedTodosChanged.unsubscribe();
        this.onFiltersChanged.unsubscribe();
        this.onTagsChanged.unsubscribe();
        this.onCurrentTodoChanged.unsubscribe();
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
