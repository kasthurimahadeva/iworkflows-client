import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector   : 'fuse-todo-details',
    templateUrl: './todo-details.component.html',
    styleUrls  : ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit, OnDestroy
{
    todo: Todo;
    tags: any[];
    todoForm: FormGroup;

    onFormChange: any;
    onCurrentTodoChanged: Subscription;
    onTagsChanged: Subscription;

    constructor(private todoService: TodoService,
                private formBuilder: FormBuilder)
    {


    }

    ngOnInit()
    {
        // Subscribe to update the current todo
        this.onCurrentTodoChanged =
            this.todoService.onCurrentTodoChanged
                .subscribe(currentTodo => {
                    this.todo = currentTodo;

                    if ( this.todo )
                    {
                        this.todoForm = this.createTodoForm();
                        this.onFormChange = this.todoForm.valueChanges
                            .debounceTime(500)
                            .distinctUntilChanged()
                            .subscribe(data => {
                                this.todoService.updateTodo(data);
                            });
                    }
                });

        // Subscribe to update on tag change
        this.onTagsChanged =
            this.todoService.onTagsChanged
                .subscribe(labels => {
                    this.tags = labels;
                });
    }

    createTodoForm()
    {
        return this.formBuilder.group({
            'id'       : [this.todo.id],
            'title'    : [this.todo.title],
            'notes'    : [this.todo.notes],
            'startDate': [this.todo.startDate],
            'dueDate'  : [this.todo.dueDate],
            'completed': [this.todo.completed],
            'starred'  : [this.todo.starred],
            'important': [this.todo.important],
            'deleted'  : [this.todo.deleted],
            'tags'     : [this.todo.tags]
        });
    }


    toggleStar(event)
    {
        event.stopPropagation();

        this.todo.toggleStar();

        this.todoService.updateTodo(this.todo);
    }

    toggleImportant(event)
    {
        event.stopPropagation();

        this.todo.toggleImportant();

        this.todoService.updateTodo(this.todo);
    }

    /**
     * Toggle Completed
     * @param event
     */
    toggleCompleted(event)
    {
        event.stopPropagation();

        this.todo.toggleCompleted();

        this.todoService.updateTodo(this.todo);
    }

    /**
     * Toggle Deleted
     * @param event
     */
    toggleDeleted(event)
    {
        event.stopPropagation();

        this.todo.toggleDeleted();

        this.todoService.updateTodo(this.todo);
    }

    toggleTagOnTodo(tagId)
    {
        this.todoService.toggleTagOnTodo(tagId, this.todo);
    }

    ngOnDestroy()
    {
        if ( this.onFormChange )
        {
            this.onFormChange.unsubscribe();
        }
        this.onCurrentTodoChanged.unsubscribe();
    }
}
