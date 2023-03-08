import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserActions } from '@core/user/store/user';
import { Store } from '@ngrx/store';
import { ENDPOINTS } from '@shared/constants';
import { useNavigate } from '@shared/inject-hooks/use-navigate.hook';

import { BehaviorSubject } from 'rxjs';
import { AppState } from 'src/app/app.module';
import { AuthType, LoginDTO, LoginCredentials, UserDto } from '.';

export type AuthState = {
  auth: AuthType;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth$$ = new BehaviorSubject<AuthState>({ auth: 'none' });
  private http = inject(HttpClient);
  private navigate = useNavigate();
  private store = inject<Store<AppState>>(Store);

  autoLogin() {
    if (this.isSessionPersistenceDenied()) return;
    this.http
      .get<UserDto>(`${ENDPOINTS.CURRENT_USER}`)
      .subscribe(userDto => this.setAuthAndUserState(userDto));
  }

  private isSessionPersistenceDenied() {
    return !localStorage.getItem('rememberMe');
  }

  private setAuthAndUserState({ role, ...user }: UserDto) {
    this.auth$$.next({ auth: role });
    this.store.dispatch(UserActions.set_user(user));
  }

  login({ rememberMe, ...credentials }: LoginCredentials) {
    this.setSessionPersistencePermission(rememberMe);
    return this.http.post<LoginDTO>(ENDPOINTS.LOGIN, credentials);
  }

  private setSessionPersistencePermission(rememberMe: boolean) {
    localStorage.setItem('rememberMe', `${rememberMe}`);
  }

  loginSuccess({ user }: LoginDTO) {
    this.setAuthAndUserState(user);
    this.navigate('/');
  }

  logout() {
    this.removeUser();
    localStorage.removeItem('accessToken');
    this.navigate('/login');
  }

  private removeUser() {
    this.auth$$.next({ auth: 'none' });
    this.store.dispatch(UserActions.remove_user());
  }
}
