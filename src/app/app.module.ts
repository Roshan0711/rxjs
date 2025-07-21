import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { httpInterceptors } from 'src/Interceptors/httpInterceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [ {
      provide: HTTP_INTERCEPTORS,
      useClass: httpInterceptors,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
