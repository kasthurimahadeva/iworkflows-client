import { Component, HostBinding, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Todo } from '../../todo.model';
import { TodoService } from '../../todo.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector     : 'fuse-todo-list-item',
    templateUrl  : './todo-list-item.component.html',
    styleUrls    : ['./todo-list-item.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TodoListItemComponent implements OnInit, OnDestroy
{
    @Input() todo: Todo;
    tags: any[];
    @HostBinding('class.selected') selected: boolean;
    @HostBinding('class.completed') completed: boolean;

    onSelectedTodosChanged: Subscription;
    onTagsChanged: Subscription;

    constructor(private todoService: TodoService)
    {
    }

    ngOnInit()
    {
        // Set the initial values
        this.todo = new Todo(this.todo);
        this.completed = this.todo.completed;

        // Subscribe to update on selected todo change
        this.onSelectedTodosChanged =
            this.todoService.onSelectedTodosChanged
                .subscribe(selectedTodos => {
                    this.selected = false;

                    if ( selectedTodos.length > 0 )
                    {
                        for ( const todo of selectedTodos )
                        {
                            if ( todo.id === this.todo.id )
                            {
                                this.selected = true;
                                break;
                            }
                        }
                    }
                });

        // Subscribe to update on tag change
        this.onTagsChanged =
            this.todoService.onTagsChanged
                .subscribe(tags => {
                    this.tags = tags;
                });
    }

    ngOnDestroy()
    {
        this.onSelectedTodosChanged.unsubscribe();
    }

    onSelectedChange()
    {
        this.todoService.toggleSelectedTodo(this.todo.id);
    }

    /**
     * Toggle star
     * @param event
     */
    toggleStar(event)
    {
        event.stopPropagation();

        this.todo.toggleStar();

        this.todoService.updateTodo(this.todo);
    }

    /**
     * Toggle Important
     * @param event
     */
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
}
