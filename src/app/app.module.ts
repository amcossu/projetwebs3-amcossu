import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service';
import { EventsService } from './events.service';
import { JobsService } from './jobs.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobCreateComponent } from './job-create/job-create.component';
import { JobEditComponent } from './job-edit/job-edit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users/:id',
    component: JobComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'candidature/:id',
    component: JobDetailsComponent,
  },
  {
    path: 'job-edit/:id',
    component: JobEditComponent,
  },
  {
    path: 'job-create',
    component: JobCreateComponent,

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'update',
    component: UpdateComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UpdateComponent,
    HomeComponent,
    JobComponent,
    JobDetailsComponent,
    JobCreateComponent,
    JobEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService, AuthGuard, JobsService,
    {
     provide: HTTP_INTERCEPTORS,
     useClass: TokenInterceptorService,
     multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
