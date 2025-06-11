import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'rxjs',
        loadChildren: () =>
          import('../rxjs-observable/rxjs-observable.module').then(
            (m) => m.RxjsObservableModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainLayoutModule {}
