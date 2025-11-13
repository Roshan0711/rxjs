import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/Gaurds/canDeactivate.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , CanComponentDeactivate {
  loginForm! : FormGroup;
  isSaved : boolean = false
  formData :string = ''
  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl(''),
      password : new FormControl('')
    })

  }

  canDeactivate(){ 
    if (!this.isSaved && this.formData.trim() !== '') {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }

   onsubmit(){
      console.log(this.loginForm.value)
      localStorage.setItem('loggedIn' , "true")
      this.router.navigate(["/home"]);
    }

    setCookie(params:any){
      let d: Date = new Date();
      d.setTime(d.getTime() + (params.expireDays ? params.expireDays : 1) * 24 * 60 * 60 * 1000);
      document.cookie =
      (params.name ? params.name : '') +
      '=' +
      (params.value ? params.value : '') +
      ';' +
      (params.session && params.session == true ? '' : 'expires=' + d.toUTCString() + ';') +
      'path=' +
      (params.path && params.path.length > 0 ? params.path : '/') +
      ';' +
      (location.protocol === 'https:' && params.secure && params.secure == true ? 'secure' : '');
    }

}
