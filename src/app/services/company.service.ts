import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/internal/operators/map';
import { Company } from '../models/company.model';

@Injectable({providedIn: 'root'})

export class CompanyService {

    constructor(private httpService:HttpService) {}

    public listCompanies(next?:(value:any)=>void, error?:(error:any)=>void, complete?:()=>void) {

        this.httpService.get("company")
            .pipe( map( response => {
                return <Company[]> response;
            }))
            .subscribe(next, error, complete)

    }

    public getCompanyById(companyId:string, next?:(value:any)=>void, error?:(error:any)=>void, complete?:()=>void) {

        this.httpService.get("company/"+companyId)
            .pipe( map( response => {
                return (<Company[]> response)[0];
            }))
            .subscribe(next, error, complete)

    }

    public createCompany(company:Company, next?:(value:any)=>void, error?:(error:any)=>void, complete?:()=>void) {

        this.httpService.post("company", company)
            .pipe( map( response => {
                return (<Company[]> response)[0];
            }))
            .subscribe(next, error, complete)

    }

    public deleteCompany(companyId:string, next?:(value:any)=>void, error?:(error:any)=>void, complete?:()=>void) {

        this.httpService.delete("company/"+companyId)
            .subscribe(next, error, complete)

    }

    public updateCompany(companyId:string, company:Company, next?:(value:any)=>void, error?:(error:any)=>void, complete?:()=>void) {

        this.httpService.put("company/"+companyId, company)
            .pipe( map( response => {
                return (<Company[]> response)[0];
            }))
            .subscribe(next, error, complete)

    }

}