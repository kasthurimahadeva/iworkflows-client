import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Todo } from './todo.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoService implements Resolve<any>
{
    todos: Todo[];
    selectedTodos: Todo[];
    currentTodo: Todo;

    filters: any[];
    tags: any[];
    routeParams: any;

    onTodosChanged: BehaviorSubject<any> = new BehaviorSubject([]);
    onSelectedTodosChanged: BehaviorSubject<any> = new BehaviorSubject([]);
    onCurrentTodoChanged: BehaviorSubject<any> = new BehaviorSubject([]);

    onFiltersChanged: BehaviorSubject<any> = new BehaviorSubject([]);
    onTagsChanged: BehaviorSubject<any> = new BehaviorSubject([]);

    constructor(private http: Http)
    {
        this.selectedTodos = [];
    }

    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getFilters(),
                this.getTags(),
                this.getTodos()
            ]).then(
                () => {
                    if ( this.routeParams.todoId )
                    {
                        this.setCurrentTodo(this.routeParams.todoId);
                    }
                    else
                    {
                        this.setCurrentTodo(null);
                    }

                    resolve();
                },
                reject
            );
        });
    }


    /**
     * Get all filters
     * @returns {Promise<any>}
     */
    getFilters(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/todo-filters')
                .subscribe(response => {
                    this.filters = response.json().data;
                    this.onFiltersChanged.next(this.filters);
                    resolve(this.filters);
                }, reject);
        });
    }

    /**
     * Get all tags
     * @returns {Promise<any>}
     */
    getTags(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/todo-tags')
                .subscribe(response => {
                    this.tags = response.json().data;
                    this.onTagsChanged.next(this.tags);
                    resolve(this.tags);
                }, reject);
        });
    }

    /**
     * Get todos
     * @returns {Promise<Todo[]>}
     */
    getTodos(): Promise<Todo[]>
    {
        if ( this.routeParams.tagHandle )
        {
            return this.getTodosByTag(this.routeParams.tagHandle);
        }

        if ( this.routeParams.filterHandle )
        {
            return this.getTodosByFilter(this.routeParams.filterHandle);
        }

        return this.getTodosByParams(this.routeParams);
    }

    /**
     * Get todos by params
     * @param handle
     * @returns {Promise<Todo[]>}
     */
    getTodosByParams(handle): Promise<Todo[]>
    {
        return new Promise((resolve, reject) => {

            this.http.get('api/todo-todos')
                .subscribe(todos => {
                    this.todos = todos.json().data.map(todo => {
                        return new Todo(todo);
                    });

                    this.onTodosChanged.next(this.todos);

                    resolve(this.todos);
                });
        });
    }

    /**
     * Get todos by filter
     * @param handle
     * @returns {Promise<Todo[]>}
     */
    getTodosByFilter(handle): Promise<Todo[]>
    {

        let param = handle + '=true';

        if ( handle === 'dueDate' )
        {
            param = handle + '=^$|\\s+';
        }

        return new Promise((resolve, reject) => {

            this.http.get('api/todo-todos?' + param)
                .subscribe(todos => {

                    this.todos = todos.json().data.map(todo => {
                        return new Todo(todo);
                    });

                    this.onTodosChanged.next(this.todos);

                    resolve(this.todos);

                }, reject);
        });
    }

    /**
     * Get todos by tag
     * @param handle
     * @returns {Promise<Todo[]>}
     */
    getTodosByTag(handle): Promise<Todo[]>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/todo-tags?handle=' + handle)
                .subscribe(tags => {

                    const tagId = tags.json().data[0].id;

                    this.http.get('api/todo-todos?tags=' + tagId)
                        .subscribe(todos => {

                            this.todos = todos.json().data.map(todo => {
                                return new Todo(todo);
                            });

                            this.onTodosChanged.next(this.todos);

                            resolve(this.todos);

                        }, reject);
                });
        });
    }

    /**
     * Toggle selected todo by id
     * @param id
     */
    toggleSelectedTodo(id)
    {
        // First, check if we already have that todo as selected...
        if ( this.selectedTodos.length > 0 )
        {
            for ( const todo of this.selectedTodos )
            {
                // ...delete the selected todo
                if ( todo.id === id )
                {
                    const index = this.selectedTodos.indexOf(todo);

                    if ( index !== -1 )
                    {
                        this.selectedTodos.splice(index, 1);

                        // Trigger the next event
                        this.onSelectedTodosChanged.next(this.selectedTodos);

                        // Return
                        return;
                    }
                }
            }
        }

        // If we don't have it, push as selected
        this.selectedTodos.push(
            this.todos.find(todo => {
                return todo.id === id;
            })
        );

        // Trigger the next event
        this.onSelectedTodosChanged.next(this.selectedTodos);
    }

    /**
     * Toggle select all
     */
    toggleSelectAll()
    {
        if ( this.selectedTodos.length > 0 )
        {
            this.deselectTodos();
        }
        else
        {
            this.selectTodos();
        }

    }

    selectTodos(filterParameter?, filterValue?)
    {
        this.selectedTodos = [];

        // If there is no filter, select all todos
        if ( filterParameter === undefined || filterValue === undefined )
        {
            this.selectedTodos = this.todos;
        }
        else
        {
            this.selectedTodos.push(...
                this.todos.filter(todo => {
                    return todo[filterParameter] === filterValue;
                })
            );
        }

        // Trigger the next event
        this.onSelectedTodosChanged.next(this.selectedTodos);
    }

    deselectTodos()
    {
        this.selectedTodos = [];

        // Trigger the next event
        this.onSelectedTodosChanged.next(this.selectedTodos);
    }

    /**
     * Set current todo by id
     * @param id
     */
    setCurrentTodo(id)
    {
        this.currentTodo = this.todos.find(todo => {
            return todo.id === id;
        });

        this.onCurrentTodoChanged.next(this.currentTodo);
    }

    /**
     * Toggle tag on selected todos
     * @param tagId
     */
    toggleTagOnSelectedTodos(tagId)
    {
        this.selectedTodos.map(todo => {
            this.toggleTagOnTodo(tagId, todo);
        });
    }

    toggleTagOnTodo(tagId, todo)
    {

        const index = todo.tags.indexOf(tagId);

        if ( index !== -1 )
        {
            todo.tags.splice(index, 1);
        }
        else
        {
            todo.tags.push(tagId);
        }
        this.updateTodo(todo);
    }

    /**
     * Update the todo
     * @param todo
     * @returns {Promise<any>}
     */
    updateTodo(todo)
    {
        return new Promise((resolve, reject) => {

            this.http.post('api/todo-todos/' + todo.id, {...todo})
                .subscribe(response => {

                    this.getTodos().then(todos => {

                        if ( todos && this.currentTodo )
                        {
                            this.setCurrentTodo(this.currentTodo.id);
                        }

                        resolve(todos);

                    }, reject);
                });
        });
    }
}
