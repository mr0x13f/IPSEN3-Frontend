  
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpService } from './http.service';
import { User } from '../models/user.model';
import { RegisterForm } from '../models/register-form.model';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})

export class UserService {

    constructor(
        private httpService:HttpService,
        private authService:AuthService,
    ) {}

    public getSelf(next?:(value:any)=>void, error?:(error:any)=>void, complete?:()=>void) {

        this.httpService.get("user")
            .pipe( map( response => {
                return <User> response[0];
            }))
            .subscribe(next, error, complete)

    }

    public register(registerForm:RegisterForm, next?:(value:any)=>void, error?:(error:any)=>void, complete?:()=>void) {

        this.httpService.post("user/register", registerForm)
            .pipe( map( response => {
                return <User> response[0];
            }))
            .subscribe(next, error, complete)

    }

    public update(registerForm:RegisterForm, next?:(value:any)=>void, error?:(error:any)=>void, complete?:()=>void) {

        this.httpService.put("user", registerForm)
            .pipe( map( response => {
                return <User> response[0];
            }))
            .subscribe(next, error, complete)

    }

    public delete(confirmPassword:string, next?:()=>void, error?:(error:any)=>void, complete?:()=>void) {

        this.httpService.headers = this.httpService.headers.set(
            "Authorization",
            "Basic " + btoa(this.authService.user.email + ":" + confirmPassword)
        );

        this.httpService.delete("user")
            .subscribe(() => {
                this.authService.clearAuth();
                if (next) next();
            }, error, complete);

    }

}