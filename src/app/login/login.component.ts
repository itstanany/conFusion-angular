import { Component, OnInit } from '@angular/core';
// to turn it into dialog component
import { MatDialog, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: '', remember: false};
  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('User', this.user);
    this.dialogRef.close();
  }

}
