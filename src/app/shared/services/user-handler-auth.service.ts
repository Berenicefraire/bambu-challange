import { Injectable } from '@angular/core';
import { 
  Auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserHandlerAuthService {

  constructor(private auth: Auth) { }

  newUser(email: string, psw: string) {
    return createUserWithEmailAndPassword(this.auth, email, psw);
  }

  signIn(email: string, psw: string) {    
    return signInWithEmailAndPassword(this.auth, email, psw);
  }

  signOut() {
    return signOut(this.auth);
  }

}
