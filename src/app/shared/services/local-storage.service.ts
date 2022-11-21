import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private LS_USER_KEY: string = 'ch_user';

  constructor() { }

  getUser() {
    return localStorage.getItem(this.LS_USER_KEY);
  }

  setUser(user: string) {
    return localStorage.setItem(this.LS_USER_KEY, user);
  }

  removeUser() {
    return localStorage.removeItem(this.LS_USER_KEY);
  }

}
