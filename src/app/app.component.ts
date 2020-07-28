import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  loginForm: FormGroup;
  constructor(
    private _formbuilder: FormBuilder,
    private _serverApi: UserService
  ) {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this._formbuilder.group({
      userid: ['', Validators.required],
      userpassword: ['', Validators.required],
      rememberme: ['']
    });
  }

  authenticateUser() {
    // if (this.loginForm.invalid) {
    //   return;
    // }

    let userdata =  Object();
    userdata.email = this.loginForm.get('userid').value; // admin
    userdata.password = this.loginForm.get('userpassword').value; // abcd@123
    this._serverApi.post('/api/login', userdata).subscribe((item) => {
      console.log(item);
    })
  }
}
