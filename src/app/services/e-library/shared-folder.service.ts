import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedFolderService {
  private folderSource = new BehaviorSubject<string>('');
  selectedFolder$ = this.folderSource.asObservable();

  setFolder(folderName: string) {
    this.folderSource.next(folderName);
  }

  getFolder(): string {
    return this.folderSource.getValue();
  }
}
