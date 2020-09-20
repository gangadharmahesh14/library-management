import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedDataService {

  private dataSource = new BehaviorSubject('default data');
  currentMessage = this.dataSource.asObservable();

  constructor() { }

  changeData(message: string) {
    this.dataSource.next(message);
  }

}
