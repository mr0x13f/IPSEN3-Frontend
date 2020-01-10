import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/internal/operators/map';
import { Project } from '../models/project.model';

@Injectable({providedIn: 'root'})

export class ProjectService {

    constructor(private httpService:HttpService) {}

    public listProjects(next?:(value:any)=>void, error?:(error:any)=>void, complete?:()=>void) {

        this.httpService.get("projects")
            .pipe( map( response => {
                return <Project[]> response;
            }))
            .subscribe(next, error, complete)

    }

    public getProjectById(projectId:string, next?:(value:any)=>void, error?:(error:any)=>void, complete?:()=>void) {

        this.httpService.get("projects/"+projectId)
            .pipe( map( response => {
                return (<Project[]> response)[0];
            }))
            .subscribe(next, error, complete)

    }

    public createProject(project:Project, next?:(value:any)=>void, error?:(error:any)=>void, complete?:()=>void) {

        this.httpService.post("projects", project)
            .pipe( map( response => {
                return (<Project[]> response)[0];
            }))
            .subscribe(next, error, complete)

    }

    public deleteProject(projectId:string, next?:(value:any)=>void, error?:(error:any)=>void, complete?:()=>void) {

        this.httpService.delete("projects/"+projectId)
            .subscribe(next, error, complete)

    }

    public updateProject(projectId:string, project:Project, next?:(value:any)=>void, error?:(error:any)=>void, complete?:()=>void) {

        this.httpService.put("projects/"+projectId, project)
            .pipe( map( response => {
                return (<Project[]> response)[0];
            }))
            .subscribe(next, error, complete)

    }

}