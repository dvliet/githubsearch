import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';
import 'rxjs/add/operator/map';


@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent { 
    user: Array<any> = [];
    repos: Array<any> = [];
    username: string;
    
    constructor( private _githubservice: GithubService){
        this._githubservice.getUser().subscribe(user => {
            this.user = user;
        });

        this._githubservice.getRepos().subscribe(repos => {
            this.repos = repos;
        }); 
    }
    
    searchUser(){
        this._githubservice.updateUser(this.username);

        this._githubservice.getUser().subscribe(user => {
            this.user = user;
        });

        this._githubservice.getRepos().subscribe(repos => {
            this.repos = repos;
        }); 
    }
}
