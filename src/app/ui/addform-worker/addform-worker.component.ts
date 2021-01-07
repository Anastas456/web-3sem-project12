import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {

  name:string;
  surname:string;
  type=0;
  myWorkerType= MyWorkerType;

  @Output() addWorker=
  new EventEmitter<MyWorker>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddWorker(){
    if (this.name !==undefined && this.surname !==undefined && this.name!=='' && this.surname!==''){
      let worker: MyWorker={
        name:this.name,
        surname:this.surname,
        type:this.type
      }
      console.log(worker);
      this.addWorker.emit(worker);
    }
    else{
      alert('Поля не должны быть пустыми!');
    }
    
  }

}
