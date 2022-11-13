import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

export const DialogSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  public open(component: any, dialogOptions: any, size: string = DialogSize.MEDIUM): Observable<any> {
    dialogOptions = Object.assign(dialogOptions, {
      panelClass: ['pokemon-dialog', `dialog-${size}`],
    });
    return this.dialog.open(component, dialogOptions).afterClosed();
  }
}
