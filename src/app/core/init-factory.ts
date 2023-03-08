import { AuthService } from '@features/auth';

export function initFactory(initService: AuthService) {
  return () => initService.autoLogin();
}
