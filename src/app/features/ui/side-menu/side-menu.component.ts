import { Subscription, fromEvent, Observable, throttleTime } from 'rxjs';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgFor, NgIf, TitleCasePipe, NgClass, AsyncPipe } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {
  MenuCategory,
  SideMenuState,
  SideMenuStateService,
} from './side-menu.state.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    TitleCasePipe,
    NgFor,
    NgIf,
    NgClass,
    AsyncPipe,
    RouterModule,
  ],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent implements OnInit, OnDestroy {
  private sideMenuStateService = inject(SideMenuStateService);
  private changeDetectorRef = inject(ChangeDetectorRef);
  private router = inject(Router);
  private resizeObservable$: Observable<Event> = new Observable<Event>();

  private subscriptions = new Subscription();
  private wasInside = false;
  disableAnimations = false;

  sideMenuState!: SideMenuState;

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.sideMenuStateService.setDesktopMenuVisibility(false);
    }
    this.wasInside = false;
  }

  toggleMenu(category: MenuCategory, matMenuTrigger: MatMenuTrigger) {
    this.sideMenuStateService.toggleMenu(category, matMenuTrigger);
  }

  closeMenu() {
    this.sideMenuStateService.setDesktopMenuVisibility(false);
  }

  navigate(category: MenuCategory) {
    this.sideMenuStateService.updateSelectedCategory(category);
    this.router.navigate([category.href]);
  }

  logout() {
    this.sideMenuStateService.updateSelectedCategory({ categoryName: 'logout' });
    return 'Logged out';
  }

  private disableAnimationsOnResize() {
    this.resizeObservable$ = fromEvent(window, 'resize');
    let resizeTimer: ReturnType<typeof setTimeout>;
    return this.resizeObservable$.pipe(throttleTime(1000)).subscribe(() => {
      this.disableAnimations = true;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.disableAnimations = false;
      }, 400);
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnInit() {
    const stateSub = this.sideMenuStateService.sideMenuSetupState$.subscribe(
      sideMenuState => {
        this.sideMenuState = sideMenuState;
        this.changeDetectorRef.detectChanges();
      }
    );

    const resizeSub = this.disableAnimationsOnResize();
    this.subscriptions.add(stateSub);
    this.subscriptions.add(resizeSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
