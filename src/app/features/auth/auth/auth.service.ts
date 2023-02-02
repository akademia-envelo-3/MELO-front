import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '@shared/constants';
import { useNavigate } from '@shared/inject-hooks';
import { Maybe } from '@shared/utility-types';
import { BehaviorSubject, map } from 'rxjs';

type User = {
  name: string;
  email: string;
  authType: AuthType;
};

export type AuthType = 'none' | 'admin' | 'employee' | 'guest';
type AuthState = { auth: AuthType; user: Maybe<User> };

export type LoginCredentials = { email: string; password: string };

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth$$ = new BehaviorSubject<AuthState>({ auth: 'none', user: null });
  private http = inject(HttpClient);
  private navigate = useNavigate();

  get currentUser$() {
    return this.auth$$.pipe(map(state => state.user));
  }

  autoLogin() {
    this.http.get<User>(`${ENDPOINTS.currentUser}`).subscribe({
      next: user => this.setUser(user),

      error: () => this.auth$$.next({ auth: 'none', user: null }),
    });
  }

  login(userCredentials: LoginCredentials) {
    this.http.post<User>(ENDPOINTS.login, userCredentials).subscribe({
      next: user => {
        this.setUser(user);
        this.navigate('/');
      },

      error: () => this.auth$$.next({ auth: 'none', user: null }),
    });
  }

  private setUser(user: User) {
    this.auth$$.next({
      ...this.auth$$.value,
      auth: user.authType ?? 'none',
      user: user,
    });
  }
}
