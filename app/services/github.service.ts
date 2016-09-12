import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

    private username: string;
    private client_id = 'be9a27bc90c185318e9b';
    private client_secret = 'ce6f0c4d8e0668ec6ac17a733245c41d19279c4c';

    constructor(private _http: Http) {
        console.log('service body');
        this.username = 'dvliet';
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username + '/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }

    updateUser(username){
        this.username = username;
    }
}
