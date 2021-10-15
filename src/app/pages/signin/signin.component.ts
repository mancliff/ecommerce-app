import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private as: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signin(form: NgForm){

    let data = form.value
    // this.as.login(data.email, data.password).then(result => console.log(result)).catch(err => console.log(err))
    this.as.login(data.email, data.password).then(() => this.router.navigate(['home']))
    
  }

}
