import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyWorker, myWorkerDatabase, MyWorkerType } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {
  
  workers: MyWorker[]=myWorkerDatabase;
  myWorkerType = MyWorkerType;
  
  @Input() workerForEdit:MyWorker;
  @Output() edittedWorker=
  new EventEmitter<MyWorker>();

  edittedType:number;
  
  constructor() {  
  }

  ngOnInit(): void {
}


onEditWorker(inputName, inputSurname){
  if(inputName!=='' && inputSurname!==''){
    let workerEdit: MyWorker={
      id:this.workerForEdit.id,
      name:inputName,
      surname:inputSurname,
      type:this.edittedType
    }
    // console.log(workerEdit);
    this.edittedWorker.emit(workerEdit);
  }
  else{
    alert('Поля не должны быть пустыми!');
  }
  
}

}
