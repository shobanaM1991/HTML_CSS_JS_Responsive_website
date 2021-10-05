import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
// import { Observable, of } from 'rxjs';
// import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Tasks';

const httpOptions = {
  Headers: new HttpHeaders({
    'Content-Type':'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl='http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  
  deleteTask(task:Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
      
  }

  updateTask(task:Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url,task);
  }
}
