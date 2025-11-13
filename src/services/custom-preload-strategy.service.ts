import { Injectable, NgZone } from '@angular/core';
import { PreloadingStrategy, Route, Router } from '@angular/router';
import { fromEvent, merge, Observable, of, Subject } from 'rxjs';
import { debounceTime, filter, switchMap, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadStrategyService implements PreloadingStrategy {

  private userIdle$ = new Subject<void>();
  private userActive$ = new Subject<void>();

  constructor(private zone: NgZone,private router :Router) {
    this.monitorUserActivity();
    this.router.navigate([],{
      
    })
  }

  preload(route: Route, load: Function): Observable<any> {
    // Preload critical routes immediately
    if (route.data && route.data['PreloadingStrategy']) {
      return load();
    }

    // Defer non-critical module loading until user idle for 5 mins
    return this.userIdle$.pipe(
      // trigger once user is inactive for defined time
      switchMap(() =>
        load().then(() => {
          console.log(`Preloaded module: ${route.path}`);
          return of(null);
        })
      ),
      takeUntil(this.userActive$) // if user becomes active again, stop loading
    );
  }

  private monitorUserActivity() {
    this.zone.runOutsideAngular(() => {
      const activityEvents$ = merge(
        fromEvent(window, 'mousemove'),
        fromEvent(window, 'keydown'),
        fromEvent(window, 'scroll'),
        fromEvent(window, 'click')
      );
      console.log("hiii")
      // User inactivity for 5 minutes = preload trigger
      activityEvents$
        .pipe(
          debounceTime(30), // 5 minutes = 300,000 ms
          filter(() => document.visibilityState === 'visible')
        )
        .subscribe(() => this.userIdle$.next());

      // Any activity resets the idle timer
      activityEvents$.subscribe(() => this.userActive$.next());
    });
  }

  // preload(route: Route, fn: () => Observable<any>): Observable<any> {
  //  if (route.data && route.data['PreloadingStrategy']) {
  //     console.log('🚀 Preloading module:', route.path);
  //     return fn(); // actually preload this route
  //   }

  // }
}

