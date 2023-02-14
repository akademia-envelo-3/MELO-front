import { Subscription, fromEvent, Observable, throttleTime } from 'rxjs';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgFor, NgIf, TitleCasePipe, NgClass, AsyncPipe } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MenuCategory, SideMenuStateService } from './side-menu.state.service';

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
  sideMenuStateService = inject(SideMenuStateService);
  private changeDetectorRef = inject(ChangeDetectorRef);
  private router = inject(Router);
  private resizeObservable$: Observable<Event> = new Observable<Event>();

  private subscriptions = new Subscription();
  private wasInside = false;
  protected disableAnimations = false;

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

  @ViewChild('mobileMenuTrigger') public mobileNav!: MatMenuTrigger;

  toggle(category: MenuCategory, matMenuTrigger: MatMenuTrigger) {
    this.sideMenuStateService.toggleMenu(category, matMenuTrigger);
  }

  close() {
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

  private closeMobileSubCategoriesMenuIfSideMenuIsClosed() {
    return this.sideMenuStateService.setupState$.subscribe(state => {
      if (!state.isMobileMenuActive) {
        this.mobileNav?.closeMenu();
      }
    });
  }

  ngOnInit() {
    const resizeSub = this.disableAnimationsOnResize();
    const sub = this.closeMobileSubCategoriesMenuIfSideMenuIsClosed();
    this.subscriptions.add(resizeSub);
    this.subscriptions.add(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
