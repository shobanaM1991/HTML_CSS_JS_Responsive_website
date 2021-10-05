import { Component, OnInit, Input, Output } from '@angular/core';
import {Task} from '../../Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task;
  faTimes = faTimes;
  @Output() taskDelete: EventEmitter<Task> = new EventEmitter();
  @Output() taskDoubleClick: EventEmitter<Task> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    
  }

  onDelete(task){
    this.taskDelete.emit(task);
  }
  onDoubleClick(task){
    this.taskDoubleClick.emit(task);
  }

}
