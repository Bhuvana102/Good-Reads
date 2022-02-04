import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
    public activePage=''
    constructor() { 
        this.activePage = 'home'
    }
}
