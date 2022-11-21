import { Component, OnInit, Input } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { UserHandlerAuthService } from 'src/app/shared/services/user-handler-auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() userData: any;
  faUser = faUser;
  private userEmail: string = '';
  constructor(private user: UserHandlerAuthService, private router: Router, private userStorage: LocalStorageService) { }

  ngOnInit(): void { }

  signOut() {
    this.user.signOut().then(res => {
      this.userStorage.removeUser();
      this.router.navigate(['/auth/login']);
    }).catch(err => console.log(err));
  }

  get getUserEmail() {
    return this.userEmail = String(this.userStorage.getUser());
  }


}
