import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage: any;
  constructor(private as: AuthService, private us: UserService) { }

  ngOnInit(): void {
  }

  signup(form : NgForm) : any{

    let data: User = form.value
    this.as.signup(data.email,data.password).then(result => {
      this.errorMessage = ''
      this.us.CreateNewUser(result.user?.uid, data.firstName, data.lastName, data.email, data.password)

    })
    .catch(err => {
      this.errorMessage = err.message
    })
  }

}
