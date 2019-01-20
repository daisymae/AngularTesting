import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable, of } from 'rxjs';

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
});