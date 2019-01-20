
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo) {
    return this.http.post<any[]>('...', todo).pipe(map(r => r));
  }

  getTodos() { 
    return this.http.get<any[]>('...');
  }

  delete(id) {
    return this.http.delete<any[]>('...').pipe(map(r => r));
  }
}