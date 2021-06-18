import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { JwtInterceptor, ErrorInterceptor } from '@app/_helpers';
import { LoginModule } from 'src/login/login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from 'src/pages/pages.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiServiceService } from './api-service.service';
import { NgxPaginationModule } from 'ngx-pagination'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LoginModule,
    NgxPaginationModule,
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ApiServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
