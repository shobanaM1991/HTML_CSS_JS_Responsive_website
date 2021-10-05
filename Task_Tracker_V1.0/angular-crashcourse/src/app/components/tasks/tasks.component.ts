import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';


import { Task } from 'src/app/Tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
  toggleDeleteTask(task:Task) {
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }
  toggleDoubleClickTask(task:Task){
    task.remainder = !task.remainder;
    this.taskService
    .updateTask(task)
    .subscribe();
  }
}