
import { TodoService } from './todo.service'
import { map } from 'rxjs/operators';

export class TodosComponent { 
  todos: any[] = [];
  message; 

  constructor(private service: TodoService) {}

  ngOnInit() { 
    this.service.getTodos().pipe(map(t => this.todos = t)).subscribe();
  }

  add() { 
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }  
}
