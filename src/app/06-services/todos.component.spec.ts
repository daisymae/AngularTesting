import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable, of, empty, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null); // change implementation in service
    component = new TodosComponent(service); // alternative: instead of giving real implementation of service, give a stub
  });

  it('should set todos property with the items returned from the server', () => {
    let todos = [1, 2, 3]
    // using SpyOn will replace the real function with the code we have here
    spyOn(service, 'getTodos').and.callFake(() => {
      // return of([ [1, 2, 3] ]); // ok, but could also return real todo items
      // return of([ [
      //   {id: 1, title: 'a'},
      //   {id: 2, title: 'b'},
      //   {id: 3, title: 'c'},
      // ]])
      // or use variable for comparison at end:
      return of(todos);
    })

    component.ngOnInit();

    expect(component.todos.length).toBeGreaterThan(0); // generic
    expect(component.todos.length).toBe(3); // a little more specific, but still doesn't validate the values
    expect(component.todos).toBe(todos); // very specific
  });

  // need 3 tests for the add function:
  // 1. make sure service.add is called
  // 2. make sure todo is added to our todos array
  // 3. in case of error, make sure error returned

  it('should call the server to save the changes when a new todo item is added', () => {
    let spy = spyOn(service, 'add').and.callFake((t => {
      return empty();
    }));

    component.add();

    expect(spy).toHaveBeenCalled();
  })

  it('should add the new todo returned from the server', () => {
    let todo = {id: 1};
    // another way to handle spyOn instead of an => function
    let spy = spyOn(service, 'add').and.returnValue(of(todo));
    
    component.add();

    // console.log('component: ' + JSON.stringify(component));

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  })

  it('should set the message property if server returns an error when adding a new todo', () => {
    let error = 'error from the server';
    // another way to handle spyOn instead of an => function
    let spy = spyOn(service, 'add').and.returnValue(throwError(error));
    
    component.add();

    // console.log('component: ' + JSON.stringify(component));

    expect(component.message).toBe(error);
  })
});