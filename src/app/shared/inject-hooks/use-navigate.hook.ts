import { inject } from '@angular/core';
import { Router } from '@angular/router';

export function useNavigate() {
  const router = inject(Router);

  return (route: string) => router.navigate([route]);
}
