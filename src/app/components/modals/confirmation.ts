import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'confirmation.dialog',
    templateUrl: 'confirmation.html',
})
export class DialogBox {
  constructor(public dialogRef: MatDialogRef<DialogBox>) {}
}
