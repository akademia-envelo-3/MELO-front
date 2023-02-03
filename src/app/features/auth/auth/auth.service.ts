import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User, UserActions } from '@core/store/user';
import { Store } from '@ngrx/store';
import { ENDPOINTS, MESSAGES } from '@shared/constants';
import { useNavigate } from '@shared/inject-hooks';
import { Maybe } from '@shared/utility-types';
import { BehaviorSubject, map } from 'rxjs';
import { AppState } from 'src/app/app.module';

type UserDTO = {
  firstName: string;
  lastName: string;
  email: string;
  authType: AuthType;
};

export type AuthType = 'none' | 'admin' | 'employee' | 'guest';
type AuthState = { auth: AuthType };

export type LoginCredentials = { email: string; password: string };

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth$$ = new BehaviorSubject<AuthState>({ auth: 'none' });
  private http = inject(HttpClient);
  private navigate = useNavigate();
  private store = inject<Store<AppState>>(Store);

  autoLogin() {
    this.http.get<UserDTO>(`${ENDPOINTS.CURRENT_USER}`).subscribe({
      next: user => this.setUser(user),

      error: () => this.removeUser(),
    });
  }

  login(userCredentials: LoginCredentials) {
    this.http.post<UserDTO>(ENDPOINTS.LOGIN, userCredentials).subscribe({
      next: userDto => this.setUser(userDto),

      error: () => {
        this.removeUser();
        alert(MESSAGES.AUTHENTICATION_FAILED);
      },
    });
  }

  logout() {
    this.removeUser();
    localStorage.removeItem('accessToken');
    this.navigate('/login');
  }
  private setUser({ authType, ...user }: UserDTO) {
    this.auth$$.next({ auth: authType });
    this.store.dispatch(UserActions.set_user(user));
  }
  private removeUser() {
    this.auth$$.next({ auth: 'none' });
    this.store.dispatch(UserActions.remove_user());
  }
}
