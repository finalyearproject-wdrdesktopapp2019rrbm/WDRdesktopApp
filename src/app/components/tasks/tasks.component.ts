import { Component, OnInit,EventEmitter } from '@angular/core';
import { Task } from '../models/task/task';
import { DataService } from '../services/data/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

allTasks:Task[]=[];
  constructor(private _datatask:DataService,private _router:Router) { }

  ngOnInit() {

    this._datatask.getAllTasks().subscribe(
        (data: Task[]) => {
          this.allTasks = data;

        }
      );
  }
  updateStatus(item:Task){

    this._datatask.editTask(item).subscribe(

      (data:any)=>{
        if(data.affectedRows==1)
        {
          if(item.Status=='done'){
          item.Status='pending';
          }
          else{
            item.Status='done';
          }
        }
      }

    );

   // this._router.navigate(['/editTask',item.Id,item.Title,item.Status]);
  }
  deleteStatus(item:Task){

    this._datatask.deleteTask(item).subscribe(

      (data:any)=>{
        if(data.affectedRows==1)
        {
          this.allTasks.splice(this.allTasks.indexOf(item),1);
        }
        else
        {
          alert("Error Deleting");
        }
      }

    );

  }

}
