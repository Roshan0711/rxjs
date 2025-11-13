import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { httpInterceptors } from 'src/Interceptors/httpInterceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './common/login/login.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { EditProfileComponent } from './common/edit-profile/edit-profile.component';
import { ParentComponent } from './change-detection/parent/parent.component';
import { ChildComponent } from './change-detection/child/child.component';
import { ZoneExampleComponent } from './change-detection/zone-example/zone-example.component';
import { OnpushExampleComponent } from './change-detection/onpush-example/onpush-example.component';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { CustomPreloadStrategyService } from 'src/services/custom-preload-strategy.service';
import { APP_CONFIG, AppConfig } from 'src/Token/injectionToken';
const appConfig: AppConfig = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditProfileComponent,
    ParentComponent,
    ChildComponent,
    ZoneExampleComponent,
    OnpushExampleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{
      preloadingStrategy: CustomPreloadStrategyService
    }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MainLayoutModule
  ],
  providers: [ {
      provide: HTTP_INTERCEPTORS,
      useClass: httpInterceptors,
      multi: true
    },
    {
      provide : APP_CONFIG,
      useValue : appConfig,
      multi : true 
    }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }