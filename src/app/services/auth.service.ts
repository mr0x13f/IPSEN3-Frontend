import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { UserService } from './user.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class AuthService {

    public user: User;
    public token: string;

    constructor(private router: Router, private httpService: HttpService, private userService: UserService) { }

    public login(email: string, password: string, success?: () => void, error?: (error: any) => void): void {

        this.httpService.headers = this.httpService.headers.set("Authorization", "Basic " + btoa(email + ":" + password));

        this.getToken(token => {

            this.validateToken(token, success, error);

        }, err => {

            this.clearAuth();
            if (error) error(err);

        });

    }

    private validateToken(token: string, success?: () => void, error?: (error: any) => void) {
        this.httpService.headers = this.httpService.headers.set("Authorization", "Bearer " + token);

        this.userService.getSelf(user => {

            this.token = token;
            this.user = user;
            this.localStoreAuthData(token);

        }, err => {

            this.clearAuth();
            if (error) error(err);

        }, success)
    }

    private localStoreAuthData(token: string) {
        console.log(token)
        localStorage.setItem('token', JSON.stringify(token))

    }

    public autoLogin() {
        const loadedToken = JSON.parse(localStorage.getItem('token'));
        if (!loadedToken) {
            return;
        }
        console.log(loadedToken);
        this.validateToken(loadedToken, () => {
            console.log("validate token succes");
            this.token = loadedToken;
            this.getUserFromDatabase();
        }, err => {
            console.log("validate token not a succes");

        });

    }

    private getUserFromDatabase() {
        console.log('get user from db')
        this.httpService
        .get('user')
        .pipe(
            tap((receivedData: User) => console.log(receivedData)),
            map((receivedData: User) => {
                this.user =  new User(
                    receivedData.email,
                    receivedData.name,
                    receivedData.password
                )
            }
        ))
        console.log(this.user.password);

    }



    public clearAuth() {

        //this.user.next(null) maybe?
        this.user = null;
        this.token = null;
        this.httpService.headers = this.httpService.headers.delete("Authorization");

    }

    public isLoggedIn(): boolean {
        return this.user != null;
    }

    public getToken(next?: (value: any) => void, error?: (error: any) => void, complete?: () => void) {

        this.httpService.get("user/token")
            .pipe(map(response => {
                let loginResponse = <{ token: string }>response;
                return loginResponse.token;
            }))
            .subscribe(next, error, complete)

    }

    // public requireLogin() {

    //     if (!this.isLoggedIn()) this.router.navigate(["login"]);
    //     return !this.isLoggedIn();

    // }

}