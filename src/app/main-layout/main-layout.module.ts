import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../common/login/login.component';
import { AuthGurd } from 'src/Gaurds/canActivate.guard';
import { childGaurd } from 'src/Gaurds/canActivateChild.guard';
import { CanLoadGaurd } from 'src/Gaurds/canLoad.guard';
import { DeactivateGaurd } from 'src/Gaurds/canDeactivate.guard';
import { ParentComponent } from '../change-detection/parent/parent.component';
import { ZoneExampleComponent } from '../change-detection/zone-example/zone-example.component';
import { OnpushExampleComponent } from '../change-detection/onpush-example/onpush-example.component';

export const routes: Routes = [
  {
    path : "",
    component : LoginComponent,
    canDeactivate :[DeactivateGaurd],
  },
  {
    path: 'home',
    component: LayoutComponent,
    canActivate :[AuthGurd],
    canActivateChild :[childGaurd],
    children: [
      {
        path: 'rxjs',
        data : {PreloadingStrategy : true,title:"I am RXJS MODULE Welcome !..."},
        // canLoad : [CanLoadGaurd],
        loadChildren: () =>
          import('../rxjs-observable/rxjs-observable.module').then(
            (m) => m.RxjsObservableModule
          ),
      },
      {
        path: 'javascript',
        canActivate :[AuthGurd],
        // canLoad : [CanLoadGaurd],
        loadChildren: () =>
          import('../javascript/javascript.module').then(
            (m) => m.JavascriptModule
          ),
      },
      {
        path: 'angular',
        canActivate :[AuthGurd],
        // canLoad : [CanLoadGaurd],
        loadChildren: () =>
          import('../angular/angular.module').then(
            (m) => m.AngularModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainLayoutModule {
    constructor (){
    console.log("main module eagar loaded")
  }
}
