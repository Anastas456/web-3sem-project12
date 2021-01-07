import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyWorker, myWorkerDatabase, MyWorkerType } from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[]=myWorkerDatabase;
  myWorkerType = MyWorkerType;

  flag=false;
  workerForEdit:MyWorker;


  getByType(type:number){
    return this.workers.filter((worker) => worker.type === type);
  }
  onDeleteWorker(id:number){
    let index=this.workers.findIndex((worker)=>worker.id === id);
    if (index!=-1){
      this.workers.splice(index,1);
    }
  }

  onAddWorker(worker:MyWorker){
    let id = this.workers.length > 0 ? this.workers[this.workers.length-1].id+1
    :0;
    worker.id=id;
    this.workers.push(worker);
  }

  toEditWorker(id:number){
    this.flag=true;
    // console.log(this.flag);
    // console.log('get id '+id);
    let index=this.workers.findIndex((worker)=>worker.id === id);
    // console.log('index: '+index);
    this.workerForEdit=this.workers[index];
    // console.log(this.workers[index]);
  
  }

  onEditWorker(workerEdit:MyWorker){

    // console.log('get editted worker');
    // console.log(workerEdit);
    
    let oldWorker=this.workers.find((worker)=>worker.id===workerEdit.id);
    // console.log(oldWorker);
    this.workers.splice(oldWorker.id-1,1);
    this.workers.push(workerEdit);
    // console.log(this.workers);
    this.flag=false;

  }
  

  
}
